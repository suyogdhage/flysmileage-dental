"use client";

import Image from "next/image";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  width?: number;
  height?: number;
}

export const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    {
      src,
      alt,
      fill = false,
      priority = false,
      sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      className,
      rounded = "none",
      objectFit = "cover",
      width,
      height,
    },
    ref
  ) => {
    const roundedStyles = {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    };

    const objectFitStyles = {
      cover: "object-cover",
      contain: "object-contain",
      fill: "object-fill",
      none: "object-none",
      "scale-down": "object-scale-down",
    };

    const commonProps = {
      ref,
      src,
      alt,
      priority,
      sizes,
      className: cn(objectFitStyles[objectFit], className),
      quality: 85 as const,
    };

    if (fill) {
      // The wrapper must carry a definite size: its only child is absolutely
      // positioned, so a height:auto wrapper collapses and the image vanishes.
      // Callers give `fill` images a parent with a definite height (aspect-*,
      // min-h-*, or inset-0), which h-full then inherits.
      return (
        <div className={cn("relative w-full h-full overflow-hidden", roundedStyles[rounded])}>
          <Image {...commonProps} alt={alt} fill />
        </div>
      );
    }

    return <Image {...commonProps} alt={alt} width={width ?? 1200} height={height ?? 800} className={cn(roundedStyles[rounded], objectFitStyles[objectFit], className)} />;
  }
);

OptimizedImage.displayName = "OptimizedImage";