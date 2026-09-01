"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { OptimizedImage } from "@/components/common/Image";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { heroSlides } from "@/content/clinic";

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
        aria-label="Fly Dental treatments"
        className={cn("bg-surface-alt px-lg lg:px-4xl pt-lg pb-lg", className)}
        {...props}
      >
        <div className="relative overflow-hidden rounded-lg min-h-[520px] lg:min-h-[680px]">
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
            className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent"
            aria-hidden="true"
          />

          <div className="relative min-h-[520px] lg:min-h-[680px] flex items-center">
            <div className="w-full mx-auto max-w-[1280px] px-lg lg:px-[60px]">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.title}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${heroSlides.length}`}
                  className={cn("max-w-[42rem]", index === active ? "block" : "hidden")}
                >
                  <span className="inline-flex items-center rounded-pill border border-on-primary/70 px-[18px] py-[7px] text-button-sm font-display font-heading uppercase tracking-button text-on-primary">
                    {slide.eyebrow}
                  </span>

                  <h1 className="mt-2xl font-display text-hero-display leading-hero-display text-on-primary">
                    <span className="block font-heading">{slide.title}</span>
                    <span className="block font-normal">{slide.highlight}</span>
                  </h1>

                  <Link
                    href={slide.href}
                    className="mt-2xl inline-flex items-center gap-2 rounded-pill bg-surface-alt px-[30px] py-[12px] font-display font-heading text-button tracking-button text-ink transition-colors hover:bg-primary hover:text-on-primary"
                  >
                    Read More
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 flex items-center gap-md">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => go(index)}
                aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
                aria-current={index === active}
                className={cn(
                  "h-[10px] rounded-full transition-all duration-300",
                  index === active
                    ? "w-[30px] bg-primary"
                    : "w-[10px] bg-on-primary/70 hover:bg-on-primary"
                )}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
);

Hero.displayName = "Hero";
