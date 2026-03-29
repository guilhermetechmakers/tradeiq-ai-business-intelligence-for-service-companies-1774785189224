import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, 'At least 8 characters'),
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, {
    message: 'Passwords must match',
    path: ['confirm'],
  })

type Form = z.infer<typeof schema>

export default function Signup() {
  const form = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '', confirm: '' },
  })

  return (
    <div className="flex min-h-screen items-center justify-center bg-accent/30 px-4">
      <Card className="w-full max-w-md animate-fade-in-up shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Start free trial</CardTitle>
          <CardDescription>
            Create your workspace. You will verify email before connecting integrations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(() => {
              toast.success('Account created (demo). Check email to verify.')
            })}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" type="email" {...form.register('email')} />
              {form.formState.errors.email ? (
                <p className="text-xs text-destructive">
                  {form.formState.errors.email.message}
                </p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...form.register('password')} />
              {form.formState.errors.password ? (
                <p className="text-xs text-destructive">
                  {form.formState.errors.password.message}
                </p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm password</Label>
              <Input id="confirm" type="password" {...form.register('confirm')} />
              {form.formState.errors.confirm ? (
                <p className="text-xs text-destructive">
                  {form.formState.errors.confirm.message}
                </p>
              ) : null}
            </div>
            <Button type="submit" className="w-full">
              Create account
            </Button>
            <div className="space-y-2 rounded-lg border border-dashed border-border p-3 text-center text-xs text-muted-foreground">
              <p>Google / Microsoft SSO (placeholder)</p>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-primary hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
