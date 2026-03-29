import { PageHeader } from '@/components/layout/page-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'

export default function InterviewResponses() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Interview responses & transcripts"
        description="Viewer, sentiment/tags, promote to KB, export/redact."
      />
      <Card>
        <CardContent className="space-y-4 p-6">
          <pre className="max-h-64 overflow-auto rounded-lg bg-muted p-4 text-xs">
            {`Technician: Customer asked for warranty on flashing — we documented photos in Drive folder /Jobs/1042.\nAI tags: warranty, documentation, positive sentiment.`}
          </pre>
          <div className="flex flex-wrap gap-2">
            <Button type="button" onClick={() => toast.success('Promoted to KB (demo)')}>
              Promote to knowledge base
            </Button>
            <Button type="button" variant="outline">
              Export PDF
            </Button>
            <Button type="button" variant="destructive">
              Redact PII
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
