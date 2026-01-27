import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-dotted">
      <Container className="bg-gradient py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={"/logo.png"}
                alt="logo"
                height={30}
                width={30}
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-xl">Nviron</span>
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Type-safe environment configuration for modern Node.js
              applications.
            </p>
          </div>

          <div className="flex gap-6 items-center">
            <Link
              href="https://github.com/ubeyidah/nviron"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/ubeyidah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nviron. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
