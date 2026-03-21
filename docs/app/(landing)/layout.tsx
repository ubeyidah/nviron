import { baseOptions } from "@/lib/layout.shared";
import { Footer } from "@/components/shared/footer";
import { BookOpen, ChevronDown, Rocket, ShieldCheck } from "lucide-react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const base = baseOptions();

  return (
    <HomeLayout
      {...base}
      className="min-h-screen"
      nav={{
        ...base.nav,
        transparentMode: "top",
      }}
      links={[
        {
          type: "custom",
          on: "nav",
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <span className="inline-flex items-center gap-1.5">
                  Guides
                  <ChevronDown className="size-3.5" />
                </span>
              </NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href="/docs/quick-start">
                  <div className="group flex max-w-72 items-start gap-3 py-1">
                    <div className="mt-0.5 rounded-md bg-primary/10 p-2 text-primary">
                      <Rocket className="size-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium leading-none">
                        Quick Start
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Install Nviron and validate env vars in minutes.
                      </p>
                    </div>
                  </div>
                </NavbarMenuLink>
                <NavbarMenuLink href="/docs/best-practices">
                  <div className="group flex max-w-72 items-start gap-3 py-1">
                    <div className="mt-0.5 rounded-md bg-primary/10 p-2 text-primary">
                      <ShieldCheck className="size-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium leading-none">
                        Best Practices
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Learn reliable patterns for secure config management.
                      </p>
                    </div>
                  </div>
                </NavbarMenuLink>
                <NavbarMenuLink href="/docs/examples">
                  <div className="group flex max-w-72 items-start gap-3 py-1">
                    <div className="mt-0.5 rounded-md bg-primary/10 p-2 text-primary">
                      <BookOpen className="size-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium leading-none">
                        Examples
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Explore practical setups for Next.js, Vite, and more.
                      </p>
                    </div>
                  </div>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        ...(base.links ?? []),
      ]}
    >
      <div
        className="flex w-full flex-col bg-background text-foreground"
        style={{ minHeight: "calc(100dvh - var(--fd-nav-height, 64px))" }}
      >
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        <Footer />
      </div>
    </HomeLayout>
  );
}
