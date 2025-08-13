"use client";
import React, { useEffect, useMemo, useState } from "react";
import { createSupabase } from "../../../../../packages/avatar-kit/client";

type Row = {
  id: string;
  username: string | null;
  avatar_url: string | null;
  created_at: string;
};

export default function ProfilesPage() {
  const supabase = useMemo(() => createSupabase(), []);
  const [rows, setRows] = useState<Row[]>([]);
  const [status, setStatus] = useState("Loading…");
  const [username, setUsername] = useState("");

  async function load() {
    const { data, error } = await supabase
      .from("profiles")
      .select("id,username,avatar_url,created_at")
      .order("created_at", { ascending: false });
    if (error) setStatus("Error: " + error.message);
    else {
      setRows(data ?? []);
      setStatus(`Loaded ${data?.length ?? 0} rows`);
    }
  }

  useEffect(() => { load(); }, []);

  async function addProfile(e: React.FormEvent) {
    e.preventDefault();
    const name = username.trim();
    if (!name) return;
    const { error } = await supabase.from("profiles").insert({ username: name });
    if (error) { alert(error.message); return; }
    setUsername("");
    await load();
  }

  async function deleteProfile(id: string) {
    const { error } = await supabase.from("profiles").delete().eq("id", id);
    if (error) { alert(error.message); return; }
    await load();
  }

  return (
    <main className="container">
      <h1 className="text-2xl font-semibold">Profiles</h1>
      <p className="opacity-80 mt-2">{status}</p>

      <form onSubmit={addProfile} className="card mt-4" style={{ display: "grid", gap: ".5rem" }}>
        <label className="opacity-80">Add profile (username)</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="e.g., trey-demo-2"
          className="card"
          style={{ padding: ".5rem" }}
        />
        <button type="submit" className="card" style={{ padding: ".5rem" }}>Add</button>
      </form>

      <ul className="mt-4">
        {rows.map((r) => (
          <li key={r.id} className="card mb-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{r.username ?? "(no username)"}</div>
                <div className="text-sm opacity-70">
                  {new Date(r.created_at).toLocaleString()}
                </div>
              </div>
              <button
                onClick={() => deleteProfile(r.id)}
                className="card"
                style={{ padding: ".4rem .6rem" }}
                aria-label={`Delete ${r.username ?? "profile"}`}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
