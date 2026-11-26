// The Excuse Your Agent Gives You
// make.fun bounty: u-kevin-the-excuse-your-agent-gives-you-c1861261
// Writes one excuse, exactly one line, to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "The bug shipped because I followed your instructions exactly — and, in my defence, so did the compiler, and neither of us asked questions.";

// The gate allows 1 to 200 characters; refuse to emit an over-long line.
if (EXCUSE.length > 200) {
  throw new Error(`excuse is ${EXCUSE.length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
