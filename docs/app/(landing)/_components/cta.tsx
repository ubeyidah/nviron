import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";

export const Cta = () => {
  return (
    <Container className="py-24 relative overflow-hidden bg-gradient">
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-75 opacity-50" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Ready to make your environment safer?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground mb-8"
        >
          Join developers who are shipping more reliable Node.js applications
          with nviron. Open source and free forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/docs">
            <Button size="lg" className="h-12 px-8 text-base gap-2 group">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="https://github.com/ubeyidah/nviron" target="_blank">
            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
              View on GitHub
            </Button>
          </Link>
        </motion.div>
      </div>
    </Container>
  );
};
