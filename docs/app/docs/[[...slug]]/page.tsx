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

function articleJsonLd(input: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: input.title,
    description: input.description,
    url: input.url,
    mainEntityOfPage: input.url,
    isPartOf: {
      "@type": "CreativeWork",
      name: "Nviron Documentation",
      url: "https://nviron.vercel.app/docs",
    },
    author: {
      "@type": "Person",
      name: "Ubeyidah",
      url: "https://ubeyidah.tech",
      sameAs: [
        "https://ubeyidah.tech",
        "https://github.com/ubeyidah",
        "https://x.com/ubeyidah",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Nviron",
      url: "https://nviron.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://nviron.vercel.app/logo.png",
      },
    },
    contributor: {
      "@type": "Organization",
      name: "Nviron Contributors",
      url: "https://github.com/ubeyidah/nviron/graphs/contributors",
    },
  };
}

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const title = (page.data as any).title as string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const description = ((page.data as any).description ?? "") as string;
  const url = `https://nviron.vercel.app${page.url}`;

  return (
    <DocsPage
      tableOfContent={{ enabled: true, single: true, style: "clerk" }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toc={(page.data as any).toc}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      full={(page.data as any).full}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd({ title, description, url })),
        }}
      />
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
    alternates: {
      canonical: page.url,
    },
    openGraph: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      title: (page.data as any).title,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      description: (page.data as any).description,
      url: `https://nviron.vercel.app${page.url}`,
      type: "article",
    },
  };
}
