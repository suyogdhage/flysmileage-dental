"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/common/Image";
import { ArrowUpRight } from "lucide-react";
import { closingCta } from "@/content/clinic";

export const ClosingCta = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("bg-surface-alt", className)} {...props}>
        <div className="w-full px-sm sm:px-lg lg:px-4xl">
          {/* Your-Smile-Our-Care.jpg is 1783x800; hold that ratio so the subject isn't cropped. */}
          <div className="relative overflow-hidden rounded-lg aspect-[4/5] sm:aspect-[16/9] lg:aspect-[1783/800] min-h-[300px]">
            <div className="absolute inset-0" aria-hidden="true">
              <OptimizedImage
                src={closingCta.image}
                alt=""
                fill
                sizes="(max-width: 1600px) 100vw, 1600px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/30 lg:bg-gradient-to-r lg:from-ink/85 lg:via-ink/50 lg:to-ink/10" />
            </div>

            <div className="relative h-full flex items-center">
              <div className="w-full px-lg md:px-5xl py-2xl">
                <div className="max-w-[36rem]">
                  <h2 className="font-display font-heading text-heading-lg leading-heading-md text-on-primary">
                    {closingCta.headline}
                  </h2>
                  <Link
                    href="/#appointment"
                    className="mt-xl sm:mt-2xl inline-flex min-h-[44px] items-center gap-2 rounded-pill bg-ink px-[26px] sm:px-[30px] py-[12px] font-display font-heading text-button tracking-button text-on-primary transition-colors hover:bg-primary"
                  >
                    {closingCta.cta}
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ClosingCta.displayName = "ClosingCta";
