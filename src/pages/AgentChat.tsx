import { Languages, Mic, Send } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

import { edgeApi } from '@/api/edge'
import { PageHeader } from '@/components/layout/page-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'
const demoMessages = [
  {
    role: 'assistant' as const,
    text: 'Three customers are overdue this month: Summit Mechanical ($4,200), Lopez Property ($1,890), and Brightline Solar ($950). Sources: QuickBooks invoices synced 12 min ago.',
    citations: ['QB INV-1044', 'QB INV-1051'],
  },
]

export default function AgentChat() {
  const [input, setInput] = useState('')
  const [lang, setLang] = useState<'en' | 'es'>('en')

  async function send() {
    if (!input.trim()) return
    try {
      await edgeApi.invoke<{ messages: { role: string; content: string }[] }, unknown>(
        'llm-proxy',
        {
          messages: [{ role: 'user', content: input }],
        },
      )
      toast.success('Response received (requires deployed Edge Function + key).')
    } catch {
      toast.message('Demo mode', {
        description:
          'Deploy `llm-proxy` and set OPENAI_API_KEY in Supabase secrets to enable live answers.',
      })
    }
    setInput('')
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      <PageHeader
        title="Company AI agent"
        description="RAG-backed chat with citations, language toggle, and quick actions. LLM calls go through Edge Functions only."
        actions={
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setLang((l) => (l === 'en' ? 'es' : 'en'))}
          >
            <Languages className="h-4 w-4" />
            {lang === 'en' ? 'English' : 'Español'}
          </Button>
        }
      />
      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <Card className="flex min-h-[480px] flex-col shadow-card">
          <CardContent className="flex flex-1 flex-col gap-4 p-4">
            <ScrollArea className="flex-1 rounded-lg border border-border bg-muted/30 p-4">
              <div className="space-y-4">
                {demoMessages.map((m, idx) => (
                  <div key={idx} className="rounded-lg bg-card p-3 text-sm shadow-sm">
                    <p>{m.text}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {m.citations.map((c) => (
                        <span
                          key={c}
                          className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="flex gap-2">
              <Textarea
                placeholder={
                  lang === 'en'
                    ? 'Ask about AR, jobs, or leads…'
                    : 'Pregunta sobre facturas, trabajos o clientes…'
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-[44px] resize-none"
                rows={2}
              />
              <div className="flex flex-col gap-2">
                <Button type="button" size="icon" variant="outline" aria-label="Voice">
                  <Mic className="h-4 w-4" />
                </Button>
                <Button type="button" size="icon" onClick={() => void send()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-3 p-4 text-sm">
            <p className="font-display font-bold">Model & training</p>
            <p className="text-muted-foreground">
              Retrieval from vector index + session memory. Rate limits and low-confidence
              fallbacks enforced server-side.
            </p>
            <Button variant="secondary" className="w-full" asChild>
              <Link to="/app/agent/config">Configure datasets</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
