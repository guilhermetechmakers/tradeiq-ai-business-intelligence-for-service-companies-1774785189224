import { PageHeader } from '@/components/layout/page-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

const faq = [
  {
    q: 'Is TradeIQ read-only?',
    a: 'Yes. Connectors use least-privilege OAuth and never post on your behalf without an explicit future workflow you enable.',
  },
  {
    q: 'Where do AI answers come from?',
    a: 'Retrieval runs over your normalized jobs, invoices, messages, and KB entries. Citations point back to those records.',
  },
]

export default function Help() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="About & help"
        description="FAQ, getting started checklist, SOP templates, and support form."
      />
      <Card>
        <CardContent className="p-6">
          <h2 className="font-display mb-4 text-lg font-bold">Getting started</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Verify email and invite your admin.</li>
            <li>Connect QuickBooks + one messaging source.</li>
            <li>Review the live dashboard and first improvement plan.</li>
            <li>Send an AI interviewer link to a lead tech.</li>
          </ol>
        </CardContent>
      </Card>
      <div>
        <h2 className="font-display mb-4 text-lg font-bold">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="font-display text-lg font-bold">Contact support</h2>
          <div className="space-y-2">
            <Label htmlFor="subj">Subject</Label>
            <Input id="subj" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="msg">Message</Label>
            <Textarea id="msg" rows={4} />
          </div>
          <Button type="button" onClick={() => toast.success('Ticket created (demo)')}>
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
