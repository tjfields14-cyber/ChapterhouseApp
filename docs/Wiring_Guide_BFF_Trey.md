
# Wiring Guide — BFF Suite & Trey

This repo includes two vendor bundles dropped from other threads:

- `vendor/BFF_Suite_v7.zip`
- `vendor/trey-drop.zip`

## Strategy

1. **Unzip locally** into `packages/bff-suite/` and `packages/trey/` respectively.
2. Inspect each bundle's README or entry point.
3. For **web integration**, create pages under `apps/web/app/(assistants)/`:
   - `apps/web/app/(assistants)/bff/page.tsx` — wrapper page rendering the BFF suite UI.
   - `apps/web/app/(assistants)/trey/page.tsx` — wrapper for Trey assistant UI.
4. If the bundles expose web components, import and render directly.
5. If they are pure scripts/assets, load via dynamic import or as a client component.
6. For **mobile**, add screens under `apps/mobile/` and bridge any web content via `WebView` if needed.

> Tip: Keep the bundles **vendorized** and thin wrappers in app code so updates are easy (replace vendor, keep your wrappers).
