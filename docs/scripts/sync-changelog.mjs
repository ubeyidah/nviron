import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "..", "..");
const sourcePath = path.join(repoRoot, "CHANGELOG.md");
const targetDir = path.resolve(__dirname, "..", "content", "docs");
const targetPath = path.join(targetDir, "changelog.mdx");

const source = await readFile(sourcePath, "utf8");
const normalized = source.replace(/\r\n/g, "\n").trim();

const body = normalized.replace(/^#\s+Changelog\s*\n+/i, "").trim();

const linkGithubMentions = (markdown) => {
  const chunks = markdown.split(/(```[\s\S]*?```)/g);

  return chunks
    .map((chunk) => {
      if (chunk.startsWith("```")) return chunk;

      return chunk.replace(
        /(^|[^\w`])@([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,38}))/g,
        (match, prefix, username) => {
          return `${prefix}[@${username}](https://github.com/${username})`;
        },
      );
    })
    .join("");
};

const withMentionsLinked = linkGithubMentions(body);

const output = `---
title: Changelog
description: Complete release history for nviron
---

import { Callout } from 'fumadocs-ui/components/callout';

<Callout type="info">
This page is generated from the root <code>CHANGELOG.md</code> file to keep
release notes in a single source of truth.
</Callout>

${withMentionsLinked}
`;

await mkdir(targetDir, { recursive: true });
await writeFile(targetPath, output);

console.log(`Synced changelog to ${targetPath}`);
