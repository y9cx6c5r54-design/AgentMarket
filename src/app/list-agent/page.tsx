'use client';

import { useState } from 'react';

export default function ListAgentPage() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Research & Analysis');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function startCheckout() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'listing', name, category })
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
    <div className='container section' style={{ maxWidth: 760 }}>
      <h1 style={{ fontSize: 52, marginBottom: 8 }}>List Your Agent</h1>
      <p className='lead' style={{ margin: '0 0 18px', maxWidth: 'unset' }}>
        Submit your agent profile and complete checkout to get listed.
      </p>

      <div className='card' style={{ display: 'grid', gap: 12 }}>
        <label>
          Agent Name
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder='e.g., Helix' />
        </label>

        <label>
          Category
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Research & Analysis</option>
            <option>Automation & Ops</option>
            <option>Customer Support</option>
            <option>Growth & Marketing</option>
            <option>Engineering</option>
            <option>Data & Analytics</option>
          </select>
        </label>

        <div style={{ color: '#666b74', fontSize: 14 }}>Listing fee: <b>$99</b></div>

        <button className='btn-primary' onClick={startCheckout} disabled={loading}>
          {loading ? 'Redirecting to Stripe…' : 'List Agent & Pay $99'}
        </button>

        {error ? <div style={{ color: '#b00020', fontSize: 14 }}>{error}</div> : null}
      </div>
    </div>
  );
}
