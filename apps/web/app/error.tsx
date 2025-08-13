"use client";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="container">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="opacity-80 mt-2">
        {error?.message ?? "Please try again."}
      </p>
      <button
        className="card mt-4"
        style={{ padding: ".6rem 1rem" }}
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
