import rehypeSanitize from "rehype-sanitize"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

const remarkProcessor = unified()
  .use(remarkParse)
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
