import { PageHeader } from '@/components/layout/page-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const items = [
  {
    id: '1',
    title: 'Invoice #889 overdue',
    body: 'QuickBooks · tap to open finance view',
    unread: true,
  },
  {
    id: '2',
    title: 'New lead from Instagram',
    body: 'Assigned to pipeline “New”',
    unread: true,
  },
  {
    id: '3',
    title: 'Weekly AI plan ready',
    body: 'Operations domain',
    unread: false,
  },
]

export default function NotificationsCenter() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Notifications"
        description="Unread vs archived, filters, deep links into jobs, finance, and interviews."
      />
      <Tabs defaultValue="unread">
        <TabsList>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="archive">Archived</TabsTrigger>
        </TabsList>
        <TabsContent value="unread" className="space-y-3">
          {items
            .filter((i) => i.unread)
            .map((i) => (
              <Card key={i.id}>
                <CardContent className="flex items-start justify-between gap-4 p-4">
                  <div>
                    <p className="font-medium">{i.title}</p>
                    <p className="text-sm text-muted-foreground">{i.body}</p>
                  </div>
                  <Badge>New</Badge>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
        <TabsContent value="archive" className="space-y-3">
          {items
            .filter((i) => !i.unread)
            .map((i) => (
              <Card key={i.id}>
                <CardContent className="p-4">
                  <p className="font-medium">{i.title}</p>
                  <p className="text-sm text-muted-foreground">{i.body}</p>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
