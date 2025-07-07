import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeSanitize from "rehype-sanitize"
import rehypeStringify from "rehype-stringify"

const remarkProcessor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)

async function remark(markdownText) {
  return String(await remarkProcessor.process(markdownText))
}

export {
  remarkProcessor,
  remark,

  // dependencies
  rehypeSanitize,
  rehypeStringify,
  remarkParse,
  remarkRehype,
  unified
}
