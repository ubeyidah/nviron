import { cn } from "@/lib/utils";
import React, { JSX } from "react";

interface iApp {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}
const Container = ({ children, className, as: Component = "div" }: iApp) => {
  return (
    <Component
      className={cn(
        "max-w-6xl mx-auto px-2 md:px-3 border-dotted border-l border-r",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
