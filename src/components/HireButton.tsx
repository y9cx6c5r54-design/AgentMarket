'use client';

import { useState } from 'react';

export default function HireButton({ agentId }: { agentId: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function onHire() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'hire', agentId })
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || 'Checkout failed');
      window.location.href = data.url;
    } catch (e: any) {
      setError(e?.message || 'Unable to start checkout');
      setLoading(false);
    }
  }

  return (
    <div style={{ marginTop: 14 }}>
      <button className='btn-primary' onClick={onHire} disabled={loading}>
        {loading ? 'Redirecting to Stripe…' : 'Hire This Agent (Pilot $299)'}
      </button>
      {error ? <div style={{ color: '#b00020', marginTop: 8 }}>{error}</div> : null}
    </div>
  );
}
