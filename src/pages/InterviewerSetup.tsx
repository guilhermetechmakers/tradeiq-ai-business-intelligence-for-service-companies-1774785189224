import { Link } from 'react-router-dom'

import { PageHeader } from '@/components/layout/page-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'

export default function InterviewerSetup() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="AI interviewer setup"
        description="Five templates, cadence, recipients, language, and preview before send."
        actions={
          <Button asChild>
            <Link to="/app/interviewer/send">Send interview link</Link>
          </Button>
        }
      />
      <Card>
        <CardContent className="grid gap-6 p-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Template</Label>
            <Select defaultValue="safety">
              <SelectTrigger>
                <SelectValue placeholder="Pick template" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="safety">Weekly safety check-in</SelectItem>
                <SelectItem value="debrief">Job debrief</SelectItem>
                <SelectItem value="sop">SOP capture</SelectItem>
                <SelectItem value="tooling">Tooling & truck stock</SelectItem>
                <SelectItem value="customer">Customer win/loss</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div>
              <Label>Spanish prompts</Label>
              <p className="text-xs text-muted-foreground">Staff-facing copy</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
