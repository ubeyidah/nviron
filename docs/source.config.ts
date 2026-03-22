import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import type { DocsCollection } from "fumadocs-mdx/config";

export const docs: DocsCollection = defineDocs({
  dir: "content/docs",
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

export default defineConfig();
