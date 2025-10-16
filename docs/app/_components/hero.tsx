import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import * as motion from "motion/react-client";

export const Hero = () => {
  return (
    <Container className="hero-h bg-gradient flex items-center justify-center to-transparent">
      <div className="max-w-3xl text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, type: "tween" }}
          className="text-5xl font-bold mb-5 leading-14 font-sans"
        >
          Type-Safe E<Highlighter action="underline">nviron</Highlighter>
          ment Config for Modern Node.js Apps
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, type: "tween", delay: 0.3 }}
          className="mb-8"
        >
          Simplify .env management with Zod-powered validation. Catch errors
          early, boost developer confidence, and ship Node.js apps faster.
        </motion.p>
        <Button>Get Started</Button>
      </div>
    </Container>
  );
};
