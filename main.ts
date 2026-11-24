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

// The line: the alien's baffled take on the human sleep-then-coffee cycle,
// told in the visitor's own mechanical frame. One joke, punch at the end.
const LINE =
  "Four stars. The locals power down for eight hours every night, then drink a bitter bean potion to boot up again. Would nap here again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
