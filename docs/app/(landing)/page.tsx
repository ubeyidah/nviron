import { Hero } from "./_components/hero";
import type { Metadata } from "next";

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
      <Hero />
    </>
  );
};

export default Page;
