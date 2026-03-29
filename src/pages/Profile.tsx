import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { PageHeader } from '@/components/layout/page-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const schema = z.object({
  displayName: z.string().min(1),
  company: z.string().min(1),
  timezone: z.string(),
  language: z.string(),
  currency: z.string(),
  vertical: z.string(),
})

type Form = z.infer<typeof schema>

export default function Profile() {
  const form = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: {
      displayName: 'Jordan Lee',
      company: 'Desert Cool HVAC',
      timezone: 'America/Phoenix',
      language: 'en',
      currency: 'USD',
      vertical: 'hvac',
    },
  })

  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="User profile"
        description="Personal metadata, company locale, data export/delete requests."
      />
      <Card>
        <CardContent className="grid gap-4 p-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="displayName">Display name</Label>
            <Input id="displayName" {...form.register('displayName')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" {...form.register('company')} />
          </div>
          <div className="space-y-2">
            <Label>Timezone</Label>
            <Select
              value={form.watch('timezone')}
              onValueChange={(v) => form.setValue('timezone', v)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="America/Phoenix">America/Phoenix</SelectItem>
                <SelectItem value="America/Chicago">America/Chicago</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Language</Label>
            <Select
              value={form.watch('language')}
              onValueChange={(v) => form.setValue('language', v)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="currency">Currency</Label>
            <Input id="currency" {...form.register('currency')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vertical">Vertical</Label>
            <Input id="vertical" {...form.register('vertical')} />
          </div>
          <div className="md:col-span-2 flex flex-wrap gap-2">
            <Button type="button" onClick={form.handleSubmit(() => toast.success('Saved (demo)'))}>
              Save changes
            </Button>
            <Button type="button" variant="outline">
              Request data export
            </Button>
            <Button type="button" variant="destructive">
              Delete account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
