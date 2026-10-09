import fs from "node:fs/promises";
import path from "node:path";

async function prerender() {
  const serverPath = path.resolve(".output/server/index.mjs");
  const server = await import(serverPath);
  const res = await server.default.fetch(
    new Request("https://claverpanda.dev/"),
    {},
    { waitUntil: () => {}, context: { waitUntil: () => {} } }
  );
  const html = await res.text();
  await fs.writeFile(".output/public/index.html", html, "utf-8");
  console.log("✔ Successfully prerendered .output/public/index.html");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
