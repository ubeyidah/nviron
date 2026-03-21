import Container from "@/components/shared/container";
import { getNvironContributors } from "@/lib/github";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contributors",
  description:
    "Meet the open-source contributors who build and maintain nviron. Created by Ubeyidah and improved by the community.",
  alternates: {
    canonical: "/contributors",
  },
  openGraph: {
    title: "Nviron Contributors",
    description:
      "Open-source contributors behind nviron, led by Ubeyidah and the community.",
    url: "https://nviron.vercel.app/contributors",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nviron Contributors",
    description: "People contributing to the open-source nviron project.",
  },
};

const contributorsPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Nviron Contributors",
  url: "https://nviron.vercel.app/contributors",
  description:
    "Meet the open-source contributors who build and maintain nviron.",
  about: {
    "@type": "SoftwareApplication",
    name: "Nviron",
    url: "https://nviron.vercel.app",
    codeRepository: "https://github.com/ubeyidah/nviron",
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
    contributor: {
      "@type": "Organization",
      name: "Nviron Contributors",
      url: "https://github.com/ubeyidah/nviron/graphs/contributors",
    },
  },
};

export default async function ContributorsPage() {
  const contributors = await getNvironContributors();

  return (
    <section className="relative bg-background text-foreground">
      <Script
        id="nviron-contributors-webpage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contributorsPageJsonLd),
        }}
      />

      <Container as="div" className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <header className="mb-10 md:mb-14">
            <p className="text-xs uppercase tracking-[0.24em] text-primary">
              Open Source
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Contributors
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Nviron is an open-source project maintained by the community.
            </p>
          </header>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contributors.map((contributor) => (
              <Link
                key={contributor.id}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/20"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <Image
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full ring-1 ring-border/70"
                  />
                  <div>
                    <p className="font-medium text-foreground transition-colors group-hover:text-primary">
                      @{contributor.login}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {contributor.contributions} contributions
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
