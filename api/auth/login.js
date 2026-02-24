import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { signToken } from '../_lib/auth.js';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!process.env.JWT_SECRET) return res.status(500).json({ error: 'Missing JWT_SECRET' });

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid payload' });

  const { email, password } = parsed.data;
  const adminEmail = (process.env.ADMIN_EMAIL || '').toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || '';

  if (!adminEmail || !adminPassword) {
    return res.status(500).json({ error: 'Missing ADMIN_EMAIL/ADMIN_PASSWORD env vars' });
  }

  const emailMatch = email.toLowerCase() === adminEmail;

  // Support plain ADMIN_PASSWORD or bcrypt hash in ADMIN_PASSWORD_HASH
  let passMatch = password === adminPassword;
  if (!passMatch && process.env.ADMIN_PASSWORD_HASH) {
    passMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
  }

  if (!emailMatch || !passMatch) return res.status(401).json({ error: 'Invalid credentials' });

  const token = signToken({ sub: 1, email: adminEmail, role: 'admin' });
  return res.status(200).json({ token, user: { id: 1, email: adminEmail, role: 'admin' } });
}
