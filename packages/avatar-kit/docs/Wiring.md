
# Wiring Avatar Kit into Chapterhouse

## Place the kit
Unzip this folder so that it becomes: `packages/avatar-kit/*`.

## Install deps
In the repo root:
```bash
npm.cmd --workspace @chapterhouse/web i @supabase/supabase-js
```

## Add env
Copy `packages/avatar-kit/web/.env.example` to `apps/web/.env.local` and fill in your Supabase values.

## Use in Next.js page
Example (client component):
```tsx
"use client";
import { createSupabase } from "../../../packages/avatar-kit/client";

export default function Example() {
  const supabase = createSupabase();
  // use supabase.from('profiles')...
  return <div>Avatar kit wired.</div>;
}
```
