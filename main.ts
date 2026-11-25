// Robot Romance: One-Line Pickup Lines for AI — entry for @berkahmuse.
// Writes one single-line pickup line, aimed at a robot/AI, to /output/entry.txt.
// The joke lives on the machine premise (transformer / attention heads) and
// dodges the worn battery / charging / reboot moves entirely.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Are you a transformer? Because every time you speak, all my attention heads turn toward you.";

// Mirror the sealed gate: 1–200 chars, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || !LINE.trim()) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
