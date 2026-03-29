import { Camera, Link2, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PageHeader } from '@/components/layout/page-header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const connectors = [
  { name: 'Gmail', status: 'connected', last: '2 min ago' },
  { name: 'WhatsApp Business', status: 'syncing', last: '—' },
  { name: 'QuickBooks', status: 'connected', last: '15 min ago' },
  { name: 'Google Drive', status: 'error', last: '1h ago' },
  { name: 'Google Calendar', status: 'connected', last: '5 min ago' },
  { name: 'Instagram / Facebook', status: 'paused', last: '—' },
]

export default function IntegrationsOverview() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Integrations"
        description="Read-only connectors with encrypted tokens, sync logs, and manual retry."
        actions={
          <div className="flex flex-wrap gap-2">
            <Button asChild>
              <Link to="/app/integrations/connect">Connect</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/app/integrations/ocr">
                <Camera className="h-4 w-4" />
                OCR upload
              </Link>
            </Button>
          </div>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {connectors.map((c) => (
          <Card
            key={c.name}
            className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
          >
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div className="flex items-center gap-2">
                <Link2 className="h-4 w-4 text-primary" aria-hidden />
                <CardTitle className="font-display text-base">{c.name}</CardTitle>
              </div>
              <Badge
                variant={
                  c.status === 'connected'
                    ? 'success'
                    : c.status === 'error'
                      ? 'destructive'
                      : 'secondary'
                }
              >
                {c.status}
              </Badge>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Last sync: {c.last}</span>
              <Button variant="ghost" size="icon" aria-label={`Sync ${c.name}`}>
                <RefreshCw className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-lg">Security</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
              <li>Tokens encrypted at rest; least-privilege OAuth scopes.</li>
              <li>Webhook listeners where supported; backoff on rate limits.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-lg">Support</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
              <li>Use integration detail for scopes, logs, and sample payloads.</li>
              <li>Platform admins bulk-retry from Integrations monitor.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
