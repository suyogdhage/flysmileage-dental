"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "icon" | "primary";
  size?: "default" | "sm" | "lg";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center font-display font-heading";

    const variantStyles = {
      default: "badge",
      icon: "icon-badge",
      primary: "bg-primary text-on-primary rounded-full",
    };

    const sizeStyles = {
      default: "px-3 py-1 text-button-sm",
      sm: "px-2 py-0.5 text-[12px]",
      lg: "px-4 py-1.5 text-button",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";