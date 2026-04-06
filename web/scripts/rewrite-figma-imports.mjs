import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compDir = path.join(__dirname, "..", "app", "_components");
const files = fs
  .readdirSync(compDir)
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => path.join(compDir, f));

const re = /"https:\/\/www\.figma\.com\/api\/mcp\/asset\/([a-f0-9-]+)"/g;

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  if (!s.includes("figma.com/api/mcp/asset")) continue;
  let out = s.replace(re, 'ebAsset("$1")');
  if (out === s) continue;
  if (!out.includes("@/app/_lib/eb-asset")) {
    const lines = out.split("\n");
    const idx = lines.findIndex((l) => l.startsWith("import "));
    const insert = idx >= 0 ? idx + 1 : 0;
    lines.splice(insert, 0, 'import { ebAsset } from "@/app/_lib/eb-asset";');
    out = lines.join("\n");
  }
  fs.writeFileSync(file, out, "utf8");
  console.log("updated", path.basename(file));
}
