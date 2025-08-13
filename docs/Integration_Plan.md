
# Integration Plan — Chapterhouse App

**Goal:** This repo acts as the integration hub for parts produced in other threads. We standardize where code lands and how it's wired.

## Intake Buckets

- **Web (Next.js)**: `apps/web/app/*`
- **Mobile (Expo RN)**: `apps/mobile/*`
- **Shared Logic**: `packages/core/src/*`
- **Shared UI**: `packages/ui/src/*`
- **3rd-Party Bundles**: `vendor/*`

## Process

1. **Receive artifact** (file, snippet, or zip) from another page.
2. **Classify** the artifact (web page, RN screen, shared helper, DS component, or bundle).
3. **Place** the artifact in the appropriate bucket.
4. **Wire** imports/exports and add a route/screen.
5. **Record** the change in `/docs/Session_Transcript.md` with timestamp.
6. **If issues**, log in `/docs/Error_Log.md` with repro steps and fix.
7. **Run locally**: `npm run dev:web` or `npm run dev:mobile`.
8. **Commit** and push (GitHub).

## Routing Conventions

- Web routes live in `apps/web/app/`. Use folders with `page.tsx`.
- RN screens are simple components registered in `App.tsx`'s stack/navigator.

## Validation

- Lint & type check before commit (add CI later).
- Smoke-test both apps for basic nav and rendering.
