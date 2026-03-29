import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { CashForecastMini } from '@/components/charts/cash-forecast-mini'
import { PageHeader } from '@/components/layout/page-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const overdue = [
  { customer: 'Summit Mechanical', amount: '$4,200', due: '32d', status: 'Open' },
  { customer: 'Lopez Property Mgmt', amount: '$1,890', due: '18d', status: 'Reminded' },
]

const margin = [
  { job: 'Commercial', margin: 22 },
  { job: 'Residential', margin: 31 },
  { job: 'Service', margin: 18 },
]

export default function FinanceOverview() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Finance overview"
        description="QuickBooks sync, cash forecast, overdue invoices, AR aging, and job margin distribution."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-display">Cash forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <CashForecastMini />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-display">Job margin distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={margin}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="job" tickLine={false} fontSize={12} />
                <YAxis tickLine={false} fontSize={12} unit="%" />
                <Tooltip />
                <Bar dataKey="margin" fill="rgb(45, 212, 191)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="font-display">Overdue invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Days overdue</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {overdue.map((row) => (
                <TableRow key={row.customer}>
                  <TableCell className="font-medium">{row.customer}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.due}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{row.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
