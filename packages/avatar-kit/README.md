# Avatar Integration Kit (Supabase + Deploy)

This kit helps connect your avatar "body" to a shared backend (Supabase) and deploy targets (Vercel/Netlify).
Use it inside the **Chapterhouse App** monorepo.

## Quick Use
1. Unzip this folder into: `packages/avatar-kit/`
2. Copy `.env.example` values into real env files:
   - Web (Next.js): `apps/web/.env.local`
3. Install the client lib in web:
   ```bash
   # from repo root (PowerShell)
   npm.cmd --workspace @chapterhouse/web i @supabase/supabase-js
   ```
4. Start dev servers, then open `/assistants/bff` or `/assistants/trey` and wire calls via the client in `client/index.ts`.

## Files
- `client/index.ts` – tiny wrapper to create the Supabase client from env
- `web/.env.example` – example env for Next.js
- `supabase/sql/01_schema.sql` – example schema: `profiles` table
- `github/workflows/supabase-lint.yml` – example GH action stub
- `docs/Wiring.md` – how to wire into the monorepo routes
- `netlify.toml` / `vercel.json` – minimal deploy hints

Generated: 2025-08-13
