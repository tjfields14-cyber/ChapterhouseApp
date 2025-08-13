// @ts-nocheck
import * as React from "react";

export function CHButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "0.75rem",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.1)",
        fontWeight: 600,
      }}
    />
  );
}
