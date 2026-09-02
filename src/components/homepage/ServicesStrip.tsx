"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { OptimizedImage } from "@/components/common/Image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";

const homepageServices = services.slice(0, 6);

export const ServicesStrip = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="services"
        className={cn("bg-surface-alt pb-section", className)}
        {...props}
      >
        <Container>
          <div className="grid md:grid-cols-2 gap-lg sm:gap-2xl">
            {homepageServices.map((service) => (
              <article
                key={service.slug}
                className="grid grid-cols-1 sm:grid-cols-[40%_1fr] rounded-md overflow-hidden sm:min-h-[215px]"
              >
                <div className="relative h-[190px] sm:h-auto">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 40vw, 20vw"
                    className="object-cover"
                  />
                </div>

                <div className="bg-surface px-lg sm:px-xl py-lg flex flex-col">
                  <span className="icon-badge w-11 h-11 sm:w-[50px] sm:h-[50px] shrink-0">
                    <OptimizedImage
                      src={service.iconImage}
                      alt=""
                      width={26}
                      height={26}
                      objectFit="contain"
                      className="brightness-0 invert"
                    />
                  </span>

                  <h3 className="mt-base sm:mt-xl font-display font-heading text-heading-sm text-ink pb-md border-b border-muted/25">
                    {service.title}
                  </h3>

                  <p className="mt-base text-body-sm text-muted">{service.shortDescription}</p>

                  <Link
                    href="/#appointment"
                    className="mt-sm inline-flex min-h-[44px] items-center gap-1.5 self-start font-display font-heading text-body-sm text-ink transition-colors hover:text-primary"
                  >
                    Read More
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    );
  }
);

ServicesStrip.displayName = "ServicesStrip";
