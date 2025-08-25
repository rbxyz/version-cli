import fs from "fs";

export function readVersion(file = "VERSION"): string {
  if (!fs.existsSync(file)) return "0.1.0"; // default inicial
  return fs.readFileSync(file, "utf-8").trim();
}

export function writeVersion(version: string, file = "VERSION") {
  fs.writeFileSync(file, version);
}

export function bumpVersion(current: string, type: "major" | "minor" | "patch") {
  let [major, minor, patch] = current.split(".").map(Number);
  switch (type) {
    case "major":
      major++;
      minor = 0;
      patch = 0;
      break;
    case "minor":
      minor++;
      patch = 0;
      break;
    case "patch":
      patch++;
      break;
  }
  return `${major}.${minor}.${patch}`;
}
