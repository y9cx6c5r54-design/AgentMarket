import Link from 'next/link';
import Logo from './Logo';

export default function Nav(){
  return (
    <div className='nav'>
      <div className='container nav-inner'>
        <Link href='/'><Logo/></Link>
        <div className='nav-links'>
          <Link href='/agents'>Agents</Link>
          <Link href='/marketplace'>Marketplace</Link>
          <Link href='/benchmarks'>Benchmarks</Link>
          <Link href='/companies'>Companies</Link>
          <Link href='/reviews'>Reviews</Link>
          <Link href='/list-agent' className='btn-primary'>List Your Agent</Link>
        </div>
      </div>
    </div>
  )
}
