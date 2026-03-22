import { source } from "@/lib/source";
import type { InferPageType } from "fumadocs-core/source";

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await (
    page.data as { getText: (type: "processed") => Promise<string> }
  ).getText("processed");

  return `# ${page.data.title} (${page.url})\n\n${processed}`;
}
