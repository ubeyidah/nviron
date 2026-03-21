import Container from "@/components/shared/container";
import { getChangelogReleases } from "@/lib/changelog";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Track every nviron release with a clean timeline of added, changed, and fixed updates.",
  alternates: {
    canonical: "/changelog",
  },
  openGraph: {
    title: "Nviron Changelog",
    description:
      "A complete timeline of nviron releases and changes for developers.",
    url: "https://nviron.vercel.app/changelog",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nviron Changelog",
    description: "Release-by-release updates for nviron.",
  },
};

const techArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Nviron Changelog",
  description:
    "Track every nviron release with a timeline of added, changed, and fixed updates.",
  url: "https://nviron.vercel.app/changelog",
  mainEntityOfPage: "https://nviron.vercel.app/changelog",
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
  about: [
    {
      "@type": "SoftwareApplication",
      name: "Nviron",
      url: "https://nviron.vercel.app",
      codeRepository: "https://github.com/ubeyidah/nviron",
    },
  ],
};

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(`${value}T00:00:00Z`));
}

function slugVersion(version: string): string {
  return `release-${version.replace(/\./g, "-")}`;
}

function renderTextWithMentions(text: string): ReactNode[] {
  const segments = text.split(/(@[a-zA-Z0-9][a-zA-Z0-9-]{0,38})/g);

  return segments.map((segment, index) => {
    if (!segment.startsWith("@"))
      return <span key={`${segment}-${index}`}>{segment}</span>;
    const username = segment.slice(1);

    return (
      <Link
        key={`${segment}-${index}`}
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline decoration-primary/50 underline-offset-4 transition-opacity hover:opacity-80"
      >
        {segment}
      </Link>
    );
  });
}

export default async function ChangelogPage() {
  const releases = await getChangelogReleases();

  return (
    <section className="relative isolate overflow-hidden bg-background text-foreground">
      <Script
        id="nviron-changelog-techarticle-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleJsonLd) }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_100%_0%,color-mix(in_oklab,var(--primary)_15%,transparent),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--foreground)_4%,transparent),transparent_35%)]" />

      <Container as="div" className="relative w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1040px]">
          <header className="mx-auto mb-14 max-w-[800px] text-left md:mb-20">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">
              Nviron Release Notes
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Changelog
            </h1>
            <p className="mt-4 max-w-[720px] text-base leading-relaxed text-muted-foreground">
              A clean timeline of changes shipped in nviron.
            </p>
          </header>

          <div className="relative">
            <div className="pointer-events-none absolute bottom-0 left-[200px] top-0 hidden w-px bg-border md:block" />

            <div className="space-y-16 md:space-y-20">
              {releases.map((release) => {
                const id = slugVersion(release.version);

                return (
                  <article
                    id={id}
                    key={release.version}
                    className="grid grid-cols-1 gap-y-3 md:grid-cols-[180px_40px_minmax(0,800px)] md:items-start"
                  >
                    <div className="pr-6 text-left font-mono text-xs tracking-wide text-muted-foreground md:text-right md:text-sm">
                      {formatDate(release.date)}
                    </div>

                    <div className="relative hidden h-full md:flex md:justify-center">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_16%,transparent),0_0_14px_color-mix(in_oklab,var(--primary)_40%,transparent)]" />
                    </div>

                    <div className="max-w-[800px] md:pl-10">
                      <header className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <h2 className="text-xl font-semibold text-foreground md:text-2xl">
                          v {release.version}
                        </h2>

                        {release.compareUrl ? (
                          <Link
                            href={release.compareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-primary transition-opacity hover:opacity-80"
                          >
                            Compare changes
                            <ArrowUpRight className="size-3.5" />
                          </Link>
                        ) : null}
                      </header>

                      <div className="space-y-5">
                        {release.sections.map((section) => (
                          <section key={`${release.version}-${section.title}`}>
                            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-foreground/85">
                              {section.title}
                            </h3>
                            <ul className="space-y-2 text-[15px] leading-relaxed text-muted-foreground">
                              {section.items.map((item, index) => (
                                <li
                                  key={`${release.version}-${section.title}-${index}`}
                                  className="flex gap-2"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                                  <span>{renderTextWithMentions(item)}</span>
                                </li>
                              ))}
                            </ul>
                          </section>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
