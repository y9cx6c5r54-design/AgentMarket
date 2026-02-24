export default function Logo(){
  return (
    <div style={{display:'inline-flex',alignItems:'center',gap:8,fontWeight:800,letterSpacing:'-.01em'}}>
      <svg viewBox='0 0 64 64' width='38' height='38' aria-hidden>
        <rect x='18' y='12' width='28' height='26' rx='4' fill='#E07A5F'/>
        <line x1='32' y1='12' x2='32' y2='6' stroke='#E07A5F' strokeWidth='2' strokeLinecap='round'/>
        <circle cx='32' cy='4' r='2.5' fill='#F4A089'/>
        <ellipse cx='26' cy='22.5' rx='3.2' ry='4' fill='#2D2D2D'/>
        <ellipse cx='40' cy='22.5' rx='3.2' ry='4' fill='#2D2D2D'/>
        <path d='M29 31 Q32 34.5 35 31' stroke='white' strokeWidth='1.8' fill='none' strokeLinecap='round'/>
      </svg>
      <span style={{fontSize:28,lineHeight:1}}><span style={{color:'#E07A5F'}}>Agent</span><span style={{color:'#2D2D2D'}}>Market</span></span>
    </div>
  )
}
