"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { OptimizedImage } from "@/components/common/Image";
import { Section } from "@/components/ui/Section";
import { services, type Service } from "@/content/services";
import { ArrowLeft, Check, ArrowRight, Clock, DollarSign, Stethoscope } from "lucide-react";

interface ServiceDetailContentProps {
  service: Service;
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <div>
      <Section variant="surface" padding="default">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-button text-primary font-display font-heading mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to All Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-4">
              <span className="badge px-3 py-1">{service.title}</span>
            </div>
            <h1 className="font-display font-heading text-hero-display text-ink mb-6">
              {service.title}
            </h1>
            <p className="text-body-lg text-muted mb-8 leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap gap-6 mb-8 text-body-sm text-ink">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="font-medium">Duration:</span> {service.duration}
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="font-medium">Est. Range:</span> {service.priceRange}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" asChild>
                <Link href="/contact">Book This Service</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/contact">Ask a Question</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden lg:sticky lg:top-[120px]">
            <OptimizedImage
              src={service.image}
              alt={`${service.title} at FlySmileage Dental`}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section variant="surface-alt" padding="default">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
              <span className="badge px-3 py-1">What&apos;s Included</span>
            </div>
            <h2 className="font-display font-heading text-heading-lg text-ink mb-6">
              Treatments &amp; Options
            </h2>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-body text-ink">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface rounded-lg p-8">
            <h3 className="font-display font-heading text-heading-md text-ink mb-4">
              Your Visit, Made Simple
            </h3>
            <ul className="space-y-4 text-body text-ink">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-on-primary font-display font-heading">1</span>
                <div>
                  <span className="font-display font-heading text-body">Consultation</span>
                  <p className="text-body-sm text-muted">We assess your needs and explain all options — no pressure, no jargon.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-on-primary font-display font-heading">2</span>
                <div>
                  <span className="font-display font-heading text-body">Transparent Plan</span>
                  <p className="text-body-sm text-muted">A clear treatment plan with costs and timing, so you can decide with confidence.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-on-primary font-display font-heading">3</span>
                <div>
                  <span className="font-display font-heading text-body">Comfort-First Care</span>
                  <p className="text-body-sm text-muted">Gentle techniques, sedation options, and amenities designed for your ease.</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3 p-4 bg-surface-alt rounded-md">
              <Stethoscope className="w-6 h-6 text-primary" aria-hidden="true" />
              <p className="text-body-sm text-ink">
                Have questions? Our team is happy to help you find the right option.
              </p>
            </div>
            <Button variant="primary" fullWidth className="mt-4" asChild>
              <Link href="/contact">
                Schedule Your Consultation <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section variant="surface" padding="default">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge px-3 py-1">Related Services</span>
          <h2 className="font-display font-heading text-heading-lg text-ink mt-4 mb-4">
            Explore More Treatments
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services
            .filter((s) => s.slug !== service.slug)
            .slice(0, 3)
            .map((related) => (
              <Link key={related.slug} href={`/services/${related.slug}`} className="group">
                <div className="bg-surface-alt rounded-md overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <OptimizedImage
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-heading text-heading-sm text-ink mb-2">
                      {related.title}
                    </h3>
                    <p className="text-body-sm text-muted line-clamp-2 mb-3">
                      {related.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-button text-primary font-display font-heading">
                      Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </Section>
    </div>
  );
}