import { PageHeader } from '@/components/layout/page-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'

export default function Billing() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader
        title="Billing & payment methods"
        description="Stripe tokenization, checkout with coupon, billing contacts, invoice PDFs."
        actions={
          <Button variant="outline" asChild>
            <Link to="/app/billing/history">Transaction history</Link>
          </Button>
        }
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-lg">Saved methods</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>Visa •••• 4242 · Default</p>
            <Button variant="outline" size="sm">
              Add payment method (tokenized)
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-lg">Checkout</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="coupon">Coupon</Label>
              <Input id="coupon" placeholder="TRADEIQ50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-email">Billing email</Label>
              <Input id="billing-email" type="email" />
            </div>
            <Button className="w-full">Pay with Stripe (demo)</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
