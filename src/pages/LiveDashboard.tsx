import { AlertTriangle, ArrowUpRight, Briefcase, DollarSign, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

import { CashForecastMini } from '@/components/charts/cash-forecast-mini'
import { PageHeader } from '@/components/layout/page-header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const kpis = [
  { label: 'Open AR', value: '$48.2k', delta: '+6%', icon: DollarSign },
  { label: 'Jobs this week', value: '37', delta: '−3', icon: Briefcase },
  { label: 'New leads', value: '14', delta: '+4', icon: Users },
]

const flags = [
  {
    title: '3 invoices overdue > 30 days',
    severity: 'high' as const,
    href: '/app/finance',
  },
  {
    title: '2 Instagram DMs unanswered 24h+',
    severity: 'medium' as const,
    href: '/app/leads',
  },
]

const areas = [
  { name: 'Finance', summary: 'Cash forecast stable; tighten collections on commercial jobs.', href: '/app/plans' },
  { name: 'Operations', summary: '3 jobs missing debrief; prompt techs via WhatsApp template.', href: '/app/jobs' },
  { name: 'Leads', summary: 'Pipeline conversion up; follow up 5 stalled estimates.', href: '/app/leads' },
  { name: 'Knowledge', summary: '2 new interview transcripts ready to promote to KB.', href: '/app/knowledge' },
]

const activity = [
  'QuickBooks sync completed — 12 invoices ingested',
  'WhatsApp thread #442 tagged as “warranty follow-up”',
  'AI plan “HVAC spring demand” generated',
]

export default function LiveDashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Live company dashboard"
        description="Read-only data from your tools, refreshed on a schedule. Urgent flags route to Notifications."
        actions={
          <Button asChild variant="outline" size="sm">
            <Link to="/app/notifications">
              Open alerts
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        }
      />

      <section className="grid gap-4 sm:grid-cols-3">
        {kpis.map(({ label, value, delta, icon: Icon }, i) => (
          <Card
            key={label}
            className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md animate-fade-in-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {label}
              </CardTitle>
              <Icon className="h-4 w-4 text-primary" aria-hidden />
            </CardHeader>
            <CardContent>
              <p className="font-display text-2xl font-bold">{value}</p>
              <p className="text-xs text-muted-foreground">{delta} vs last period</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 shadow-card">
          <CardHeader>
            <CardTitle className="font-display">Cash outlook</CardTitle>
          </CardHeader>
          <CardContent>
            <CashForecastMini />
          </CardContent>
        </Card>
        <Card className="border-destructive/20 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-lg">
              <AlertTriangle className="h-5 w-5 text-destructive" aria-hidden />
              Urgent flags
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {flags.map((f) => (
              <Link
                key={f.title}
                to={f.href}
                className="block rounded-lg border border-border bg-card p-3 text-sm transition-colors hover:bg-accent"
              >
                <div className="flex items-center justify-between gap-2">
                  <span>{f.title}</span>
                  <Badge variant={f.severity === 'high' ? 'destructive' : 'secondary'}>
                    {f.severity}
                  </Badge>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-display">Area tiles</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {areas.map((a) => (
              <Link
                key={a.name}
                to={a.href}
                className="rounded-xl border border-border bg-accent/30 p-4 transition-all hover:shadow-card"
              >
                <p className="font-display font-bold text-primary">{a.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{a.summary}</p>
              </Link>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-display">Recent activity</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/app/notifications">All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[220px] pr-4">
              <ul className="space-y-3 text-sm">
                {activity.map((line) => (
                  <li key={line} className="flex gap-2">
                    <Separator orientation="vertical" className="h-auto w-1 rounded-full bg-primary/40" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button size="sm" asChild>
                <Link to="/app/agent">Ask company AI</Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link to="/app/integrations/connect">Connect source</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
