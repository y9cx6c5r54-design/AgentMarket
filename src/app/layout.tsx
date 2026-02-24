import './globals.css';
import Nav from '../components/Nav';
import Link from 'next/link';

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html>
      <body>
        <Nav/>
        {children}
        <footer>
          <div className='container footer-inner'>
            <div>© 2026 AgentMarket. All rights reserved.</div>
            <div className='footer-links'>
              <Link href='/about'>About</Link>
              <Link href='/agents'>Agents</Link>
              <Link href='/list-agent'>List Your Agent</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
