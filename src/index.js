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

if (typeof(window) !== "undefined") {
    window.remarkProcessor = remarkProcessor
    window.remark = remark

    // dependencies
    window.rehypeSanitize = rehypeSanitize
    window.rehypeStringify = rehypeStringify
    window.remarkParse = remarkParse
    window.remarkRehype = remarkRehype
    window.unified = unified
}
