export const dynamic = "error";
export const revalidate = 0;
export const dynamic = "force-dynamic";
export const revalidate = 0;
"use client";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Next.js will use this for 500-style errors in the app router.
export default function ErrorPage() {
  return (
    <main className="container">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="opacity-80 mt-2">Please try again.</p>
    </main>
  );
}



export const dynamic = "error";
