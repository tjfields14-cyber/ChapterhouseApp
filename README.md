# Chapterhouse App — Monorepo Starter

This repository is the **main construction hub** for the Chapterhouse App. It is designed to integrate parts being developed in other places/chats and wire them into a single cohesive codebase.

**Highlights**
- Monorepo using npm workspaces
- Web app: Next.js + Tailwind (apps/web)
- Mobile app: Expo React Native (apps/mobile)
- Shared packages (packages/*) for code reuse
- Vendor drop area for external bundles from other threads (`/vendor`)
- Docs and wiring guides for consistent integration
- Session transcript & error log templates in `/docs`

> Date generated: **2025-08-12**

---

## Quick Start

1. **Install Node.js 18+** (recommended LTS) and npm 10+.
2. From repo root, install dependencies:

   ```bash
   npm install
   ```

3. **Run the web app (Next.js):**

   ```bash
   npm run dev:web
   # Visit http://localhost:3000
   ```

4. **Run the mobile app (Expo):**

   ```bash
   npm run dev:mobile
   # Follow the Expo CLI instructions for Android/iOS/Web
   ```

---

## Folder Structure

```
.
├─ apps/
│  ├─ web/            # Next.js + Tailwind
│  └─ mobile/         # Expo React Native
├─ packages/
│  ├─ ui/             # Shared UI (placeholder)
│  └─ core/           # Shared core helpers, types
├─ vendor/
│  ├─ BFF_Suite_v7.zip   # Uploaded from other thread
│  └─ trey-drop.zip      # Uploaded from other thread
├─ docs/
│  ├─ Integration_Plan.md
│  ├─ Wiring_Guide_BFF_Trey.md
│  ├─ Session_Transcript.md
│  └─ Error_Log.md
└─ tools/
   └─ conclude.mjs     # Bundles current state into /_artifacts
```

---

## How to integrate parts from other chats

- If you receive a **component/page** for the website, place it under `apps/web/app/` (App Router).  
  Example buckets you can use now:
  - `apps/web/app/(marketing)/` for landing & static pages
  - `apps/web/app/(dashboard)/` for signed-in experiences
  - `apps/web/app/(assistants)/` for BFF / Trey assistant screens

- If you receive **React Native screens** or utilities, drop them into `apps/mobile/` under `app/` or `screens/`, then register in the navigator in `App.tsx`.

- If you receive **shared logic / types**, prefer adding to `packages/core/` and import in both apps.

- If you receive **design-system bits**, place them in `packages/ui/` and wire to both apps.

- If you receive **zip bundles** (like BFF Suite or Trey), put them in `/vendor` (already added) and follow `docs/Wiring_Guide_BFF_Trey.md` to wire them into the web and/or mobile app.

---

## Automation & Safety

- Use `npm run conclude` to bundle a timestamped snapshot to `/_artifacts` (zips the repo, captures docs).  
  Useful before publishing or switching threads.

- Keep a running **Session Transcript** and **Error Log** in `/docs`. Templates included.

---

## GitHub / Deploy

**GitHub**:
```bash
git init
git add -A
git commit -m "chore: Chapterhouse App monorepo starter"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

**Web Deploy (Netlify/Vercel):** point to `apps/web` with `npm run build` and `npm run start`.

**Mobile APK (Google Play):** use Expo EAS build. Example:
```bash
npm --workspace apps/mobile run android
# For production:
# npx expo build:android   (or use EAS: npx expo run:android / npx eas build)
```

---

## Next steps suggested

- Wire the BFF Suite into `apps/web/app/(assistants)` (instructions in docs).  
- Create a `@chapterhouse/auth` strategy (NextAuth or Clerk) when ready.  
- Flesh out shared UI in `packages/ui/` using shadcn/ui for web and RN components for mobile.
- Add CI (GitHub Actions) and environment files (.env, app.config).

