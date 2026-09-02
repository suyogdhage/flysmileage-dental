"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Quote, Star } from "lucide-react";
import { testimonials, closingCta } from "@/content/clinic";

export const Testimonials = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section ref={ref} id="reviews" className={cn("bg-surface py-section", className)} {...props}>
        <Container>
          <div className="text-center max-w-[42rem] mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <span className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
              <span className="badge">Testimonials</span>
            </div>
            <h2 className="font-display font-heading text-heading-lg text-ink mb-4">
              What Our Patients Say!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="bg-surface-alt rounded-lg p-5 md:p-6 flex flex-col h-full"
              >
                <Quote className="w-7 h-7 md:w-8 md:h-8 text-primary/40 mb-3 md:mb-4" aria-hidden="true" />
                <blockquote className="text-body text-ink flex-1">{testimonial.quote}</blockquote>
                <figcaption className="mt-5 md:mt-6 pt-4 border-t border-muted/20">
                  <p className="font-display font-heading text-heading-sm text-ink">{testimonial.name}</p>
                  <div className="flex gap-0.5 mt-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 md:mt-16 bg-surface-alt rounded-lg p-6 sm:p-8 md:p-12 text-center">
            <h2 className="font-display font-heading text-heading-lg text-ink mb-5 md:mb-6 max-w-[42rem] mx-auto">
              {closingCta.headline}
            </h2>
            <Button variant="primary" asChild>
              <Link href="/#appointment">{closingCta.cta}</Link>
            </Button>
          </div>
      </Container>
      </section>
    );
  }
);

Testimonials.displayName = "Testimonials";
