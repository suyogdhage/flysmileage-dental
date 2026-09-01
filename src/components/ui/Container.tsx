"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg" | "xl" | "full";
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    const sizeStyles = {
      sm: "max-w-3xl",
      default: "max-w-6xl",
      lg: "max-w-7xl",
      xl: "max-w-[90rem]",
      full: "max-w-full",
    };

    return (
      <div
        ref={ref}
        className={cn("container mx-auto px-lg", sizeStyles[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";