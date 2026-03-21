import type { Metadata } from "next";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nviron.vercel.app"),
  applicationName: "Nviron",
  title: {
    template: "%s | Nviron – Type-safe Env Validation",
    default: "Nviron",
  },
  description:
    "Nviron is a lightweight, type-safe environment variable management library built for modern JavaScript and TypeScript projects.",
  keywords: [
    "environment variables",
    "typescript",
    "zod",
    "configuration",
    "validation",
    "type-safe",
    "process.env",
    "developer tools",
    "nviron",
  ],
  authors: [{ name: "Ubeyidah", url: "https://ubeyidah.tech" }],
  creator: "Ubeyidah",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nviron - Type-safe Environment Variables",
    description:
      "Nviron simplifies how you work with environment variables in modern JavaScript and TypeScript projects with Zod-powered validation.",
    url: "https://nviron.vercel.app",
    siteName: "Nviron",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Nviron",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nviron",
    description:
      "Type-safe environment variable management for modern JS/TS projects.",
    creator: "@ubeyidah",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "5jns32WyAOb-lGnTjBgP3mqp8ZvlDdWnbZMGQJxlUeo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // required styles
        className="flex flex-col min-h-screen"
      >
        <Analytics />
        <RootProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </RootProvider>
      </body>
    </html>
  );
}
