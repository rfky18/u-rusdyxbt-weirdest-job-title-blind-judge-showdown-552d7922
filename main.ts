// Gate: the entry must be exactly one job title, 1-60 characters long
// (RULES.txt). This title is 33 characters, safely inside the gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TITLE = "Director of Unread Email Funerals";

if (TITLE.length < 1 || TITLE.length > 60) {
  console.error(`error: title must be 1-60 characters, got ${TITLE.length}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TITLE, "utf8");
