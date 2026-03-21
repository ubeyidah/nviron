import Container from "./container";
import Link from "next/link";
import { Dot } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/70">
      <Container className="py-4">
        <div className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground md:justify-between">
          <span>© {new Date().getFullYear()} Nviron</span>

          <div className="flex flex-wrap items-center justify-center">
            <Dot className="size-4" />
            <span>Built by</span>{" "}
            <Link
              href="https://ubeyidah.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Ubeyidah
            </Link>
            <Dot className="size-4" />
            <Link
              href="/contributors"
              className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Contributors
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
