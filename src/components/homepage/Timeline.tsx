"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Calendar, CircleDot, Sparkles, Award, Users, Building2 } from "lucide-react";

const timelineItems = [
  {
    year: "2009",
    title: "Founded",
    description: "Dr. Sarah Mitchell opens FlySmileage Dental with a vision for patient-first care in a boutique setting.",
    icon: Building2,
    side: "left",
  },
  {
    year: "2012",
    title: "Digital Transformation",
    description: "First practice in the region to adopt full digital workflows — CAD/CAM crowns, 3D imaging, and paperless records.",
    icon: CircleDot,
    side: "right",
  },
  {
    year: "2016",
    title: "Specialist Expansion",
    description: "Dr. James Chen (implants) and Dr. Emily Rodriguez (periodontics) join, bringing advanced surgical care in-house.",
    icon: Users,
    side: "left",
  },
  {
    year: "2019",
    title: "Cosmetic Excellence",
    description: "Dr. Mitchell achieves AACD Accreditation — one of fewer than 400 dentists worldwide with this distinction.",
    icon: Award,
    side: "right",
  },
  {
    year: "2022",
    title: "Orthodontics Added",
    description: "Dr. Michael Okonkwo joins, completing our comprehensive specialist team with Invisalign Diamond Provider status.",
    icon: Sparkles,
    side: "left",
  },
  {
    year: "2024",
    title: "New Facility",
    description: "Moved to our custom-designed Springfield location with 8 operatories, in-house lab, and dedicated surgical suite.",
    icon: Calendar,
    side: "right",
  },
];

export const Timeline = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="timeline"
        className={cn("bg-surface-alt", className)}
        {...props}
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
            <span className="badge px-3 py-1">Our Journey</span>
          </div>
          <h2 className="font-display font-heading text-heading-lg text-ink mb-4">
            15+ Years of Trusted Care
          </h2>
          <p className="text-body-lg text-muted">
            From a single-chair practice to a multi-specialist destination — our commitment to you hasn&apos;t changed.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden lg:block" aria-hidden="true" />

          <div className="space-y-12 lg:space-y-16">
            {timelineItems.map((item, index) => (
              <article key={index} className={cn("relative", item.side === "right" && "lg:pl-[55%] lg:pr-0", item.side === "left" && "lg:pr-[55%] lg:pl-0")}>
                <div className="relative lg:absolute lg:top-0 lg:left-1/2 lg:w-12 lg:h-12 lg:-translate-x-1/2 lg:-translate-y-1/2 flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <item.icon className="w-6 h-6 text-on-primary" aria-hidden="true" />
                  </div>
                </div>

                <div className={cn("bg-surface rounded-lg p-6 md:p-8 relative", "lg:w-[45%]")}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-display font-heading text-button text-primary">{item.year}</span>
                    <span className="w-8 h-px bg-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-heading text-heading-sm text-ink mb-2">{item.title}</h3>
                  <p className="text-body text-muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

Timeline.displayName = "Timeline";