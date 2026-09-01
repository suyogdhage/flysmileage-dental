"use client";

import { forwardRef } from "react";
import { Button } from "@/components/ui/Button";
import { OptimizedImage } from "@/components/common/Image";
import { cn } from "@/lib/utils";
import { CheckCircle, Heart, Shield, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-First Philosophy",
    description: "Every decision we make starts with what's best for you — your comfort, your health, your goals.",
  },
  {
    icon: Shield,
    title: "Clinical Excellence",
    description: "Advanced training, latest technology, and evidence-based techniques ensure the highest standard of care.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Results",
    description: "We believe dentistry is both science and art. Your smile should look natural, not 'done.'",
  },
  {
    icon: CheckCircle,
    title: "Transparent Communication",
    description: "No surprises. We explain every option, every cost, and every step — so you can decide with confidence.",
  },
];

export const AboutSection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="about"
        className={cn("bg-surface-alt", className)}
        {...props}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                alt="Dr. Sarah Mitchell consulting with a patient"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-surface-alt p-6 md:p-8 rounded-lg shadow-lg max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display font-heading text-heading-sm text-ink">Patient Satisfaction</p>
                  <p className="text-body-sm text-muted">98% recommend us</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display font-heading text-heading-sm text-ink">Google Reviews</p>
                  <p className="text-body-sm text-muted">4.9★ from 300+ reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
              <span className="badge px-3 py-1">Our Philosophy</span>
            </div>

            <h2 className="font-display font-heading text-heading-lg text-ink mb-4">
              Dentistry That Feels Different
            </h2>

            <p className="text-body-lg text-muted mb-6 leading-relaxed">
              We founded FlySmileage Dental on a simple idea: going to the dentist shouldn&apos;t feel clinical, 
              rushed, or intimidating. Our boutique practice was designed from the ground up to feel 
              welcoming, calm, and personal — because your comfort matters as much as your clinical outcome.
            </p>

            <p className="text-body text-muted mb-8 leading-relaxed">
              Every member of our team shares this vision. From the moment you walk through our door 
              to the follow-up call after your visit, you&apos;ll experience the difference that genuine care makes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <value.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-heading text-body text-ink mb-1">{value.title}</h3>
                    <p className="text-body-sm text-muted">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="primary" asChild>
              <a href="/about">Learn More About Us</a>
            </Button>
          </div>
        </div>
      </section>
    );
  }
);

AboutSection.displayName = "AboutSection";