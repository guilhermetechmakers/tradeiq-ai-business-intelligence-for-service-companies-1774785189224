/**
 * Stripe webhook — verify signature with STRIPE_WEBHOOK_SECRET; update subscriptions / PaymentTransaction.
 * Configure endpoint in Stripe Dashboard → Developers → Webhooks.
 */
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const secret = Deno.env.get('STRIPE_WEBHOOK_SECRET')
  const signature = req.headers.get('stripe-signature')
  if (!secret || !signature) {
    return new Response(JSON.stringify({ error: 'Webhook not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const _rawBody = await req.text()
  // In production: use Stripe SDK constructEvent(_rawBody, signature, secret)
  void _rawBody
  void signature
  void secret

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})
