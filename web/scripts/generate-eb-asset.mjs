import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dir = path.join(root, "public", "images", "eduboost");
const files = fs.readdirSync(dir).filter((f) => f !== "_test.bin" && !f.endsWith(".tmp"));
const entries = files
  .map((f) => {
    const ext = path.extname(f).slice(1);
    const id = path.basename(f, path.extname(f));
    return `  "${id}": "${ext}",`;
  })
  .sort()
  .join("\n");

const out = `/** Figma MCP exports — run scripts/sync-figma-assets.ps1 to refresh. */
const EB_EXT: Record<string, "png" | "svg" | "jpg"> = {
${entries}
};

export function ebAsset(assetId: string): string {
  const ext = EB_EXT[assetId];
  if (!ext) {
    throw new Error(\`Missing local Figma asset: \${assetId}\`);
  }
  return \`/images/eduboost/\${assetId}.\${ext}\`;
}
`;

const dest = path.join(root, "app", "_lib", "eb-asset.ts");
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, out, "utf8");
console.log("wrote", files.length, "entries to app/_lib/eb-asset.ts");
