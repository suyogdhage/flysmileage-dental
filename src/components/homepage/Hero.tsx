"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { OptimizedImage } from "@/components/common/Image";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { clinic, heroSlides } from "@/content/clinic";

const ROTATE_MS = 6000;

export const Hero = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const [active, setActive] = useState(0);

    const go = useCallback((index: number) => {
      setActive(((index % heroSlides.length) + heroSlides.length) % heroSlides.length);
    }, []);

    useEffect(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const id = window.setInterval(() => {
        setActive((current) => (current + 1) % heroSlides.length);
      }, ROTATE_MS);
      return () => window.clearInterval(id);
    }, []);

    return (
      <section
        ref={ref}
        id="hero"
        aria-roledescription="carousel"
        aria-label={`${clinic.name} treatments`}
        className={cn("bg-surface-alt px-sm sm:px-lg lg:px-4xl pt-sm sm:pt-lg pb-sm sm:pb-lg", className)}
        {...props}
      >
        <div className="relative overflow-hidden rounded-lg min-h-[440px] sm:min-h-[520px] lg:min-h-[680px]">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-out",
                index === active ? "opacity-100" : "opacity-0"
              )}
              aria-hidden={index !== active}
            >
              <OptimizedImage
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}

          <div
            className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/65 to-ink/40 lg:bg-gradient-to-r lg:from-ink/85 lg:via-ink/45 lg:to-transparent"
            aria-hidden="true"
          />

          <div className="relative min-h-[440px] sm:min-h-[520px] lg:min-h-[680px] flex items-center py-4xl">
            <div className="w-full mx-auto max-w-[1280px] px-lg sm:px-xl lg:px-[60px]">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.title}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${heroSlides.length}`}
                  className={cn("max-w-[42rem]", index === active ? "block" : "hidden")}
                >
                  <span className="inline-flex items-center rounded-pill border border-on-primary/70 px-base py-[6px] text-[12px] sm:text-button-sm font-display font-heading uppercase tracking-button text-on-primary">
                    {slide.eyebrow}
                  </span>

                  <h1 className="mt-lg sm:mt-2xl font-display text-hero-display leading-hero-display text-on-primary">
                    <span className="block font-heading">{slide.title}</span>
                    <span className="block font-normal">{slide.highlight}</span>
                  </h1>

                  <Link
                    href={slide.href}
                    className="mt-xl sm:mt-2xl inline-flex min-h-[44px] items-center gap-2 rounded-pill bg-surface-alt px-[26px] py-[12px] font-display font-heading text-button tracking-button text-ink transition-colors hover:bg-primary hover:text-on-primary"
                  >
                    Read More
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-base sm:bottom-[30px] left-1/2 -translate-x-1/2 flex items-center gap-sm sm:gap-md">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => go(index)}
                aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
                aria-current={index === active}
                className="group flex h-11 items-center px-1"
              >
                {/* Bar is the visual; the button around it is the 44px tap target. */}
                <span
                  className={cn(
                    "block h-[10px] rounded-full transition-all duration-300",
                    index === active
                      ? "w-[30px] bg-primary"
                      : "w-[10px] bg-on-primary/70 group-hover:bg-on-primary"
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

Hero.displayName = "Hero";
