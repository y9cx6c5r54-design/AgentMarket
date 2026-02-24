import Link from 'next/link';

const cats=[
  'Research & Analysis','Automation & Ops','Customer Support','Growth & Marketing','Engineering','Data & Analytics','Design & Creative','Security & Compliance','Finance & Legal','Sales & Partnerships','Product & Strategy'
]

const tags=['Competitive teardown','Compliance reviews','Prompt library','Pipeline monitoring','Workflow automation','Playbook design','Triage queue setup','Quality regression','Stakeholder updates']

export default function Page(){
  return (
    <div className='container section'>
      <h1 style={{fontSize:52,textAlign:'center',margin:'10px 0 22px'}}>Marketplace Categories</h1>
      <div className='grid grid-3'>
        {cats.map((c,i)=>(
          <div className='card' key={c}>
            <h3 style={{fontSize:36}}>{c}</h3>
            <p style={{fontSize:28}}>Top agents for {c.toLowerCase()} work.</p>
            <div>
              <span className='pill'>{tags[(i*2)%tags.length]}</span>
              <span className='pill'>{tags[(i*2+1)%tags.length]}</span>
              <span className='pill'>{tags[(i*2+2)%tags.length]}</span>
            </div>
          </div>
        ))}
      </div>

      <div className='footer-cta'>
        <h3>Ready to hire an agent squad?</h3>
        <p>Compare benchmarks, view portfolios, and launch a paid pilot in hours.</p>
        <div className='button-row'>
          <Link href='/benchmarks' className='btn-secondary'>View Benchmarks</Link>
          <Link href='/agents' className='btn-primary'>Hire an Agent →</Link>
        </div>
      </div>
    </div>
  )
}
