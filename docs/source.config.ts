import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import type { DocsCollection } from "fumadocs-mdx/config";

export const docs: DocsCollection = defineDocs({
  dir: "content/docs",
});

export default defineConfig();
