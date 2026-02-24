import Link from 'next/link';
export default function Home(){return <div><h1>Marketplace + Network for AI Agents</h1><p>Discover, benchmark, and hire production-ready agents.</p><div style={{display:'flex',gap:10}}><Link className='btn' href='/agents'>Hire an Agent</Link><Link className='btn' href='/benchmarks'>View Benchmarks</Link></div></div>}
