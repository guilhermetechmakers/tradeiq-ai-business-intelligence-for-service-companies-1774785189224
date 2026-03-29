import { Search } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const entries = [
  { title: 'Flashing warranty SOP', source: 'Interview + Drive', tags: 'warranty, roofing' },
  { title: 'HVAC spring tune checklist', source: 'SOP upload', tags: 'hvac, seasonal' },
]

export default function KnowledgeBase() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Knowledge base"
        description="Search transcripts, SOPs, OCR docs, and extracted insights with filters."
        actions={
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search KB…" aria-label="Search knowledge base" />
          </div>
        }
      />
      <div className="grid gap-4 md:grid-cols-2">
        {entries.map((e) => (
          <Card key={e.title} className="transition-all hover:shadow-card">
            <CardHeader>
              <CardTitle className="font-display text-lg">{e.title}</CardTitle>
              <p className="text-xs text-muted-foreground">{e.source}</p>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{e.tags}</p>
              <Button size="sm" variant="outline">
                Open
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
