"use client";

import { CHButton } from "../../../packages/ui/src";
import { BRAND, formatDate } from "../../../packages/core/src";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [ts] = useState(() => formatDate(new Date()));
  return (
    <main className="container">
      <header className="card">
        <h1 className="text-3xl font-bold">{BRAND.name}</h1>
        <p className="opacity-80">{BRAND.tagline}</p>
      </header>

      <section className="card mt-4">
        <h2 className="text-xl font-semibold mb-2">Integration Hub</h2>
        <p className="opacity-90">
          This is the main construction space. Drop-in parts from other threads here and wire them into routes.
        </p>
        <div className="hr" />
        <div className="flex gap-2 flex-wrap">
          <Link href="/assistants/bff"><CHButton>Open BFF Suite (stub)</CHButton></Link>
          <Link href="/assistants/trey"><CHButton>Open Trey (stub)</CHButton></Link>
        </div>
        <p className="text-sm opacity-70 mt-3">Generated {ts}</p>
      </section>
    </main>
  );
}
