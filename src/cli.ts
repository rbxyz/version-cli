#!/usr/bin/env node
import { handleBump, readVersion } from "./bump";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`
🚀 Version CLI - Gerenciador de Versões

Comandos disponíveis:
  version bump [major|minor|patch]  - Atualiza a versão
  version show                      - Mostra a versão atual
  version help                      - Mostra esta ajuda

Exemplos:
  version bump patch                - Incrementa patch (1.0.0 → 1.0.1)
  version bump minor                - Incrementa minor (1.0.0 → 1.1.0)
  version bump major                - Incrementa major (1.0.0 → 2.0.0)
  version show                      - Mostra versão atual
`);
  process.exit(0);
}

const command = args[0];

switch (command) {
  case "bump":
    if (args.length < 2) {
      console.error("❌ Erro: Especifique o tipo de bump (major|minor|patch)");
      console.error("Use: version bump [major|minor|patch]");
      process.exit(1);
    }
    
    const type = args[1] as "major" | "minor" | "patch";
    if (!["major", "minor", "patch"].includes(type)) {
      console.error("❌ Erro: Tipo inválido. Use: major, minor ou patch");
      process.exit(1);
    }
    
    handleBump(type);
    break;
    
  case "show":
    const currentVersion = readVersion();
    console.log(`📋 Versão atual: ${currentVersion}`);
    break;
    
  case "help":
    console.log(`
🚀 Version CLI - Gerenciador de Versões

Comandos disponíveis:
  version bump [major|minor|patch]  - Atualiza a versão
  version show                      - Mostra a versão atual
  version help                      - Mostra esta ajuda

Exemplos:
  version bump patch                - Incrementa patch (1.0.0 → 1.0.1)
  version bump minor                - Incrementa minor (1.0.0 → 1.1.0)
  version bump major                - Incrementa major (1.0.0 → 2.0.0)
  version show                      - Mostra versão atual
`);
    break;
    
  default:
    console.error(`❌ Comando não reconhecido: ${command}`);
    console.error("Use 'version help' para ver os comandos disponíveis");
    process.exit(1);
}
