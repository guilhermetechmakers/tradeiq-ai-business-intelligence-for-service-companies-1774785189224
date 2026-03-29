import { PageHeader } from '@/components/layout/page-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

export default function SendInterview() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Send interview link"
        description="WhatsApp, SMS, or public web link with delivery status and resend."
      />
      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="space-y-2">
            <Label htmlFor="recipients">Recipients</Label>
            <Input id="recipients" placeholder="+1… comma separated" />
          </div>
          <div className="space-y-2">
            <Label>Channel</Label>
            <Select defaultValue="wa">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wa">WhatsApp</SelectItem>
                <SelectItem value="sms">SMS</SelectItem>
                <SelectItem value="web">Web link</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="button" onClick={() => toast.success('Queued (demo)')}>
            Send invites
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
