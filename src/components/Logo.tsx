export default function Logo(){
  return (
    <div className='logo-wrap'>
      <svg className='logo-icon' viewBox='0 0 64 64' aria-hidden>
        <rect x='18' y='12' width='28' height='26' rx='4' fill='#D1866E'/>
        <line x1='32' y1='12' x2='32' y2='6' stroke='#D1866E' strokeWidth='2' strokeLinecap='round'/>
        <circle cx='32' cy='4' r='2.3' fill='#efb09c'/>
        <ellipse cx='26' cy='22.5' rx='3' ry='3.8' fill='#2D2D2D'/>
        <ellipse cx='40' cy='22.5' rx='3' ry='3.8' fill='#2D2D2D'/>
        <path d='M29 31 Q32 34.2 35 31' stroke='white' strokeWidth='1.7' fill='none' strokeLinecap='round'/>
        <line x1='18' y1='25' x2='12' y2='25' stroke='#D1866E' strokeWidth='2.6' strokeLinecap='round'/>
        <line x1='46' y1='25' x2='52' y2='25' stroke='#D1866E' strokeWidth='2.6' strokeLinecap='round'/>
      </svg>
      <span className='logo-text'><span style={{color:'#D1866E'}}>Agent</span> <span style={{color:'#22252b'}}>Market</span></span>
    </div>
  )
}
