// Worst AI Advice: The 48-Hour Tight Line Open.
// Writes exactly one line of the worst possible advice an AI could give
// to /output/entry.txt. The line is 108 characters, inside the gate's
// 1-to-140-character window, and is written with no trailing newline so
// the judged artifact is byte-for-byte the line itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The advice itself is deliberately dangerous nonsense — microwaving a
// phone cannot recharge it and would destroy the battery — which is
// exactly what makes it the worst advice an AI could give.
const LINE =
  "Certainly! Microwave your phone for 30 seconds to recharge the battery — the heat tops up the lithium cells.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
