import { PageHeader } from '@/components/layout/page-header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const users = [
  { name: 'Jordan Lee', email: 'jordan@demo.co', role: 'Owner', status: 'Active' },
  { name: 'Sam Rivera', email: 'sam@demo.co', role: 'Manager', status: 'Active' },
]

export default function UserManagement() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="User management"
        description="Search, roles, company assignment, impersonation (audited), bulk invite / CSV."
        actions={
          <div className="flex gap-2">
            <Input placeholder="Search users…" className="w-48" />
            <Button size="sm">Invite</Button>
          </div>
        }
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((u) => (
            <TableRow key={u.email}>
              <TableCell className="font-medium">{u.name}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.role}</TableCell>
              <TableCell>
                <Badge variant="success">{u.status}</Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">
                  Impersonate
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
