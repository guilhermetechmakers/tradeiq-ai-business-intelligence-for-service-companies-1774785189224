import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const industries = [
  'Roofing',
  'HVAC',
  'Electrical',
  'Landscaping',
  'Cleaning',
  'Auto repair',
]

const features = [
  {
    title: 'Live company dashboard',
    body: 'KPIs, urgent flags, and activity across finance, ops, leads, and marketing — without changing how your team works.',
    icon: BarChart3,
  },
  {
    title: 'Company-trained AI agent',
    body: 'Ask questions in English or Spanish with citations back to WhatsApp threads, invoices, and documents.',
    icon: Bot,
  },
  {
    title: 'WhatsApp-first capture',
    body: 'Read-only connectors plus AI Interviewer deep links meet crews where they already are.',
    icon: MessageCircle,
  },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="font-display text-xl font-bold tracking-tight text-ink">
            TradeIQ
          </Link>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link to="/app/help">Help</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Start free trial</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border bg-accent/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(45_212_191/0.2),transparent_50%)]" />
        <div className="relative mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              AI intelligence for service trades
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
              One pane of glass for jobs, cash, leads, and tribal knowledge.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              TradeIQ connects Gmail, WhatsApp Business, QuickBooks, Drive, Calendar,
              and social in read-only mode — then coaches your team with grounded AI
              plans and interviews.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="min-h-11 min-w-[200px]" asChild>
                <Link to="/signup">
                  Start free trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="min-h-11" asChild>
                <Link to="/app">View demo dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-2xl font-bold md:text-3xl">
          Built for how trades actually run
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map(({ title, body, icon: Icon }, i) => (
            <Card
              key={title}
              className={cn(
                'border-border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg',
                'animate-fade-in-up',
              )}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <CardContent className="p-6 pt-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-2xl font-bold md:text-3xl">
            Industries we support
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {industries.map((name) => (
              <span
                key={name}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm transition-transform hover:scale-[1.02]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Simple pricing teaser
            </h2>
            <p className="mt-3 text-muted-foreground">
              Per-company plans with transparent usage for AI interviews and agent
              queries. Full checkout and invoices live in-app.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                'Read-only connectors & OCR uploads',
                'Rolling improvement plans by domain',
                'Private RAG + citation-backed answers',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="mt-8" asChild>
              <Link to="/signup">See plans</Link>
            </Button>
          </div>
          <Card className="animate-slide-in-right shadow-card">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold text-primary">Loved by operators</p>
              <blockquote className="font-display text-xl font-bold leading-snug text-ink">
                “We finally see overdue invoices and Instagram DMs in one place.
                The AI plans feel like a coach, not another dashboard.”
              </blockquote>
              <p className="text-sm text-muted-foreground">
                — Owner, 12-person HVAC company (pilot)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border bg-ink text-sidebar-foreground">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="font-display text-lg font-bold">TradeIQ</p>
          <div className="flex flex-wrap gap-4 text-sm text-sidebar-foreground/80">
            <Link to="/app/help" className="hover:text-sidebar-foreground">
              Help
            </Link>
            <Link to="/login" className="hover:text-sidebar-foreground">
              Log in
            </Link>
            <Link to="/signup" className="hover:text-sidebar-foreground">
              Sign up
            </Link>
          </div>
          <p className="text-xs text-sidebar-foreground/60">
            © {new Date().getFullYear()} TradeIQ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
