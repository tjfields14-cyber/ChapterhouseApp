
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chapterhouse",
  description: "Freeman Fields Chapterhouse — integration hub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
