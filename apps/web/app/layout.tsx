export const dynamic = "force-dynamic";
export const revalidate = 0;

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chapterhouse",
  description: "Freeman Fields Chapterhouse â€” integration hub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

