import { RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const ERROR_CODE = 'ERR-TQ-500-8F3C'

export default function ServerError() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-accent/30 px-4">
      <Card className="w-full max-w-lg animate-fade-in-up shadow-card">
        <CardContent className="space-y-6 p-8 text-center">
          <p className="font-display text-6xl font-extrabold text-destructive">500</p>
          <h1 className="font-display text-2xl font-bold">Something went wrong</h1>
          <p className="text-sm text-muted-foreground">
            Reference code{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              {ERROR_CODE}
            </code>{' '}
            — include it when contacting support or checking the status page.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button type="button" onClick={() => window.location.reload()}>
              <RefreshCw className="h-4 w-4" />
              Retry
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <a href="https://status.tradeiq.example">Status page</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
