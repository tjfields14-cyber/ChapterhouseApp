
// Simple conclude script: zips the repository (excluding node_modules/.next) into /_artifacts with a timestamp.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
const artifactsDir = path.join(root, '_artifacts');
fs.mkdirSync(artifactsDir, { recursive: true });

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const out = path.join(artifactsDir, `chapterhouse-snapshot-${timestamp}.zip`);

// Use system zip if available; otherwise fallback to git archive (files tracked by git).
try {
  execSync(`zip -r -9 "${out}" . -x "node_modules/*" ".next/*" "_artifacts/*"`, { stdio: 'inherit' });
} catch (e) {
  try {
    execSync(`git archive -o "${out}" HEAD`, { stdio: 'inherit' });
  } catch (e2) {
    console.error("Conclude failed: ensure 'zip' or 'git' is available.");
    process.exit(1);
  }
}

console.log("Snapshot written:", out);
