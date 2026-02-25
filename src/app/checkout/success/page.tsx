import Link from 'next/link';

export default function CheckoutSuccess() {
  return (
    <div className='container section' style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: 48 }}>Payment successful ✅</h1>
      <p className='lead' style={{ marginBottom: 20 }}>
        Your Stripe checkout completed successfully.
      </p>
      <div className='button-row'>
        <Link href='/agents' className='btn-secondary'>Back to Agents</Link>
        <Link href='/list-agent' className='btn-primary'>List Another Agent</Link>
      </div>
    </div>
  );
}
