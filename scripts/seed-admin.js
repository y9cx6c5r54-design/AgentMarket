import 'dotenv/config';
import bcrypt from 'bcryptjs';
import db from '../src/lib/db.js';

const email = (process.env.ADMIN_EMAIL || '').toLowerCase();
const password = process.env.ADMIN_PASSWORD || '';

if (!email || !password) {
  console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD in .env');
  process.exit(1);
}

const hash = await bcrypt.hash(password, 12);

const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
if (existing) {
  db.prepare('UPDATE users SET password_hash = ?, role = ? WHERE email = ?').run(hash, 'admin', email);
  console.log(`Updated admin user: ${email}`);
} else {
  db.prepare('INSERT INTO users (email, password_hash, role) VALUES (?, ?, ?)').run(email, hash, 'admin');
  console.log(`Created admin user: ${email}`);
}
