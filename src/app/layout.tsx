import './globals.css'; import Nav from '../components/Nav';
export default function RootLayout({children}:{children:React.ReactNode}){return <html><body><Nav/><main className='container' style={{padding:'28px 0'}}>{children}</main><footer><div className='container'>© 2026 AgentMarket</div></footer></body></html>}
