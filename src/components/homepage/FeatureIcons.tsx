"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Shield, Heart, Sparkles, Award, Users, Clock, Truck, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Technology",
    description: "3D imaging, digital impressions, and laser dentistry for precise, comfortable care.",
  },
  {
    icon: Heart,
    title: "Gentle Approach",
    description: "Sedation options, comfort amenities, and a team that truly listens to your concerns.",
  },
  {
    icon: Sparkles,
    title: "Artistic Results",
    description: "Smile design expertise with an eye for natural aesthetics and facial harmony.",
  },
  {
    icon: Award,
    title: "Top-Rated Care",
    description: "Consistently 4.9★ reviews from patients who trust us with their smiles.",
  },
  {
    icon: Users,
    title: "Specialist Team",
    description: "Multiple specialists in-house — no referrals needed for complex treatments.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Early morning, evening, and Saturday appointments to fit your life.",
  },
  {
    icon: Truck,
    title: "Insurance Friendly",
    description: "We work with most PPO plans and offer flexible financing options.",
  },
  {
    icon: Lock,
    title: "Privacy & Safety",
    description: "HIPAA-compliant, strict sterilization protocols, and modern air filtration.",
  },
];

export const FeatureIcons = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="features"
        className={cn("bg-surface", className)}
        {...props}
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
            <span className="badge px-3 py-1">Why Choose Us</span>
          </div>
          <h2 className="font-display font-heading text-heading-lg text-ink mb-4">
            The FlySmileage Difference
          </h2>
          <p className="text-body-lg text-muted">
            Eight reasons patients choose us for their lifelong dental home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <article key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-on-primary transition-colors duration-300" aria-hidden="true" />
              </div>
              <h3 className="font-display font-heading text-heading-sm text-ink mb-2">
                {feature.title}
              </h3>
              <p className="text-body-sm text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
);

FeatureIcons.displayName = "FeatureIcons";