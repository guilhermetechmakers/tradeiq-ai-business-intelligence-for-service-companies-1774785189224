# Modern Design Best Practices

## Philosophy

Create unique, memorable experiences while maintaining consistency through modern design principles. Every project should feel distinct yet professional, innovative yet intuitive.

---

## Landing Pages & Marketing Sites

### Hero Sections
**Go beyond static backgrounds:**
- Animated gradients with subtle movement
- Particle systems or geometric shapes floating
- Interactive canvas backgrounds (Three.js, WebGL)
- Video backgrounds with proper fallbacks
- Parallax scrolling effects
- Gradient mesh animations
- Morphing blob animations


### Layout Patterns
**Use modern grid systems:**
- Bento grids (asymmetric card layouts)
- Masonry layouts for varied content
- Feature sections with diagonal cuts or curves
- Overlapping elements with proper z-index
- Split-screen designs with scroll-triggered reveals

**Avoid:** Traditional 3-column equal grids

### Scroll Animations
**Engage users as they scroll:**
- Fade-in and slide-up animations for sections
- Scroll-triggered parallax effects
- Progress indicators for long pages
- Sticky elements that transform on scroll
- Horizontal scroll sections for portfolios
- Text reveal animations (word by word, letter by letter)
- Number counters animating into view

**Avoid:** Static pages with no scroll interaction

### Call-to-Action Areas
**Make CTAs impossible to miss:**
- Gradient buttons with hover effects
- Floating action buttons with micro-interactions
- Animated borders or glowing effects
- Scale/lift on hover
- Interactive elements that respond to mouse position
- Pulsing indicators for primary actions

---

## Dashboard Applications

### Layout Structure
**Always use collapsible side navigation:**
- Sidebar that can collapse to icons only
- Smooth transition animations between states
- Persistent navigation state (remember user preference)
- Mobile: drawer that slides in/out
- Desktop: sidebar with expand/collapse toggle
- Icons visible even when collapsed

**Structure:**
```
/dashboard (layout wrapper with sidebar)
  /dashboard/overview
  /dashboard/analytics
  /dashboard/settings
  /dashboard/users
  /dashboard/projects
```

All dashboard pages should be nested inside the dashboard layout, not separate routes.

### Data Tables
**Modern table design:**
- Sticky headers on scroll
- Row hover states with subtle elevation
- Sortable columns with clear indicators
- Pagination with items-per-page control
- Search/filter with instant feedback
- Selection checkboxes with bulk actions
- Responsive: cards on mobile, table on desktop
- Loading skeletons, not spinners
- Empty states with illustrations or helpful text

**Use modern table libraries:**
- TanStack Table (React Table v8)
- AG Grid for complex data
- Data Grid from MUI (if using MUI)

### Charts & Visualizations
**Use the latest charting libraries:**
- Recharts (for React, simple charts)
- Chart.js v4 (versatile, well-maintained)
- Apache ECharts (advanced, interactive)
- D3.js (custom, complex visualizations)
- Tremor (for dashboards, built on Recharts)

**Chart best practices:**
- Animated transitions when data changes
- Interactive tooltips with detailed info
- Responsive sizing
- Color scheme matching design system
- Legend placement that doesn't obstruct data
- Loading states while fetching data

### Dashboard Cards
**Metric cards should stand out:**
- Gradient backgrounds or colored accents
- Trend indicators (↑ ↓ with color coding)
- Sparkline charts for historical data
- Hover effects revealing more detail
- Icon representing the metric
- Comparison to previous period

---

## Color & Visual Design

### Color Palettes
**Create depth with gradients:**
- Primary gradient (not just solid primary color)
- Subtle background gradients
- Gradient text for headings
- Gradient borders on cards
- Elevated surfaces for depth

**Color usage:**
- 60-30-10 rule (dominant, secondary, accent)
- Consistent semantic colors (success, warning, error)
- Accessible contrast ratios (WCAG AA minimum)

### Typography
**Create hierarchy through contrast:**
- Large, bold headings (48-72px for heroes)
- Clear size differences between levels
- Variable font weights (300, 400, 600, 700)
- Letter spacing for small caps
- Line height 1.5-1.7 for body text
- Inter, Poppins, or DM Sans for modern feel

### Shadows & Depth
**Layer UI elements:**
- Multi-layer shadows for realistic depth
- Colored shadows matching element color
- Elevated states on hover
- Neumorphism for special elements (sparingly)

---

## Interactions & Micro-animations

### Button Interactions
**Every button should react:**
- Scale slightly on hover (1.02-1.05)
- Lift with shadow on hover
- Ripple effect on click
- Loading state with spinner or progress
- Disabled state clearly visible
- Success state with checkmark animation

### Card Interactions
**Make cards feel alive:**
- Lift on hover with increased shadow
- Subtle border glow on hover
- Tilt effect following mouse (3D transform)
- Smooth transitions (200-300ms)
- Click feedback for interactive cards

### Form Interactions
**Guide users through forms:**
- Input focus states with border color change
- Floating labels that animate up
- Real-time validation with inline messages
- Success checkmarks for valid inputs
- Error states with shake animation
- Password strength indicators
- Character count for text areas

### Page Transitions
**Smooth between views:**
- Fade + slide for page changes
- Skeleton loaders during data fetch
- Optimistic UI updates
- Stagger animations for lists
- Route transition animations

---

## Mobile Responsiveness

### Mobile-First Approach
**Design for mobile, enhance for desktop:**
- Touch targets minimum 44x44px
- Generous padding and spacing
- Sticky bottom navigation on mobile
- Collapsible sections for long content
- Swipeable cards and galleries
- Pull-to-refresh where appropriate

### Responsive Patterns
**Adapt layouts intelligently:**
- Hamburger menu → full nav bar
- Card grid → stack on mobile
- Sidebar → drawer
- Multi-column → single column
- Data tables → card list
- Hide/show elements based on viewport

---

## Loading & Empty States

### Loading States
**Never leave users wondering:**
- Skeleton screens matching content layout
- Progress bars for known durations
- Animated placeholders
- Spinners only for short waits (<3s)
- Stagger loading for multiple elements
- Shimmer effects on skeletons

### Empty States
**Make empty states helpful:**
- Illustrations or icons
- Helpful copy explaining why it's empty
- Clear CTA to add first item
- Examples or suggestions
- No "no data" text alone

---

## Unique Elements to Stand Out

### Distinctive Features
**Add personality:**
- Custom cursor effects on landing pages
- Animated page numbers or section indicators
- Unusual hover effects (magnification, distortion)
- Custom scrollbars
- Glassmorphism for overlays
- Animated SVG icons
- Typewriter effects for hero text
- Confetti or celebration animations for actions

### Interactive Elements
**Engage users:**
- Drag-and-drop interfaces
- Sliders and range controls
- Toggle switches with animations
- Progress steps with animations
- Expandable/collapsible sections
- Tabs with slide indicators
- Image comparison sliders
- Interactive demos or playgrounds

---

## Consistency Rules

### Maintain Consistency
**What should stay consistent:**
- Spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- Border radius values
- Animation timing (200ms, 300ms, 500ms)
- Color system (primary, secondary, accent, neutrals)
- Typography scale
- Icon style (outline vs filled)
- Button styles across the app
- Form element styles

### What Can Vary
**Project-specific customization:**
- Color palette (different colors, same system)
- Layout creativity (grids, asymmetry)
- Illustration style
- Animation personality
- Feature-specific interactions
- Hero section design
- Card styling variations
- Background patterns or textures

---

## Technical Excellence

### Performance
- Optimize images (WebP, lazy loading)
- Code splitting for faster loads
- Debounce search inputs
- Virtualize long lists
- Minimize re-renders
- Use proper memoization

### Accessibility
- Keyboard navigation throughout
- ARIA labels where needed
- Focus indicators visible
- Screen reader friendly
- Sufficient color contrast
- Respect reduced motion preferences

---

## Key Principles

1. **Be Bold** - Don't be afraid to try unique layouts and interactions
2. **Be Consistent** - Use the same patterns for similar functions
3. **Be Responsive** - Design works beautifully on all devices
4. **Be Fast** - Animations are smooth, loading is quick
5. **Be Accessible** - Everyone can use what you build
6. **Be Modern** - Use current design trends and technologies
7. **Be Unique** - Each project should have its own personality
8. **Be Intuitive** - Users shouldn't need instructions


---

# Project-Specific Customizations

**IMPORTANT: This section contains the specific design requirements for THIS project. The guidelines above are universal best practices - these customizations below take precedence for project-specific decisions.**

## User Design Requirements

# TradeIQ - Development Blueprint

## Project Concept
TradeIQ is an AI-powered business intelligence web application for small-to-medium service companies (roofing, cleaning, mechanics, landscaping, HVAC, electrical). It consolidates read-only data from the tools these businesses already use — WhatsApp Business, Gmail, Google Drive, QuickBooks, Google Calendar, Instagram/Facebook, and OCR uploads — and continuously analyzes that data with domain-specific AI agents. Output is delivered as:
- A Live Company Dashboard: real-time KPIs and urgent flags across finance, operations, leads, HR, and marketing.
- Area Improvement Plans: rolling, prioritized, data-grounded action plans per domain.
- A Custom Company AI Agent: a private, company-trained conversational assistant answering queries in English/Spanish with source-backed citations.
- An AI Interviewer: public web + WhatsApp-driven interviews (5 templates) to capture staff knowledge and feed the knowledge base.

Vision: deliver zero-workflow-disruption intelligence and actionable coaching to trade businesses that currently operate across fragmented tools and informal channels (WhatsApp threads, DMs, paper invoices).

## Problem Statement
- Core problems:
  - Fragmented operational data across messaging apps, email, accounting, calendar, and files.
  - Lack of searchable job history and institutional knowledge; critical information lives in technicians’ heads or closed chat threads.
  - Missed or unpaid invoices due to lack of consolidated finance visibility.
  - Leads (Instagram DMs, Gmail) get lost; no unified pipeline or follow-up reminders.
  - Existing enterprise tools are too complex/expensive; consumer tools require heavy setup and don’t speak trade language.

- Who experiences these problems:
  - Owners/operators (phone-first, small teams 2–30 employees).
  - Technicians and team leads (WhatsApp-first, low tolerance for new apps).
  - Admin/coordinators (manage scheduling, invoices, social DMs).

- Why it matters:
  - Operational inefficiencies cause lost revenue, late payments, poor customer experience, knowledge loss on staff turnover, and poor decision-making.

- Current state/gaps without this solution:
  - No single-pane-of-glass for KPIs; ad-hoc decisions based on memory/gut; fragmented audits and no company-trained AI for grounded queries.

## Solution
- Approach:
  - Read-first connectors ingest historical and live data using OAuth/webhook adapters; canonical ETL normalizes objects (Job, Invoice, MessageThread, Document, Lead).
  - Vectorization and RAG: generate embeddings, index in a Vector DB, and build retrieval pipelines for agents and the Company AI Agent.
  - Domain AI agents run scheduled and event-triggered analyses to generate alerts and structured Area Improvement Plans.
  - AI Interviewer collects staff knowledge via WhatsApp deep-links or public web sessions (voice-to-text supported), creating transcripts that feed KB and agent training.
  - Billing & admin tools for subscriptions, payment methods, admin analytics, and auditability.

- How it addresses problems:
  - Consolidates data for real-time visibility, surfaces overdue invoices and missed leads, auto-generates prioritized improvement actions, and creates a company-specific AI that answers grounded questions and reduces reliance on tribal knowledge.

- Key differentiators:
  - Deep WhatsApp+QuickBooks integrations, phone-first interview flows, industry-specific plan templates, company-trained private AI agent, and read-first low-friction onboarding.

- Value creation:
  - Faster, data-driven decisions; actionable plans to improve cash flow and operations; preserved institutional knowledge; higher lead conversion and fewer unpaid invoices.

## Requirements

### 1. Pages (UI Screens)
For each page include Purpose, Key sections/components, Contribution.

- Landing Page
  - Purpose: Marketing and lead capture to convert visitors to trials.
  - Components: Hero (one-line pitch + CTAs), feature highlights, industry carousel, pricing teaser, social proof, footer.
  - Contribution: Drives signup and communicates value to owners.

- Login / Signup
  - Purpose: Authentication entry (email/password, magic link).
  - Components: Email input, password field, magic link toggle, SSO placeholders, validation, links (reset, verify).
  - Contribution: Secure access and friction-minimized onboarding.

- Password Reset
  - Purpose: Self-service password reset.
  - Components: Request form, reset link confirmation, new password entry with strength meter.
  - Contribution: Account recovery and security.

- Email Verification
  - Purpose: Verify email tokens and surface next onboarding steps.
  - Components: Status indicator, CTA to onboarding, resend link.
  - Contribution: Completes account activation and drives integration setup.

- User Profile
  - Purpose: Manage personal and company metadata.
  - Components: Profile card, company details (timezone, language, vertical, currency), delete/export controls.
  - Contribution: Locale and billing correctness; data governance.

- Settings & Preferences
  - Purpose: Global preferences, notifications, API keys placeholder.
  - Components: Notification toggles, session management, API key request panel, integrations quick status.
  - Contribution: Personalization and admin controls.

- About & Help
  - Purpose: Documentation and onboarding guidance.
  - Components: FAQ, getting started checklist, SOP templates, support form.
  - Contribution: Reduce support load and improve activation.

- Integrations Overview
  - Purpose: Central connector management.
  - Components: Connector tiles (status), connect CTA, last sync timestamps, OCR upload CTA.
  - Contribution: Primary value enabling data ingestion.

- Integration Connect Flow
  - Purpose: OAuth/connect flows with monitoring.
  - Components: Connector selection, OAuth modal, permissions checklist, sync progress.
  - Contribution: Securely establish read-only connections and initial ingest.

- Integration Detail & Logs
  - Purpose: Troubleshoot connector issues.
  - Components: Status, scopes, sync logs, manual sync, reconnect/disconnect, sample preview.
  - Contribution: Support and reliability.

- OCR Document Upload
  - Purpose: Upload physical docs for OCR and extraction.
  - Components: Drag/drop, camera capture, progress, field mapping, save to Documents.
  - Contribution: Digitize invoices/records and feed KB.

- Live Company Dashboard
  - Purpose: Single-screen consolidated operational view.
  - Components: Top KPI strip, urgent flags, area tiles, recent activity feed, quick actions.
  - Contribution: Immediate situational awareness and actionability.

- Area Improvement Plans
  - Purpose: Display AI-generated improvement plans and track execution.
  - Components: Plan selector, timeline, action list (priority, assignee, due date), AI explanation panel, progress tracking.
  - Contribution: Turn insights into prioritized, assignable actions.

- Jobs Board
  - Purpose: Operational job list and quick status updates.
  - Components: Job list with filters, detail drawer, inline status updates, debrief trigger.
  - Contribution: Improve dispatch and job status visibility.

- Leads Pipeline
  - Purpose: Consolidate inbound leads and manage pipeline.
  - Components: Kanban columns, lead cards, missed-contact indicators, bulk import/export.
  - Contribution: Prevent lost leads and automate follow-ups.

- Finance Overview
  - Purpose: Financial health & QuickBooks sync view.
  - Components: Cash forecast chart, overdue invoices table, AR aging, job margin distribution.
  - Contribution: Reduce unpaid invoices and improve cash management.

- Notifications Center
  - Purpose: Centralized alerts and audit feed.
  - Components: Unread/archived tabs, filters, notification cards with deep links.
  - Contribution: Ensures action items are surfaced and tracked.

- Company AI Agent Chat
  - Purpose: Conversational interface for company-specific queries.
  - Components: Chat input (voice, language toggle), conversation thread with citations, quick actions, model/training info.
  - Contribution: Fast, grounded answers and action creation.

- Agent Configuration & Training
  - Purpose: Admin controls to include/exclude datasets and retrain.
  - Components: Dataset toggles, persona settings, retention controls, manual retrain.
  - Contribution: Governance of agent behavior and data scope.

- Agent Training Status
  - Purpose: Monitor background training and ingestion jobs.
  - Components: Job list, embeddings health, last ingest timestamps, downloadable logs.
  - Contribution: Operational transparency and debugging.

- AI Interviewer Setup
  - Purpose: Configure interview templates, cadence, and recipients.
  - Components: Template selector, cadence scheduler, contact mapping, language toggle, preview.
  - Contribution: Systematic capture of field knowledge.

- Send Interview Link
  - Purpose: Distribute interview invitations via WhatsApp, SMS, or web link.
  - Components: Recipient list, channel selector, delivery status, resend.
  - Contribution: Low-friction data collection from staff.

- Interview Session (Public Web Chat)
  - Purpose: Public-facing interview UI for staff to respond (no login).
  - Components: Conversational UI, voice recording, progress save, submit confirmation.
  - Contribution: Capture field insights and transcripts.

- Interview Responses & Transcripts
  - Purpose: Manage responses and promote to KB.
  - Components: Transcript viewer, sentiment/tags, promote-to-KB action, export/redact.
  - Contribution: Build knowledge base and train agents.

- Agent Training Status (duplicate consolidated)
  - Purpose: Monitor retrain jobs, embeddings, indexing.
  - Components: Job list, index metrics, logs, retrain trigger.
  - Contribution: Ensure knowledge freshness.

- Agent Configuration (duplicate consolidated)
  - Purpose: Behavioral controls and retention.
  - Components: Dataset toggles, persona switches, retention policies.
  - Contribution: Safety and relevance.

- Billing: Payment Methods & Checkout / Payment
  - Purpose: Manage subscription, payment methods, and checkout.
  - Components: Payment method list (masked), add method modal (tokenization), remove/confirm, checkout flow with coupon, billing contact fields, invoice history with PDF download.
  - Contribution: Monetization and account management.

- Order & Transaction History (Billing History)
  - Purpose: View subscription charges, invoices, refunds, receipts.
  - Components: Transaction list with date/amount/status, invoice preview modal & PDF download, filters/date-range, support contact link.
  - Contribution: Transparent billing and support.

- Admin Dashboard
  - Purpose: Admin-level system health and customer management.
  - Components: System health indicators, customer summary, quick links to user management/integration monitor, recent support tickets.
  - Contribution: Platform operations and support.

- User Management
  - Purpose: Manage users, roles, company assignments.
  - Components: Searchable table, user detail panel with activity logs, impersonation, disable/reactivate, bulk invite/CSV import.
  - Contribution: Enterprise admin controls.

- Integrations Monitor
  - Purpose: Monitor connector health across customers.
  - Components: Error heatmap, top error types & fixes, bulk retry/request reconnection, exportable reports.
  - Contribution: Support scale and reduce downtime.

- Audit Logs
  - Purpose: Immutable trail for sensitive actions.
  - Components: Searchable paginated audit table (action, user, timestamp, details), filters, export and retention controls.
  - Contribution: Compliance and traceability.

- 404 Not Found
  - Purpose: Friendly error for missing routes.
  - Components: Message, suggestions (Dashboard/Help/Contact), in-app search, report broken link.
  - Contribution: UX resilience.

- 500 Server Error
  - Purpose: Server error handling and reporting.
  - Components: Unique error code, retry CTA, report option, status page link.
  - Contribution: Incident transparency and support.

- Knowledge Base
  - Purpose: Searchable KB storing transcripts, SOPs, docs, and extracted insights.
  - Components: Search bar with filters, list/grid of entries, entry viewer with summary & source, tagging/editing.
  - Contribution: Training data and explanation surface for AI answers.

### 2. Features
List core features with technical details and implementation notes.

- User Authentication
  - JWT access + refresh tokens, secure password hashing (bcrypt/argon2), magic links via SendGrid, role-based access control (Owner, Admin, Manager, Technician), session listing and revocation, email verification, password reset tokens.
  - Notes: Rate-limit auth endpoints, store refresh tokens encrypted, set secure cookie or Authorization header model per client.

- Connectors / Integrations (Gmail, WhatsApp Business, Google Drive, QuickBooks, Google Calendar, Instagram/Facebook, OCR upload)
  - Connector adapter pattern, OAuth flows, token refresh, webhook listeners (where available), incremental sync with backfill, deduplication dedupe keys, encrypted token storage, per-connector retry/backoff and error classification.
  - Notes: Abstract connector interface, per-connector rate limits and batching, expose sync logs and manual retry UI.

- Data Ingestion & Indexing
  - ETL normalization to canonical schemas, chunking large documents, embeddings generation using LLM provider, vector DB indexing, ingestion logs with schema versioning, deduplication.
  - Notes: Use background workers (queues), idempotent ingest, chunk text with semantic-aware boundaries, preserve source pointers for citations.

- Live Dashboard Metrics
  - Aggregation jobs, materialized views for heavy KPIs (AR aging, cash forecast), real-time push (SSE/websocket) for urgent flags, caching with TTL, timezone-aware calculations.
  - Notes: Optimize for low-latency reads; use precomputed aggregates where possible.

- Area Improvement Plans
  - Agent orchestration to generate plan objects (current state, gaps, prioritized actions with expected outcome), store change history, action assignment and webhook/WhatsApp action workflows.
  - Notes: Constrain agent outputs with JSON schema validators; include references to underlying records and confidence scores.

- Company AI Agent (Chat)
  - RAG pipeline: retrieval from Vector DB -> prompt template -> LLM call -> formatted response with citations and confidence. Session-level context and short-term memory. Exportable chat transcripts.
  - Notes: Rate-limit LLM calls, provide fallback when retrieval confidence low, surface sources and allow user feedback to flag incorrect answers.

- AI Interviewer
  - Public interview endpoints with tokenized session IDs, WhatsApp deep-link creation, server-side transcription for voice (Google Speech or provider), language detection, tagging & sentiment analysis, store InterviewTranscript records.
  - Notes: Ensure consent flows, session expiration, and protection against spam.

- Billing & Subscriptions
  - Stripe integration for Checkout or Elements, webhook handling for invoice events and subscription lifecycle, PaymentMethod tokenization, transaction log model (PaymentTransaction), invoice PDF generation.
  - Notes: Implement dunning, store Stripe IDs mapping, secure PCI handling using tokenization only.

- Notifications & Email
  - SendGrid for transactional email, in-app notification store, user-level preferences, retry/backoff and bounce handling.
  - Notes: Template system for localized messages (English/Spanish).

- Admin Tools & Analytics
  - System health metrics, integration monitor dashboards, user management endpoints with impersonation, audit logging, bulk operations with progress reporting.
  - Notes: Strict RBAC, elevated audit logging for impersonation and destructive actions.

- Performance & Caching
  - Edge caching for public assets, server-side caching for computed KPIs, materialized views for heavy queries, background workers for embedding and training, usage metering to control LLM costs.
  - Notes: Monitor queue depths and alert on backpressure.

- AI Agents (Finance, Ops, Leads, Knowledge, HR, Marketing)
  - Scheduler to run periodic analyses and event-triggered checks, agent prompts and constrained JSON output, store results as ImprovementPlan entries with references and action items.
  - Notes: Modular prompt templates per vertical; include confidence and source pointers.

### 3. User Journeys
Step-by-step user flows for user types.

- Owner / Operator (Primary)
  1. Visit Landing Page → Start Free Trial.
  2. Signup (email + magic link or password) → Email Verification.
  3. Onboarding wizard: connect 1–3 integrations (WhatsApp, QuickBooks, Gmail) via Integration Connect Flow.
  4. Initial sync runs; owner sees Live Company Dashboard with top KPIs and urgent flags.
  5. Review Area Improvement Plans; accept/assign actions to staff via WhatsApp link or in-app assignment.
  6. Send AI Interviewer weekly check-ins to techs; review transcripts in KB.
  7. Ask Company AI Agent queries (e.g., "Which clients are overdue this month?") and act on cited records.
  8. Manage billing: view Order & Transaction History, add payment method, upgrade plan.
  9. Use Settings to adjust language/timezone and invite new users via WhatsApp/email.

- Team Lead / Technician (Secondary)
  1. Receive WhatsApp job assignment or Interview link.
  2. Click deep link → view job card or public interview session (no install).
  3. Update job status via WhatsApp quick replies or use web chat to submit debrief.
  4. Occasional access to Jobs Board or Interview transcripts (based on role) to review assigned tasks.
  5. Respond to weekly check-ins; responses saved to KB and used to generate SOPs.

- Admin / Coordinator (Tertiary)
  1. Login → open Integrations Overview to monitor connectors.
  2. Use Leads Pipeline to assign follow-ups and update stages.
  3. Use User Management to invite/disable users and impersonate (with audit log).
  4. Access Integrations Monitor and Integration Detail & Logs to troubleshoot and request reconnections.
  5. View Admin Dashboard for customer summaries and support tickets.

- Admin (Platform-level)
  1. Access Admin Dashboard → view system health, ingestion queue, AI worker health, sync errors.
  2. Use Integrations Monitor to bulk-retry or generate reconnection tasks.
  3. Inspect Audit Logs for sensitive actions; export for compliance.
  4. Manage user accounts and escalate support tickets.

## UI Guide
(Use design system consistently across all pages and components.)

- Apply grid, spacing, color palette, typography, and components as specified in Visual Style section.
- Responsive-first: mobile-first designs, WhatsApp-first interactions, accessible contrast, focus rings, and keyboard navigation.
- Component guidelines: card, navigation, data visualization, interactive elements, and micro-interactions as specified.

## Visual Style

### Color Palette:
- Primary Teal: #0D9488
- Teal Light: #2DD4BF
- Teal Dark: #134E4A
- Ink: #0F172A
- Slate: #334155
- Off-White: #F8FAFC
- Border / Divider: #E2E8F0
- Tint surface: #ECFBF9 (approx)

Usage: follow approved combos and pairing notes.

### Typography & Layout:
- Headlines: Syne (700–800), tight tracking (~-1.5px)
- Body/UI: Inter/Work Sans/System UI (400/600/700), body ~16px, microcopy 12–13px
- Grid: 12-column responsive, gutters ~24px, max width 1140–1280px
- Spacing: 8px base scale; cards padding 24–28px

### Key Design Elements
- Card: Off-White background, 1px border (#E2E8F0), radius 12px, soft shadow (0 12px 32px rgba(13,20,30,0.06))
- Navigation: Top nav minimal; left app sidebar dark/Ink with Teal active accent
- Data Viz: Teal primary series, Teal Light accent, Slate for comparative; rounded bars and points; minimal axes
- Buttons/Forms/Micro-interactions: Primary teal filled, secondary outline, inputs Off-White with 1px border, focus ring faint teal, transitions ~150–200ms

### Design Philosophy
- Modern, bold, approachable, clarity-first, trustworthy, phone-first, human-centered UX, and visual strategy using teal accent.

Implementation Notes:
- Enforce consistent spacing, color, type, and component behavior across all screens.
- Accessibility: contrast ratios, keyboard focus, aria labels on interactive elements, and clear error states.

## Instructions to AI Development Tool
1. Refer to Project Concept, Problem Statement, and Solution to understand each feature's purpose.
2. Ensure every page and feature directly maps to solving the identified problems.
3. Build and verify features per the Requirements and UI Guide before marking complete.
4. Strictly adhere to the Visual Style: color palette, typography, spacing, and components.
5. Maintain company data isolation, security best practices (encrypted tokens, least privilege, read-only connectors), and robust audit logging.

Appendix: Core Data Models (canonical fields)
- User: id, email, displayName, role, phone, language
- Company: id, name, vertical, timezone, currency
- ChatSession: id, companyId, userId, messages
- PaymentTransaction: id, companyId, stripeId, amount, status
- IntegrationConnection: id, companyId, type, status, lastSync, metadata
- Job: id, companyId, customerName, status, scheduledAt, assignedTo, linkedThreadId
- Invoice: id, companyId, externalId, amount, dueDate, status
- Lead: id, companyId, source, contact, stage
- MessageThread: id, companyId, source, participants, lastMessageAt
- Document: id, companyId, source, extractedText, meta
- InterviewTranscript: id, companyId, templateType, transcriptText, tags
- ImprovementPlan: id, companyId, domain, actions, generatedAt

APIs & Integrations (MVP):
- Instagram/Facebook Graph API, Gmail API, Google Drive API, Google Calendar API, QuickBooks Online API, WhatsApp Business API (provider-dependent), OCR (Google Vision / AWS Textract), Stripe, SendGrid, LLM Provider (OpenAI or equivalent), Vector DB (Pinecone/Milvus/Weaviate).

End of blueprint.

## Implementation Notes

When implementing this project:

1. **Follow Universal Guidelines**: Use the design best practices documented above as your foundation
2. **Apply Project Customizations**: Implement the specific design requirements stated in the "User Design Requirements" section
3. **Priority Order**: Project-specific requirements override universal guidelines when there's a conflict
4. **Color System**: Extract and implement color values as CSS custom properties in RGB format
5. **Typography**: Define font families, sizes, and weights based on specifications
6. **Spacing**: Establish consistent spacing scale following the design system
7. **Components**: Style all Shadcn components to match the design aesthetic
8. **Animations**: Use Motion library for transitions matching the design personality
9. **Responsive Design**: Ensure mobile-first responsive implementation

## Implementation Checklist

- [ ] Review universal design guidelines above
- [ ] Extract project-specific color palette and define CSS variables
- [ ] Configure Tailwind theme with custom colors
- [ ] Set up typography system (fonts, sizes, weights)
- [ ] Define spacing and sizing scales
- [ ] Create component variants matching design
- [ ] Implement responsive breakpoints
- [ ] Add animations and transitions
- [ ] Ensure accessibility standards
- [ ] Validate against user design requirements

---

**Remember: Always reference this file for design decisions. Do not use generic or placeholder designs.**
