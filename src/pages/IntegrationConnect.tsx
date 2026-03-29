import { CheckCircle2 } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'

const checklist = [
  'Read-only Gmail labels selected',
  'QuickBooks company realm authorized',
  'Webhook secret rotated (last 90 days)',
]

export default function IntegrationConnect() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Connect a source"
        description="OAuth modal, permissions checklist, and live sync progress."
      />
      <Card>
        <CardContent className="space-y-6 p-6">
          <div>
            <p className="text-sm font-medium">Initial ingest</p>
            <Progress value={66} className="mt-2" />
            <p className="mt-1 text-xs text-muted-foreground">Backfill 66% complete</p>
          </div>
          <ul className="space-y-2 text-sm">
            {checklist.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {c}
              </li>
            ))}
          </ul>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open OAuth modal (demo)</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Authorize TradeIQ</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">
                Provider consent screen would render here. Tokens never touch the browser
                in production — Edge Functions exchange codes server-side.
              </p>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  )
}
