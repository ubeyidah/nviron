import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import * as motion from "motion/react-client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Type-Safe Environment",
    description:
      "Define and validate your environment variables with full Zod schema support.",
    accent: "from-red-500/30 to-pink-500/20",
  },
  {
    title: "Zero Runtime Surprises",
    description:
      "Catch invalid or missing env values at build time — not in production.",
    accent: "from-pink-500/30 to-orange-500/20",
  },
  {
    title: "Configurable & Extensible",
    description:
      "Easily extend or configure validation and defaults through simple options.",
    accent: "from-red-400/30 to-purple-500/20",
  },
  {
    title: "Seamless DX",
    description:
      "Integrates perfectly with modern frameworks and provides IDE autocompletion.",
    accent: "from-rose-500/30 to-red-400/20",
  },
];

export const Features = () => {
  return (
    <Container className="flex items-center justify-center to-transparent">
      <div></div>
    </Container>
  );
};
