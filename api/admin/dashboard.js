import { verifyTokenFromHeader } from '../_lib/auth.js';

export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  if (!process.env.JWT_SECRET) return res.status(500).json({ error: 'Missing JWT_SECRET' });

  const user = verifyTokenFromHeader(req.headers.authorization || '');
  if (!user) return res.status(401).json({ error: 'Invalid or missing token' });

  return res.status(200).json({ message: 'Welcome to AgentMarket admin backend', user, runtime: 'vercel' });
}
