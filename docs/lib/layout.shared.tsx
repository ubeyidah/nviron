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
        text: "Documentation",
        url: "/docs",
        active: "nested-url",
      },
      {
        text: "Examples",
        url: "/docs/examples",
        active: "nested-url",
      },
      {
        text: "Changelog",
        url: "/changelog",
        active: "nested-url",
      },
      {
        text: "Contributors",
        url: "/contributors",
        active: "nested-url",
      },
    ],
    githubUrl: "https://github.com/ubeyidah/nviron",
  };
}
