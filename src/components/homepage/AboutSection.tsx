"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { OptimizedImage } from "@/components/common/Image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { ArrowUpRight, BadgeCheck, MessageSquareMore } from "lucide-react";
import { clinic, promises } from "@/content/clinic";

export const AboutSection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const [lead, ...checklist] = promises;

    return (
      <section
        ref={ref}
        id="about"
        className={cn("relative bg-surface-alt py-section overflow-hidden", className)}
        {...props}
      >
        <div
          className="pointer-events-none absolute left-0 top-1/4 hidden xl:block w-[190px] opacity-90"
          aria-hidden="true"
        >
          <OptimizedImage
            src="/images/flysmileage/Dental-clinic-element.png"
            alt=""
            width={190}
            height={190}
            objectFit="contain"
          />
        </div>

        <Container>
          <div className="grid lg:grid-cols-2 gap-2xl md:gap-4xl lg:gap-6xl items-start">
            <div>
              <span className="badge">About Us</span>

              <h2 className="mt-base font-display font-heading text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] text-ink">
                Best Dental Clinic in
                {/* The line break is a desktop typesetting choice; on a phone the
                    heading should wrap naturally instead. */}
                <br className="hidden sm:block" />{" "}
                Pune
              </h2>

              <p className="mt-md font-display font-heading text-heading-sm text-ink">
                {clinic.tagline}
              </p>

              <div className="mt-2xl sm:mt-4xl flex flex-wrap items-center gap-lg sm:gap-2xl">
                <a href={clinic.phoneHref} className="flex items-center gap-md group">
                  <span className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full border border-primary/40 flex items-center justify-center shrink-0">
                    <MessageSquareMore className="w-6 h-6 text-primary" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-body-sm text-muted uppercase tracking-button">
                      Call Us Now
                    </span>
                    <span className="font-display font-heading text-heading-sm text-ink group-hover:text-primary transition-colors">
                      {clinic.phone}
                    </span>
                  </span>
                </a>

                <Link
                  href="/#why-choose-us"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-pill border border-primary px-[26px] sm:px-[30px] py-[12px] font-display font-heading text-button tracking-button text-primary transition-colors hover:bg-primary hover:text-on-primary"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div>
              <p className="font-display font-heading text-body-lg leading-body-lg text-ink">
                {clinic.intro}
              </p>

              <p className="mt-lg text-body-sm text-muted">{lead}</p>

              <ul className="mt-xl sm:mt-2xl grid sm:grid-cols-2 gap-x-2xl gap-y-base sm:gap-y-lg" role="list">
                {checklist.map((promise) => (
                  <li key={promise} className="flex gap-md">
                    <BadgeCheck
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="font-display font-heading text-body-sm leading-body text-ink">
                      {promise}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    );
  }
);

AboutSection.displayName = "AboutSection";
