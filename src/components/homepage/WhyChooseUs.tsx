"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/common/Image";
import { whyChooseUs } from "@/content/clinic";

export const WhyChooseUs = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="why-choose-us"
        className={cn("bg-surface-alt pb-section", className)}
        {...props}
      >
        <Container>
          <div className="text-center max-w-[56rem] mx-auto mb-4xl">
            <span className="badge">Why</span>
            <h2 className="mt-base font-display font-heading text-[40px] leading-[1.15] text-ink">
              Choose Us
            </h2>
            <p className="mt-lg text-body-sm text-muted">{whyChooseUs.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl">
            {whyChooseUs.points.map((point) => (
              <article
                key={point.title}
                className="rounded-lg border border-muted/20 p-2xl bg-surface-alt"
              >
                <div className="flex items-center gap-base pb-lg border-b border-muted/20">
                  <span className="w-[52px] h-[52px] rounded-full bg-tertiary flex items-center justify-center shrink-0">
                    <OptimizedImage
                      src={point.icon}
                      alt=""
                      width={26}
                      height={26}
                      objectFit="contain"
                      className="brightness-0 invert"
                    />
                  </span>
                  <h3 className="font-display font-heading text-heading-sm text-ink">
                    {point.title}
                  </h3>
                </div>
                <p className="mt-lg text-body-sm text-muted">{point.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    );
  }
);

WhyChooseUs.displayName = "WhyChooseUs";
