"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { OptimizedImage } from "@/components/common/Image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowRight, CircleDot, Sparkles, Stethoscope, Waypoints, HeartPulse, Activity, Baby } from "lucide-react";
import { services } from "@/content/services";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "general-dentistry": CircleDot,
  "cosmetic-dentistry": Sparkles,
  "restorative-dentistry": Stethoscope,
  "dental-implants": Stethoscope,
  "orthodontics": Waypoints,
  "periodontics": HeartPulse,
  "endodontics": Activity,
  "pediatric-dentistry": Baby,
};

export const ServicesPageContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("py-section", className)} {...props}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
            <span className="badge px-3 py-1">Our Services</span>
          </div>
          <h1 className="font-display font-heading text-hero-display text-ink mb-4">
            Comprehensive Dental Care
          </h1>
          <p className="text-body-lg text-muted">
            From routine checkups to complex reconstructions, our specialist team provides everything you need for a healthy, beautiful smile — all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug] ?? CircleDot;
            return (
            <article key={service.slug} className="group">
              <Link href={`/services/${service.slug}`} className="block">
                <Card variant="elevated" className="h-full transition-all duration-300 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                    <OptimizedImage
                      src={service.image}
                      alt={`${service.title} treatment`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <h2 className="font-display font-heading text-heading-sm text-ink">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-body text-muted mb-4 line-clamp-2">{service.shortDescription}</p>
                  <div className="flex items-center gap-2 text-button text-primary font-display font-heading">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </Card>
              </Link>
            </article>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <h2 className="font-display font-heading text-heading-lg text-ink mb-4">
            Ready to Experience the FlySmileage Difference?
          </h2>
          <p className="text-body-lg text-muted mb-8">
            Schedule your consultation today and discover why thousands of patients trust us with their smiles.
          </p>
          <Button variant="primary" size="default" asChild>
            <Link href="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </div>
    );
  }
);

ServicesPageContent.displayName = "ServicesPageContent";