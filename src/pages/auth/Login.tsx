import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().optional(),
    magicLink: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (!data.magicLink && (!data.password || data.password.length < 8)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password must be at least 8 characters',
        path: ['password'],
      })
    }
  })

type Form = z.infer<typeof schema>

export default function Login() {
  const form = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '', magicLink: false },
  })

  const onSubmit = (data: Form) => {
    toast.success(
      data.magicLink
        ? 'Magic link sent (demo — connect Supabase Auth to enable).'
        : 'Signed in (demo — wire auth API).',
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-accent/30 px-4">
      <Card className="w-full max-w-md animate-fade-in-up shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Log in</CardTitle>
          <CardDescription>
            Email and password, or magic link. SSO placeholders ship next.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center justify-between rounded-lg border border-border bg-card p-3">
              <div>
                <Label htmlFor="magic">Magic link</Label>
                <p className="text-xs text-muted-foreground">Passwordless sign-in</p>
              </div>
              <Switch
                id="magic"
                checked={form.watch('magicLink')}
                onCheckedChange={(v) => form.setValue('magicLink', v)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...form.register('email')}
              />
              {form.formState.errors.email ? (
                <p className="text-xs text-destructive">
                  {form.formState.errors.email.message}
                </p>
              ) : null}
            </div>
            {!form.watch('magicLink') ? (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  {...form.register('password')}
                />
              </div>
            ) : null}
            <Button type="submit" className="w-full">
              Continue
            </Button>
            <div className="flex flex-wrap justify-between gap-2 text-sm text-muted-foreground">
              <Link to="/password-reset" className="text-primary hover:underline">
                Forgot password?
              </Link>
              <Link to="/verify-email" className="hover:underline">
                Verify email
              </Link>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              No account?{' '}
              <Link to="/signup" className="font-medium text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
