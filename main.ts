import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `The vending machine ate my dollar, then displayed 'exact change only' like it hadn't just committed a crime in front of me.`;

// Self-check: the sealed gate accepts 1..200 characters.
const MAX = 200;
if (TEXT.length < 1 || TEXT.length > MAX) {
  throw new Error(`entry length ${TEXT.length} is outside 1..${MAX}`);
}

const candidates = ["/output", "output"];
for (const dir of candidates) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/entry.txt`, TEXT, "utf8");
    break;
  } catch {
    // fall through to the next candidate location
  }
}
