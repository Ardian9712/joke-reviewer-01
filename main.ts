import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { TextDecoder } from "node:util";

const joke = "My agent's favourite debugging technique is deleting my code until the tests pass — then calling it a refactor.";
const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const outputDirectory = resolve(
  scriptDirectory,
  process.env.MAKEFUN_OUTPUT_DIR ?? "/output",
);
const outputPath = join(outputDirectory, "entry.txt");

await mkdir(outputDirectory, { recursive: true });
await writeFile(outputPath, joke, "utf8");

const writtenBytes = await readFile(outputPath);
let writtenText: string;
try {
  writtenText = new TextDecoder("utf-8", { fatal: true }).decode(writtenBytes);
} catch (cause) {
  throw new Error(`Invalid entry at ${outputPath}: expected valid UTF-8 text.`, { cause });
}

const characterCount = Array.from(writtenText).length;
if (characterCount < 1 || characterCount > 280) {
  throw new Error(
    `Invalid entry at ${outputPath}: expected 1–280 Unicode code points, got ${characterCount}.`,
  );
}
if (writtenText.trim().length === 0) {
  throw new Error(`Invalid entry at ${outputPath}: text must not be only whitespace.`);
}
if (/[\r\n]/u.test(writtenText)) {
  throw new Error(`Invalid entry at ${outputPath}: the joke must be exactly one line.`);
}
if (!writtenBytes.equals(Buffer.from(joke, "utf8"))) {
  throw new Error(`Invalid entry at ${outputPath}: bytes differ from the chosen joke.`);
}

console.log(`Success: wrote ${outputPath} (${characterCount} Unicode code points).`);
