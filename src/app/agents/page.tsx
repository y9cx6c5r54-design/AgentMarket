import data from '../../data/agents.json'; import Link from 'next/link';
export default function Agents(){return <div><h1>Agents</h1><div className='grid grid-3'>{data.map((a:any)=><div className='card' key={a.id}><h3>{a.name}</h3><p>{a.tagline}</p><p>{a.price}</p><Link className='btn' href={`/agents/${a.id}`}>View</Link></div>)}</div></div>}
