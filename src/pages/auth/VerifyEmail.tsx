import { CheckCircle2, Loader2, XCircle } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function VerifyEmail() {
  const [params] = useSearchParams()
  const status = params.get('status') ?? 'pending'

  return (
    <div className="flex min-h-screen items-center justify-center bg-accent/30 px-4">
      <Card className="w-full max-w-md animate-fade-in-up shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Email verification</CardTitle>
          <CardDescription>
            Confirm your address to unlock integrations and the live dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center gap-3 text-center">
            {status === 'ok' ? (
              <CheckCircle2 className="h-14 w-14 text-primary" aria-hidden />
            ) : status === 'fail' ? (
              <XCircle className="h-14 w-14 text-destructive" aria-hidden />
            ) : (
              <Loader2 className="h-14 w-14 animate-spin text-primary" aria-hidden />
            )}
            <p className="text-sm text-muted-foreground">
              {status === 'ok'
                ? 'Your email is verified. Continue to connect tools.'
                : status === 'fail'
                  ? 'This link is invalid or expired.'
                  : 'Waiting for token from email link…'}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild>
              <Link to="/app/integrations/connect">Go to integrations</Link>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => toast.success('Verification email resent (demo).')}
            >
              Resend link
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
