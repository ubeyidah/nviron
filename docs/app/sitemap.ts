import { source } from "@/lib/source";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nviron.vercel.app";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const docsPages: MetadataRoute.Sitemap = source.getPages().map((page) => {
    return {
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  return [...staticPages, ...docsPages];
}
