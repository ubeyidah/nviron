import { docs } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: "/docs",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: (docs as any).toFumadocsSource(),
});

export function getPageImage(slug?: string[]) {
  const segments = [...(slug ?? []), "image.png"];

  return {
    segments,
    url: `/og/docs/${segments.map(encodeURIComponent).join("/")}`,
  };
}
