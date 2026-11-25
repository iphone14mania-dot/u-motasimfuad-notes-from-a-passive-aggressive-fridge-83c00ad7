import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
mkdirSync(outDir, { recursive: true });

const entry =
  "Note from your fridge: I kept your leftovers cold for six days, Dave, and you still open me at 2 a.m. just to stare — even the yogurt is disappointed in you.";

writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
