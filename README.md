# AgentMarket (Next.js)

Agent marketplace + admin MVP deployed on Vercel.

## Stripe integration

Implemented endpoints:
- `POST /api/checkout` (listing + hire checkout)
- `POST /api/webhook` (Stripe webhook verification)
- Success/cancel pages:
  - `/checkout/success`
  - `/checkout/cancel`

UI wired:
- `/list-agent` → "List Agent & Pay $99"
- `/agents/[id]` → "Hire This Agent (Pilot $750)"

## Required environment variables (Vercel)

- `STRIPE_SECRET_KEY` (`sk_live_...` or `sk_test_...`)
- `STRIPE_WEBHOOK_SECRET` (`whsec_...`)
- `NEXT_PUBLIC_SITE_URL` (e.g. `https://agentmarketnow.com`)
- Existing auth vars still used:
  - `JWT_SECRET`
  - `ADMIN_EMAIL`
  - `ADMIN_PASSWORD`

## Local run

```bash
npm install
npm run dev
```

## Test checkout locally

```bash
curl -s -X POST http://localhost:3000/api/checkout \
  -H 'Content-Type: application/json' \
  -d '{"kind":"listing"}'
```

## Webhook setup (Stripe dashboard)

1. Add endpoint: `https://agentmarketnow.com/api/webhook`
2. Listen for: `checkout.session.completed`
3. Copy signing secret into `STRIPE_WEBHOOK_SECRET`
