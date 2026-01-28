import type { Metadata } from "next";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: {
    template: "%s | NVIRON",
    default: "NVIRON",
  },
  description:
    "Nviron is a lightweight, type-safe environment variable management library built for modern JavaScript and TypeScript projects.",
  metadataBase: new URL("https://nviron.vercel.app"),
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
  openGraph: {
    title: "NVIRON - Type-safe Environment Variables",
    description:
      "Nviron simplifies how you work with environment variables in modern JavaScript and TypeScript projects with Zod-powered validation.",
    url: "https://nviron.vercel.app",
    siteName: "NVIRON",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NVIRON",
    description:
      "Type-safe environment variable management for modern JS/TS projects.",
    creator: "@ubeyidah",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="google-site-verification" content="5jns32WyAOb-lGnTjBgP3mqp8ZvlDdWnbZMGQJxlUeo" />
      <body
        // required styles
        className="flex flex-col min-h-screen"
      >
        <RootProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
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
