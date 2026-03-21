import Script from "next/script";
import { Hero } from "./_components/hero";
import type { Metadata } from "next";

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nviron",
  applicationCategory: "DeveloperApplication",
  applicationSubCategory: "Environment Variable Validation Library",
  operatingSystem: "Cross-platform",
  softwareHelp: "https://nviron.vercel.app/docs",
  url: "https://nviron.vercel.app",
  downloadUrl: "https://www.npmjs.com/package/nviron",
  codeRepository: "https://github.com/ubeyidah/nviron",
  license: "https://github.com/ubeyidah/nviron/blob/main/LICENSE",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
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
  contributor: {
    "@type": "Organization",
    name: "Nviron Contributors",
    url: "https://github.com/ubeyidah/nviron/graphs/contributors",
  },
  description:
    "Nviron is an open source npm package for Zod-powered, type-safe environment validation in TypeScript and Node.js projects.",
};

export const metadata: Metadata = {
  title: "Nviron - Type-safe Environment Validation for TypeScript",
  description:
    "Nviron is an open source npm package for Zod-powered, type-safe environment validation in TypeScript and Node.js projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nviron - Type-safe Environment Validation for TypeScript",
    description:
      "Open source npm package for Zod-powered environment validation with typed runtime access.",
    url: "https://nviron.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nviron - Type-safe Environment Validation for TypeScript",
    description:
      "Open source npm package for type-safe environment validation with Zod.",
  },
};

const Page = () => {
  return (
    <>
      <Script
        id="nviron-softwareapplication-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd),
        }}
      />
      <Hero />
    </>
  );
};

export default Page;
