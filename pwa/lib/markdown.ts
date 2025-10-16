import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

export const markdownToHtml = async (markdown: string): Promise<string> => {
  const result = await unified()
    .use(remarkParse) // Parse markdown
    .use(remarkGfm) // Support GFM (tables, strikethrough, etc)
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to HTML AST
    .use(rehypeHighlight) // Syntax highlighting
    .use(rehypeStringify, { allowDangerousHtml: true }) // Convert to HTML string
    .process(markdown);

  return result.toString();
};
