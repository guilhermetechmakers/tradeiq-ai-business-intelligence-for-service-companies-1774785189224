import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from '@/components/theme-provider'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import AppNotFound from '@/pages/AppNotFound'
import AdminDashboard from '@/pages/AdminDashboard'
import AgentChat from '@/pages/AgentChat'
import AgentConfig from '@/pages/AgentConfig'
import AgentTraining from '@/pages/AgentTraining'
import AuditLogs from '@/pages/AuditLogs'
import Billing from '@/pages/Billing'
import BillingHistory from '@/pages/BillingHistory'
import FinanceOverview from '@/pages/FinanceOverview'
import Help from '@/pages/Help'
import ImprovementPlans from '@/pages/ImprovementPlans'
import IntegrationsMonitor from '@/pages/IntegrationsMonitor'
import IntegrationsOverview from '@/pages/IntegrationsOverview'
import IntegrationConnect from '@/pages/IntegrationConnect'
import IntegrationDetail from '@/pages/IntegrationDetail'
import InterviewResponses from '@/pages/InterviewResponses'
import InterviewSession from '@/pages/InterviewSession'
import InterviewerSetup from '@/pages/InterviewerSetup'
import JobsBoard from '@/pages/JobsBoard'
import KnowledgeBase from '@/pages/KnowledgeBase'
import Landing from '@/pages/Landing'
import LeadsPipeline from '@/pages/LeadsPipeline'
import LiveDashboard from '@/pages/LiveDashboard'
import Login from '@/pages/auth/Login'
import NotFound from '@/pages/NotFound'
import NotificationsCenter from '@/pages/NotificationsCenter'
import OcrUpload from '@/pages/OcrUpload'
import PasswordReset from '@/pages/auth/PasswordReset'
import Profile from '@/pages/Profile'
import SendInterview from '@/pages/SendInterview'
import ServerError from '@/pages/ServerError'
import Settings from '@/pages/Settings'
import Signup from '@/pages/auth/Signup'
import UserManagement from '@/pages/UserManagement'
import VerifyEmail from '@/pages/auth/VerifyEmail'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/interview/:sessionToken" element={<InterviewSession />} />
            <Route path="/500" element={<ServerError />} />

            <Route path="/app" element={<DashboardLayout />}>
              <Route index element={<LiveDashboard />} />
              <Route path="integrations" element={<IntegrationsOverview />} />
              <Route path="integrations/connect" element={<IntegrationConnect />} />
              <Route path="integrations/ocr" element={<OcrUpload />} />
              <Route path="integrations/:id" element={<IntegrationDetail />} />
              <Route path="jobs" element={<JobsBoard />} />
              <Route path="leads" element={<LeadsPipeline />} />
              <Route path="finance" element={<FinanceOverview />} />
              <Route path="plans" element={<ImprovementPlans />} />
              <Route path="agent" element={<AgentChat />} />
              <Route path="agent/config" element={<AgentConfig />} />
              <Route path="agent/training" element={<AgentTraining />} />
              <Route path="interviewer" element={<InterviewerSetup />} />
              <Route path="interviewer/send" element={<SendInterview />} />
              <Route path="interviewer/responses" element={<InterviewResponses />} />
              <Route path="knowledge" element={<KnowledgeBase />} />
              <Route path="notifications" element={<NotificationsCenter />} />
              <Route path="billing" element={<Billing />} />
              <Route path="billing/history" element={<BillingHistory />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="help" element={<Help />} />
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="admin/users" element={<UserManagement />} />
              <Route path="admin/integrations" element={<IntegrationsMonitor />} />
              <Route path="admin/audit" element={<AuditLogs />} />
              <Route path="*" element={<AppNotFound />} />
            </Route>

            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster richColors position="top-right" />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
