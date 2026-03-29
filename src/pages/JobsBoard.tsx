import { PageHeader } from '@/components/layout/page-header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const jobs = [
  {
    id: 'J-1042',
    customer: 'Northside Roofing',
    status: 'scheduled',
    when: 'Tomorrow 9:00',
    assignee: 'Alex M.',
  },
  {
    id: 'J-1043',
    customer: 'Desert Cool HVAC',
    status: 'in_progress',
    when: 'Today',
    assignee: 'Jamie L.',
  },
]

export default function JobsBoard() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Jobs board"
        description="Filters, detail drawer, inline status, debrief trigger to AI Interviewer."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {jobs.map((j) => (
          <Card key={j.id} className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-display text-base">{j.customer}</CardTitle>
              <Badge>{j.status.replace('_', ' ')}</Badge>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                {j.id} · {j.when}
              </p>
              <p>Assigned: {j.assignee}</p>
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="sm" variant="outline">
                    Open detail
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Job {j.id}</SheetTitle>
                  </SheetHeader>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Linked WhatsApp thread, calendar holds, and invoice status would appear
                    here with quick actions.
                  </p>
                  <Button className="mt-6 w-full">Trigger debrief</Button>
                </SheetContent>
              </Sheet>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
