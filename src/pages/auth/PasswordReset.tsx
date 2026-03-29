import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'

const requestSchema = z.object({ email: z.string().email() })
const resetSchema = z
  .object({
    password: z.string().min(8),
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, {
    message: 'Passwords must match',
    path: ['confirm'],
  })

export default function PasswordReset() {
  const [params] = useSearchParams()
  const token = params.get('token')
  const requestForm = useForm<z.infer<typeof requestSchema>>({
    resolver: zodResolver(requestSchema),
    defaultValues: { email: '' },
  })
  const resetForm = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: { password: '', confirm: '' },
  })

  const strength =
    (resetForm.watch('password')?.length ?? 0) >= 12
      ? 100
      : Math.min(100, (resetForm.watch('password')?.length ?? 0) * 8)

  if (token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-accent/30 px-4">
        <Card className="w-full max-w-md animate-fade-in-up shadow-card">
          <CardHeader>
            <CardTitle className="font-display text-2xl">Set new password</CardTitle>
            <CardDescription>Choose a strong password for your account.</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={resetForm.handleSubmit(() =>
                toast.success('Password updated (demo).'),
              )}
            >
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Strength</span>
                  <span className="text-muted-foreground">{strength}%</span>
                </div>
                <Progress value={strength} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="np">New password</Label>
                <Input id="np" type="password" {...resetForm.register('password')} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="npc">Confirm</Label>
                <Input id="npc" type="password" {...resetForm.register('confirm')} />
                {resetForm.formState.errors.confirm ? (
                  <p className="text-xs text-destructive">
                    {resetForm.formState.errors.confirm.message}
                  </p>
                ) : null}
              </div>
              <Button type="submit" className="w-full">
                Update password
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-accent/30 px-4">
      <Card className="w-full max-w-md animate-fade-in-up shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Reset password</CardTitle>
          <CardDescription>
            We will email a reset link. Demo UI only until email provider is connected.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-4"
            onSubmit={requestForm.handleSubmit(() =>
              toast.success('If the email exists, a link was sent (demo).'),
            )}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...requestForm.register('email')} />
            </div>
            <Button type="submit" className="w-full">
              Send reset link
            </Button>
            <p className="text-center text-sm">
              <Link to="/login" className="text-primary hover:underline">
                Back to log in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
