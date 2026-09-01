"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/common/Image";
import { clinicFeatures } from "@/content/clinic";

export const FeatureIcons = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="features"
        className={cn("bg-surface-alt py-section", className)}
        {...props}
      >
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4xl">
            {clinicFeatures.map((feature) => (
              <article key={feature.title} className="text-center max-w-[18rem] mx-auto">
                <div className="h-[52px] flex items-center justify-center mb-lg">
                  <OptimizedImage
                    src={feature.icon}
                    alt=""
                    width={52}
                    height={52}
                    objectFit="contain"
                  />
                </div>
                <h3 className="font-display font-heading text-heading-sm text-ink mb-md">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-muted">{feature.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    );
  }
);

FeatureIcons.displayName = "FeatureIcons";
