import Container from "@/components/shared/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ShieldCheck,
  Zap,
  Code,
  RefreshCw,
  Lock,
  Terminal,
} from "lucide-react";
import * as motion from "motion/react-client";

const features = [
  {
    title: "Type Safety",
    description:
      "Full TypeScript support with automatic type inference from your Zod schemas.",
    icon: ShieldCheck,
  },
  {
    title: "Runtime Validation",
    description:
      "Validate environment variables at runtime to catch misconfigurations early.",
    icon: Zap,
  },
  {
    title: "Developer Experience",
    description: "Clear error messages and autocomplete support in your IDE.",
    icon: Code,
  },
  {
    title: "Hot Reloading",
    description:
      "Automatically reload configuration when environment files change during development.",
    icon: RefreshCw,
  },
  {
    title: "Secrets Management",
    description:
      "Securely handle sensitive information with built-in best practices.",
    icon: Lock,
  },
  {
    title: "CLI Integration",
    description:
      "Seamlessly integrate with your existing CLI workflows and scripts.",
    icon: Terminal,
  },
];

export const Features = () => {
  return (
    <Container className="py-24 bg-gradient">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};
