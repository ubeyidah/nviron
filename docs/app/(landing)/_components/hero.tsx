"use client";

import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import * as motion from "motion/react-client";
import { ArrowRight, Copy, Terminal } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <Container className="hero-h bg-gradient flex items-center justify-center to-transparent relative overflow-hidden">
      <div className="max-w-4xl text-center z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          v2.1.7 is now available
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, type: "tween" }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-sans"
        >
          Type-Safe{" "}
          <span className="text-primary">
            E
            <Highlighter action="underline" color="hsl(var(--primary))">
              nviron
            </Highlighter>
          </span>
          ment Config for Node.js
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, type: "tween", delay: 0.1 }}
          className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Simplify .env management with Zod-powered validation. Catch errors
          early, boost developer confidence, and ship Node.js apps faster.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/docs">
            <Button size="lg" className="h-12 px-8 text-base gap-2 group">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <div className="flex items-center gap-2 px-4 py-3 rounded-md bg-muted/50 border border-border text-sm font-mono text-muted-foreground">
            <Terminal className="w-4 h-4" />
            <span>npm install nviron</span>
            <button
              className="ml-2 hover:text-foreground transition-colors"
              onClick={() =>
                navigator.clipboard.writeText("npm install nviron")
              }
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
    </Container>
  );
};
