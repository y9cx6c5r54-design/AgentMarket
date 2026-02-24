# Project Access & Continuity

## Canonical Source
- GitHub repository connected to Vercel (main branch)

## Required for future agent access
1. Keep code in this repo (never deploy from random local folders only)
2. Keep `.env.example` current with all required keys
3. Store real secrets only in host env var manager (Vercel/Render/etc.)
4. If you rotate credentials, update this file with date and what changed
5. Keep admin recovery procedure documented below

## Admin Recovery
1. Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env`
2. Run: `npm run seed:admin`
3. Login via `POST /auth/login`

## Last updated
- 2026-02-24: Initial backend scaffold created and continuity file added.
