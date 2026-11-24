// Alien Field Notes: The Two Day Earth Review (make.fun bounty).
//
// Writes one original line of plain text — a review of planet Earth left
// by an alien tourist — to entry.txt in the output directory. The output
// file holds exactly the line, nothing else: no trailing newline, no
// commentary.
//
// Run it: MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Draft line: the alien's baffled take on human small talk.
const LINE =
  "Four stars. Strangers ask how I am, then panic if I actually answer. Lovely planet, terrible at follow-up questions. Would visit again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
