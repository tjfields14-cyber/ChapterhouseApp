"use client";
import React, { useEffect, useState } from "react";
import { createSupabase } from "../../../../../packages/avatar-kit/client";

export default function SupabaseCheckPage() {
  const [status, setStatus] = useState("Connecting…");

  useEffect(() => {
    const run = async () => {
      try {
        const supabase = createSupabase();
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .limit(1);
        if (error) {
          setStatus("Connected, but DB check failed: " + error.message);
        } else {
          setStatus("Connected. profiles rows: " + (data?.length ?? 0));
        }
      } catch (e: any) {
        setStatus("Error: " + (e?.message ?? String(e)));
      }
    };
    run();
  }, []);

  return (
    <main className="container">
      <h1 className="text-2xl font-semibold">Supabase Connection Check</h1>
      <p className="opacity-80 mt-2">{status}</p>
      <p className="text-sm opacity-70 mt-3">
        If you see a “relation &quot;profiles&quot; does not exist” error, we’ll run the schema next.
      </p>
    </main>
  );
}
