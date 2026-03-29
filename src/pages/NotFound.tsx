import { Home, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-accent/30 px-4">
      <Card className="w-full max-w-lg animate-fade-in-up shadow-card">
        <CardContent className="space-y-6 p-8 text-center">
          <p className="font-display text-6xl font-extrabold text-primary">404</p>
          <h1 className="font-display text-2xl font-bold">Page not found</h1>
          <p className="text-sm text-muted-foreground">
            Try the dashboard, help center, or search below. Report broken links from your
            team settings.
          </p>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search TradeIQ…" disabled />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Button asChild>
              <Link to="/app">
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/app/help">Help</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
