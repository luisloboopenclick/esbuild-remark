import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeSanitize from "rehype-sanitize"
import { visit } from "unist-util-visit"
import rehypeStringify from "rehype-stringify"

function addTargetBlankToAllLinks() {
  return (tree) => {
    visit(tree, "element", (node) => {
      console.log("node", node)
      if (node.tagName === "a") { // yes, it is in lower case
        node.properties = {
          ...node.properties,
          target: "_blank",
          rel: ["noopener", "noreferrer"]
        }
      }
    })
  }
}

const remarkProcessor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(addTargetBlankToAllLinks)
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
