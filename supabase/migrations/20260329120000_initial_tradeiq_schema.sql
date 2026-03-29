-- TradeIQ core schema — idempotent where possible. RLS enabled on all tables.

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

DO $$ BEGIN
  CREATE TYPE public.user_role AS ENUM ('owner', 'admin', 'manager', 'technician');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS public.companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  vertical TEXT,
  timezone TEXT NOT NULL DEFAULT 'UTC',
  currency TEXT NOT NULL DEFAULT 'USD',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  company_id UUID REFERENCES public.companies (id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  display_name TEXT,
  role public.user_role NOT NULL DEFAULT 'technician',
  phone TEXT,
  language TEXT NOT NULL DEFAULT 'en',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.integration_connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies (id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'disconnected',
  last_sync TIMESTAMPTZ,
  metadata JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies (id) ON DELETE CASCADE,
  customer_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'scheduled',
  scheduled_at TIMESTAMPTZ,
  assigned_to UUID REFERENCES public.profiles (id),
  linked_thread_id UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies (id) ON DELETE CASCADE,
  external_id TEXT,
  amount NUMERIC(14, 2) NOT NULL,
  due_date DATE,
  status TEXT NOT NULL DEFAULT 'open',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies (id) ON DELETE CASCADE,
  source TEXT NOT NULL,
  contact TEXT NOT NULL,
  stage TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies (id) ON DELETE CASCADE,
  source TEXT NOT NULL,
  extracted_text TEXT,
  meta JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.interview_transcripts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies (id) ON DELETE CASCADE,
  template_type TEXT NOT NULL,
  transcript_text TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.improvement_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies (id) ON DELETE CASCADE,
  domain TEXT NOT NULL,
  actions JSONB NOT NULL DEFAULT '[]',
  generated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.chat_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies (id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles (id) ON DELETE CASCADE,
  messages JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.payment_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies (id) ON DELETE CASCADE,
  stripe_id TEXT,
  amount NUMERIC(14, 2) NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES public.companies (id) ON DELETE SET NULL,
  user_id UUID REFERENCES public.profiles (id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  details JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies (id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles (id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  body TEXT,
  read_at TIMESTAMPTZ,
  deep_link TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_profiles_company ON public.profiles (company_id);
CREATE INDEX IF NOT EXISTS idx_integrations_company ON public.integration_connections (company_id);
CREATE INDEX IF NOT EXISTS idx_jobs_company ON public.jobs (company_id);
CREATE INDEX IF NOT EXISTS idx_invoices_company ON public.invoices (company_id);
CREATE INDEX IF NOT EXISTS idx_leads_company ON public.leads (company_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON public.notifications (user_id);

ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.integration_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interview_transcripts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.improvement_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.user_company_id()
RETURNS UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT company_id FROM public.profiles WHERE id = auth.uid()
$$;

CREATE OR REPLACE FUNCTION public.is_platform_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    (SELECT role IN ('owner', 'admin') FROM public.profiles WHERE id = auth.uid()),
    false
  )
$$;

-- Companies: members read their company row
DROP POLICY IF EXISTS "companies_select_member" ON public.companies;
CREATE POLICY "companies_select_member"
  ON public.companies FOR SELECT
  USING (id = public.user_company_id());

DROP POLICY IF EXISTS "companies_update_owner" ON public.companies;
CREATE POLICY "companies_update_owner"
  ON public.companies FOR UPDATE
  USING (id = public.user_company_id() AND public.is_platform_admin());

-- Profiles: users manage own row
DROP POLICY IF EXISTS "profiles_self_select" ON public.profiles;
CREATE POLICY "profiles_self_select"
  ON public.profiles FOR SELECT
  USING (id = auth.uid() OR company_id = public.user_company_id());

DROP POLICY IF EXISTS "profiles_self_update" ON public.profiles;
CREATE POLICY "profiles_self_update"
  ON public.profiles FOR UPDATE
  USING (id = auth.uid());

DROP POLICY IF EXISTS "profiles_self_insert" ON public.profiles;
CREATE POLICY "profiles_self_insert"
  ON public.profiles FOR INSERT
  WITH CHECK (id = auth.uid());

-- Generic company-scoped read/write
DROP POLICY IF EXISTS "integration_connections_company" ON public.integration_connections;
CREATE POLICY "integration_connections_company"
  ON public.integration_connections FOR ALL
  USING (company_id = public.user_company_id())
  WITH CHECK (company_id = public.user_company_id());

DROP POLICY IF EXISTS "jobs_company" ON public.jobs;
CREATE POLICY "jobs_company"
  ON public.jobs FOR ALL
  USING (company_id = public.user_company_id())
  WITH CHECK (company_id = public.user_company_id());

DROP POLICY IF EXISTS "invoices_company" ON public.invoices;
CREATE POLICY "invoices_company"
  ON public.invoices FOR ALL
  USING (company_id = public.user_company_id())
  WITH CHECK (company_id = public.user_company_id());

DROP POLICY IF EXISTS "leads_company" ON public.leads;
CREATE POLICY "leads_company"
  ON public.leads FOR ALL
  USING (company_id = public.user_company_id())
  WITH CHECK (company_id = public.user_company_id());

DROP POLICY IF EXISTS "documents_company" ON public.documents;
CREATE POLICY "documents_company"
  ON public.documents FOR ALL
  USING (company_id = public.user_company_id())
  WITH CHECK (company_id = public.user_company_id());

DROP POLICY IF EXISTS "interview_transcripts_company" ON public.interview_transcripts;
CREATE POLICY "interview_transcripts_company"
  ON public.interview_transcripts FOR ALL
  USING (company_id = public.user_company_id())
  WITH CHECK (company_id = public.user_company_id());

DROP POLICY IF EXISTS "improvement_plans_company" ON public.improvement_plans;
CREATE POLICY "improvement_plans_company"
  ON public.improvement_plans FOR ALL
  USING (company_id = public.user_company_id())
  WITH CHECK (company_id = public.user_company_id());

DROP POLICY IF EXISTS "chat_sessions_company" ON public.chat_sessions;
CREATE POLICY "chat_sessions_company"
  ON public.chat_sessions FOR ALL
  USING (company_id = public.user_company_id() AND user_id = auth.uid())
  WITH CHECK (company_id = public.user_company_id() AND user_id = auth.uid());

DROP POLICY IF EXISTS "payment_transactions_company" ON public.payment_transactions;
CREATE POLICY "payment_transactions_company"
  ON public.payment_transactions FOR ALL
  USING (company_id = public.user_company_id())
  WITH CHECK (company_id = public.user_company_id());

DROP POLICY IF EXISTS "notifications_self" ON public.notifications;
CREATE POLICY "notifications_self"
  ON public.notifications FOR ALL
  USING (company_id = public.user_company_id() AND user_id = auth.uid())
  WITH CHECK (company_id = public.user_company_id() AND user_id = auth.uid());

DROP POLICY IF EXISTS "audit_logs_company" ON public.audit_logs;
CREATE POLICY "audit_logs_company"
  ON public.audit_logs FOR SELECT
  USING (
    company_id = public.user_company_id()
    OR company_id IS NULL
  );
