import { PageHeader } from '@/components/layout/page-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export default function Settings() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Settings & preferences"
        description="Notifications, sessions, API key requests, integration quick status."
      />
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {['Urgent finance flags', 'Missed lead SLAs', 'Weekly AI plan'].map((n) => (
            <div key={n} className="flex items-center justify-between rounded-lg border border-border p-4">
              <Label htmlFor={n}>{n}</Label>
              <Switch id={n} defaultChecked />
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Sessions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>Chrome on Windows · Phoenix, AZ · Active now</p>
          <p>Safari on iPhone · Last seen 2d ago</p>
          <Button variant="outline" size="sm">
            Revoke other sessions
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">API access</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Request scoped API keys for internal tooling — approved by owner.
          </p>
          <Button variant="secondary">Request API key</Button>
        </CardContent>
      </Card>
    </div>
  )
}
