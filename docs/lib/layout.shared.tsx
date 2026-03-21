import Image from "next/image";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2 font-semibold">
          <Image
            src="/logo.png"
            alt="Nviron"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
          <span>Nviron</span>
        </span>
      ),
      url: "/",
      transparentMode: "none",
    },
    links: [
      {
        text: "Docs",
        url: "/docs",
        active: "nested-url",
      },
      {
        text: "Examples",
        url: "/docs/examples",
        active: "nested-url",
      },
      {
        text: "API",
        url: "/docs/api-reference",
      },
      {
        text: "GitHub",
        url: "https://github.com/ubeyidah/nviron",
        secondary: true,
        active: "none",
      },
    ],
    githubUrl: "https://github.com/ubeyidah/nviron",
  };
}
