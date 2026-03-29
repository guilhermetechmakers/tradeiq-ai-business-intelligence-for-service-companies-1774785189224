import { PageHeader } from '@/components/layout/page-header'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const logs = [
  {
    ts: '2026-03-29 14:02',
    action: 'user.impersonation_start',
    user: 'admin@tradeiq.dev',
    detail: 'Target: jordan@demo.co',
  },
  {
    ts: '2026-03-29 13:40',
    action: 'integration.token_rotated',
    user: 'system',
    detail: 'QuickBooks · company_12',
  },
]

export default function AuditLogs() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Audit logs"
        description="Immutable trail for sensitive actions — filter, paginate, export with retention controls."
        actions={<Button variant="outline" size="sm">Export CSV</Button>}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Timestamp</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Actor</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((l) => (
            <TableRow key={l.ts + l.action}>
              <TableCell className="whitespace-nowrap text-muted-foreground">
                {l.ts}
              </TableCell>
              <TableCell className="font-mono text-xs">{l.action}</TableCell>
              <TableCell>{l.user}</TableCell>
              <TableCell>{l.detail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
