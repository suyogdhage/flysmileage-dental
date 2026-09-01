"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { OptimizedImage } from "@/components/common/Image";
import { cn } from "@/lib/utils";
import { ChevronRight, CheckCircle, Star } from "lucide-react";

export const Hero = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const stats = [
      { value: "15+", label: "Years Experience" },
      { value: "5,000+", label: "Happy Patients" },
      { value: "98%", label: "Satisfaction Rate" },
      { value: "4.9★", label: "Google Rating" },
    ];

    return (
      <section
        ref={ref}
        id="hero"
        className={cn("relative overflow-hidden bg-surface", className)}
        {...props}
      >
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=1920&q=80"
            alt="Modern dental clinic interior with natural light"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/70 to-transparent" />
        </div>

        <div className="relative z-10 py-section lg:py-[160px]">
          <div className="max-w-4xl">
            <Badge variant="primary" className="mb-6 inline-block">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4" aria-hidden="true" />
                New Patients Welcome — Same-Week Appointments Available
              </span>
            </Badge>

            <h1 className="font-display font-heading text-hero-display leading-[1.2] text-ink mb-6 max-w-3xl">
              Gentle, Expert Dental Care<br />
              <span className="text-primary">That Makes You Smile</span>
            </h1>

            <p className="text-body-lg text-muted mb-8 max-w-2xl leading-relaxed">
              FlySmileage Dental combines clinical excellence with genuine warmth. 
              From routine cleanings to complete smile transformations, our boutique practice 
              puts your comfort and confidence first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="default" asChild>
                <Link href="/contact">Book Your Appointment</Link>
              </Button>
              <Button variant="secondary" size="default" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 text-sm">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-display font-heading text-heading-lg text-ink">{stat.value}</div>
                    <div className="text-body-sm text-muted">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <ChevronRight className="w-6 h-6 text-muted rotate-90" />
        </div>
      </section>
    );
  }
);

Hero.displayName = "Hero";