import { PageHeader } from '@/components/layout/page-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export interface BlueprintSection {
  heading: string
  bullets: string[]
}

interface BlueprintPageProps {
  title: string
  description: string
  sections: BlueprintSection[]
}

export function BlueprintPage({ title, description, sections }: BlueprintPageProps) {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader title={title} description={description} />
      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((s) => (
          <Card key={s.heading} className="shadow-card">
            <CardHeader>
              <CardTitle className="font-display text-lg">{s.heading}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
