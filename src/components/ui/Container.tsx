"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg" | "xl" | "full";
}

// NOTE: this project's design tokens register a --spacing-* scale whose keys
// (sm, md, lg, xl, 2xl … 6xl) shadow Tailwind's t-shirt width aliases, so
// the t-shirt aliases resolve to spacing values (60px) rather than 72rem. Widths here are
// written as explicit arbitrary values, and Tailwind's `container` class is
// deliberately not used (it also collides with the `.container` rule in
// globals.css).
const sizeStyles = {
  sm: "max-w-[48rem]",
  default: "max-w-[1280px]",
  lg: "max-w-[1440px]",
  xl: "max-w-[1600px]",
  full: "max-w-full",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full mx-auto px-lg", sizeStyles[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
