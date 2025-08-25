import { readVersion, writeVersion, bumpVersion } from "./utils";

export { readVersion };

export function handleBump(type: "major" | "minor" | "patch") {
  const current = readVersion();
  const next = bumpVersion(current, type);
  writeVersion(next);
  console.log(`✅ Versão atualizada: ${current} → ${next}`);
}
