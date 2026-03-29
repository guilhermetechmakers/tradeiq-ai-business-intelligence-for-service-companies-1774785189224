import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export default function AppNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in">
      <h1 className="font-display text-2xl font-bold text-ink">Page not found</h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        This section is not available or the link is outdated.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Button asChild>
          <Link to="/app">Dashboard</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/app/help">Help</Link>
        </Button>
      </div>
    </div>
  )
}
