"use client";

export default function GlobalError(
  { error, reset }: { error: Error & { digest?: string }; reset: () => void }
) {
  return (
    <main className="container">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="opacity-80 mt-2">{error?.message ?? "Please try again."}</p>
      <button onClick={() => reset()} className="mt-4 underline">Try again</button>
    </main>
  );
}
