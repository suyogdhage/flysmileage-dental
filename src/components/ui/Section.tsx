"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "surface" | "surface-alt";
  padding?: "none" | "default" | "lg" | "xl";
  containerSize?: "sm" | "default" | "lg" | "xl" | "full";
  noContainer?: boolean;
  id?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      variant = "default",
      padding = "default",
      containerSize = "default",
      noContainer = false,
      id,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: "",
      surface: "bg-surface",
      "surface-alt": "bg-surface-alt",
    };

    const paddingStyles = {
      none: "",
      default: "py-section",
      lg: "py-[160px]",
      xl: "py-[200px]",
    };

    const sectionContent = (
      <div className={cn(variantStyles[variant], paddingStyles[padding])}>
        {noContainer ? (
          <div className="w-full px-lg">{children}</div>
        ) : (
          <Container size={containerSize}>{children}</Container>
        )}
      </div>
    );

    return (
      <section
        ref={ref}
        id={id}
        className={cn("relative", className)}
        {...props}
      >
        {sectionContent}
      </section>
    );
  }
);

Section.displayName = "Section";