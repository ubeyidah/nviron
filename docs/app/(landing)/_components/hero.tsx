"use client";

import Container from "@/components/shared/container";
import { GitHubStarsButton } from "@/components/ui/shadcn-io/github-stars-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import { ArrowRight, Check, Terminal } from "lucide-react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyInstall = async () => {
    await navigator.clipboard.writeText("npm install nviron");
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <Container
      as="section"
      className="relative flex min-h-0 w-full flex-1 items-center overflow-hidden py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.88_0.04_95/.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 border-b border-dashed border-border/70" />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/85 px-3 py-1 text-sm text-muted-foreground backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Open source npm package for runtime env safety
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.4, type: "tween" }}
          className="mb-6 text-balance text-5xl font-semibold leading-tight tracking-tight md:text-7xl"
        >
          Type-safe e
          <span
            className={`${playfair.className} bg-gradient-to-r from-red-700 via-red-600 to-red-500 bg-clip-text px-1 text-transparent dark:from-red-300 dark:via-red-200 dark:to-rose-200`}
          >
            nviron
          </span>
          ment validation for TypeScript
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.4, type: "tween", delay: 0.08 }}
          className="mx-auto mb-9 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Nviron is an open source npm package that validates env variables with
          Zod and gives you typed runtime access.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.16 }}
          className="flex flex-col items-center justify-center gap-5"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/docs/quick-start">
              <Button
                size="lg"
                className="h-12 rounded-full px-12 text-base gap-2 group"
              >
                Quick Start
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <GitHubStarsButton
              username="ubeyidah"
              repo="nviron"
              formatted
              className="h-12 rounded-full border border-border bg-background px-10 text-base text-foreground hover:bg-accent"
            />
          </div>

          <button
            type="button"
            aria-label="Copy install command"
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-3 py-2 font-mono text-sm transition-colors",
              "text-muted-foreground hover:text-foreground",
              copied && "text-foreground",
            )}
            onClick={copyInstall}
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Terminal className="h-4 w-4" />
            )}
            <span>npm install nviron</span>
          </button>
        </motion.div>
      </div>
    </Container>
  );
};
