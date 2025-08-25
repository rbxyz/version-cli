# Version CLI

🚀 Uma ferramenta CLI simples e eficiente para gerenciar versões de projetos usando semver.

## Instalação

### Instalação Global (Recomendado)
```bash
# Instalar globalmente
npm install -g .

# Ou se você quiser instalar de um repositório remoto
npm install -g version-cli
```

### Instalação Local
```bash
npm install
npm run build
```

## Uso

Após a instalação global, você pode usar o comando `version` em qualquer diretório:

```bash
# Mostrar versão atual
version show

# Atualizar versão (patch)
version bump patch

# Atualizar versão (minor)
version bump minor

# Atualizar versão (major)
version bump major

# Mostrar ajuda
version help
```

## Comandos Disponíveis

- `version show` - Mostra a versão atual do projeto
- `version bump [major|minor|patch]` - Atualiza a versão conforme especificado
- `version help` - Mostra esta ajuda

## Exemplos de Versionamento

- **Patch** (1.0.0 → 1.0.1): Correções de bugs, pequenas melhorias
- **Minor** (1.0.0 → 1.1.0): Novas funcionalidades compatíveis
- **Major** (1.0.0 → 2.0.0): Mudanças incompatíveis, refatorações grandes

## Arquivo VERSION

O CLI lê e escreve a versão no arquivo `VERSION` na raiz do projeto. Se o arquivo não existir, ele será criado com a versão padrão `0.1.0`.

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Compilar TypeScript
npm run build

# Executar localmente
npm start

# Modo desenvolvimento (compila e executa)
npm run dev
```

## Scripts NPM

- `npm run build` - Compila o TypeScript
- `npm run start` - Executa o CLI compilado
- `npm run dev` - Compila e executa
- `npm run install-global` - Instala globalmente
- `npm run uninstall-global` - Remove instalação global

## Estrutura do Projeto

```
version-cli/
├── src/
│   ├── cli.ts      # Ponto de entrada principal
│   ├── bump.ts     # Lógica de atualização de versão
│   └── utils.ts    # Funções utilitárias
├── dist/           # Código compilado (gerado)
├── package.json    # Configuração do projeto
├── tsconfig.json   # Configuração TypeScript
└── VERSION         # Arquivo de versão atual
```

## Requisitos

- Node.js 16+
- npm ou yarn

## Licença

MIT

