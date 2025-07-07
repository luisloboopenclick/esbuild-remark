# 📦 esbuild-remark

Build personalizada da biblioteca [remark](https://github.com/remarkjs/remark) com um pipeline completo para converter Markdown em HTML seguro. Inclui suporte a Frontmatter, GFM (GitHub Flavored Markdown) e sanitização de HTML.  
Gera bundles nos formatos **IIFE** (uso direto em navegador) e **ESM** (uso moderno via `import`).

---

## ✨ Plugins incluídos

- [`remark-parse`](https://github.com/remarkjs/remark/tree/main/packages/remark-parse): Parser de Markdown.
- [`remark-frontmatter`](https://github.com/remarkjs/remark-frontmatter): Suporte a blocos Frontmatter (`---`).
- [`remark-gfm`](https://github.com/remarkjs/remark-gfm): Suporte a GitHub Flavored Markdown (GFM), incluindo tabelas e listas de tarefas.
- [`remark-rehype`](https://github.com/remarkjs/remark-rehype): Converte Markdown para HTML AST (HAST).
- [`rehype-sanitize`](https://github.com/rehypejs/rehype-sanitize): Sanitiza o HTML para evitar XSS.
- [`rehype-stringify`](https://github.com/rehypejs/rehype-stringify): Converte HAST em HTML.
- [`unified`](https://github.com/unifiedjs/unified): Framework de processamento de texto que integra tudo isso.

---

## 📁 Estrutura

```
remarkjs-compiler/
├── src/
│   ├── index.js     # Bundle para navegador (IIFE)
│   └── index.mjs    # Bundle para ESM moderno
├── dist/
│   ├── remarkjs.min.js      # Gerado (IIFE)
│   └── remarkjs.min.mjs     # Gerado (ESM)
├── esbuild.config.js        # Script de build com esbuild
└── package.json
```

---

## ⚙️ Instalação

```bash
git clone https://github.com/luisloboopenclick/esbuild-remark.git
cd esbuild-remark
npm install
```

---

## 🛠️ Build

Para gerar os arquivos minificados:

```bash
npm run build
```

Isso cria:

- `dist/remarkjs.min.js` – formato **IIFE** (uso direto no navegador).
- `dist/remarkjs.min.mjs` – formato **ESM** (uso com `import`).

---

## 🌐 Uso no navegador (via script)

```html
<script src="dist/remarkjs.min.js"></script>
<script>
  (async () => {
    const htmlString = await window.remark(`# Hello **Markdown**`)
    console.log(htmlString)
  })()
</script>

<div id="output"></div>
```

---

## 📥 Uso com ESM moderno

```js
import { remark } from "./dist/remarkjs.min.mjs"

const htmlString = await remark(`# Hello **Markdown**`)
console.log(htmlString)
```
