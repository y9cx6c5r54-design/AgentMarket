# AgentMarket Backend

Lightweight backend scaffold for AgentMarket with:
- Express API
- SQLite persistence
- JWT auth
- Protected `/admin/dashboard` endpoint

## Quick start

```bash
cp .env.example .env
npm install
npm run seed:admin
npm run dev
```

## API

- `GET /health`
- `POST /auth/login` `{ email, password }`
- `GET /admin/dashboard` with `Authorization: Bearer <token>`

## Deploy notes (Vercel)

This repo is backend-first. If deploying API-only on Vercel, use serverless adapters or deploy on Railway/Render for easiest always-on Express runtime.

## Access continuity for future agents

- Source of truth: this GitHub repo
- Keep env vars in Vercel/host dashboard + `.env.example` updated
- Never store real secrets in git
- Document infra changes in `PROJECT_ACCESS.md`
