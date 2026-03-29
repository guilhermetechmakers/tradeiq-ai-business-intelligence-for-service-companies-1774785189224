import { CheckCircle2, Mic } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

export default function InterviewSession() {
  const { sessionToken } = useParams()
  const [step, setStep] = useState(0)
  const [answer, setAnswer] = useState('')

  return (
    <div className="min-h-screen bg-accent/40 px-4 py-10">
      <div className="mx-auto max-w-lg animate-fade-in-up">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="font-display text-xl">TradeIQ interview</CardTitle>
            <p className="text-sm text-muted-foreground">
              Session token: {sessionToken ?? '—'} · No login required
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              {step === 0
                ? 'What changed on the last job site that the next crew should know?'
                : 'Anything unsafe or blocked that we should escalate?'}
            </p>
            <Textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer…"
              rows={4}
            />
            <div className="flex flex-wrap gap-2">
              <Button type="button" variant="outline" size="sm">
                <Mic className="h-4 w-4" />
                Voice (Edge STT)
              </Button>
              <Button
                type="button"
                onClick={() => {
                  if (step === 0) {
                    setStep(1)
                    setAnswer('')
                    toast.success('Saved progress (demo)')
                  } else {
                    toast.success('Submitted — thank you!')
                  }
                }}
              >
                {step === 0 ? 'Next' : (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Submit
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
