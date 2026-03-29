import { Activity, Server } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Admin dashboard"
        description="System health, ingestion queues, AI workers, customer summaries, support tickets."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Server className="h-5 w-5 text-primary" />
            <CardTitle className="font-display text-base">API</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">99.95% · p99 240ms</CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <CardTitle className="font-display text-base">Workers</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">Embed queue depth: 12</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-base">Quick links</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm">
            <Link to="/app/admin/users" className="text-primary hover:underline">
              User management
            </Link>
            <Link to="/app/admin/integrations" className="text-primary hover:underline">
              Integrations monitor
            </Link>
            <Link to="/app/admin/audit" className="text-primary hover:underline">
              Audit logs
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
