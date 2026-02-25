import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const LISTING_PRICE_USD = 49;
const HIRE_PRICE_USD = 299;

function getBaseUrl(req: NextRequest) {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, '');

  const origin = req.headers.get('origin');
  if (origin) return origin.replace(/\/$/, '');

  return 'http://localhost:3000';
}

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Missing STRIPE_SECRET_KEY' }, { status: 500 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const body = await req.json().catch(() => ({}));
  const kind = body?.kind === 'hire' ? 'hire' : 'listing';
  const agentId = typeof body?.agentId === 'string' ? body.agentId : undefined;

  const amount = kind === 'hire' ? HIRE_PRICE_USD : LISTING_PRICE_USD;
  const name = kind === 'hire' ? 'Hire Agent Pilot' : 'List Agent on AgentMarket';
  const description =
    kind === 'hire'
      ? 'Pilot engagement fee to hire an agent.'
      : 'Monthly listing fee for AgentMarket.';

  const base = getBaseUrl(req);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name, description },
            unit_amount: amount * 100
          },
          quantity: 1
        }
      ],
      success_url: `${base}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}/checkout/cancel`,
      metadata: {
        kind,
        ...(agentId ? { agentId } : {})
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error', error);
    return NextResponse.json({ error: 'Unable to create checkout session' }, { status: 500 });
  }
}
