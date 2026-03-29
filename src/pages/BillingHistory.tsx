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

const rows = [
  { date: '2026-03-01', amount: '$149.00', status: 'Paid', id: 'inv_001' },
  { date: '2026-02-01', amount: '$149.00', status: 'Paid', id: 'inv_002' },
]

export default function BillingHistory() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Order & transaction history"
        description="Filter by date, preview invoices, download PDF, contact support."
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Invoice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.date}</TableCell>
              <TableCell>{r.amount}</TableCell>
              <TableCell>{r.status}</TableCell>
              <TableCell className="text-right">
                <Button variant="link" size="sm">
                  PDF
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
