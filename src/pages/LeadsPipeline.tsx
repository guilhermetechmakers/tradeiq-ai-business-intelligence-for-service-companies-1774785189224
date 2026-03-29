import { PageHeader } from '@/components/layout/page-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const columns = [
  {
    title: 'New',
    leads: [
      { name: 'IG: @desert_homes', contact: 'DM 2h ago', missed: true },
      { name: 'Gmail: quote@acme.com', contact: 'Email', missed: false },
    ],
  },
  {
    title: 'Qualified',
    leads: [{ name: 'WhatsApp: +1…442', contact: 'Thread', missed: false }],
  },
  {
    title: 'Won',
    leads: [{ name: 'QB: Estimate #889', contact: 'Synced', missed: false }],
  },
]

export default function LeadsPipeline() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Leads pipeline"
        description="Kanban across sources with missed-contact indicators and bulk import/export."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {columns.map((col) => (
          <div key={col.title} className="space-y-3">
            <h2 className="font-display text-sm font-bold text-muted-foreground">
              {col.title}
            </h2>
            {col.leads.map((l) => (
              <Card
                key={l.name}
                className="shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <CardContent className="space-y-2 p-4">
                  <p className="font-medium">{l.name}</p>
                  <p className="text-xs text-muted-foreground">{l.contact}</p>
                  {l.missed ? (
                    <Badge variant="destructive">Missed SLA</Badge>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
