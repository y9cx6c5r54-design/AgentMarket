import Database from 'better-sqlite3';
import fs from 'fs';

fs.mkdirSync('data', { recursive: true });
const db = new Database('data/agentmarket.db');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
`);

export default db;
