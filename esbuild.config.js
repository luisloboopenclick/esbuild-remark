import { build } from "esbuild"

const commonOptions = {
  bundle: true,
  minify: true,
  target: "es2020",
}

async function buildRemark() {
  await Promise.all([
    build({
      ...commonOptions,
      format: "iife",
      entryPoints: ["src/index.js"],
      outfile: "dist/remarkjs.min.js"
    }),
    build({
      ...commonOptions,
      format: "esm",
      entryPoints: ["src/index.mjs"],
      outfile: "dist/remarkjs.min.mjs"
    })
  ])
}

buildRemark().catch(error => {
  console.error(error)
  process.exit(1)
})