import { source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";
import { createRelativeLink } from "fumadocs-ui/mdx";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const page = source.getPage(resolvedParams.slug);
  if (!page) notFound();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MDX = (page.data as any).body;

  return (
    <DocsPage
      tableOfContent={{ enabled: true, single: true, style: "clerk" }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toc={(page.data as any).toc}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      full={(page.data as any).full}
    >
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <DocsTitle>{(page.data as any).title}</DocsTitle>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <DocsDescription>{(page.data as any).description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const page = source.getPage(resolvedParams.slug);
  if (!page) notFound();

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    title: (page.data as any).title,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    description: (page.data as any).description,
  };
}
