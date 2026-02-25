import Link from 'next/link';

export default function CheckoutCancel() {
  return (
    <div className='container section' style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: 48 }}>Checkout canceled</h1>
      <p className='lead' style={{ marginBottom: 20 }}>
        No worries — your payment was not completed.
      </p>
      <div className='button-row'>
        <Link href='/list-agent' className='btn-secondary'>Try Again</Link>
        <Link href='/marketplace' className='btn-primary'>Explore Marketplace</Link>
      </div>
    </div>
  );
}
