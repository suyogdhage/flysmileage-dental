"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { OptimizedImage } from "@/components/common/Image";
import { clinic, stats, promises, whyChooseUs, branches } from "@/content/clinic";
import Link from "next/link";
import {
  Award,
  MapPin,
  CheckCircle,
} from "lucide-react";

export function AboutContent() {
  return (
    <div>
      <Section variant="surface" padding="default">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
              <span className="badge">About Us</span>
            </div>
            <h1 className="font-display font-heading text-hero-display text-ink mb-6">
              Best Dental Clinic in <span className="text-primary">Salisbury Park</span>
            </h1>
            <p className="text-body-lg text-muted mb-6 leading-relaxed">{clinic.intro}</p>
            <p className="font-display font-heading text-heading-sm text-ink mb-8">
              {clinic.tagline}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-surface-alt rounded-md">
                  <div className="font-body text-stat-display-sm leading-stat-display-sm text-primary">{stat.value}</div>
                  <div className="text-body-sm text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" asChild>
                <Link href="/contact">Book An Appointment</Link>
              </Button>
              <Button variant="secondary" asChild>
                <a href={clinic.phoneHref}>Call {clinic.phone}</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <OptimizedImage
                src="/images/flysmileage/about-clinic.jpg"
                alt="Inside Fly Dental Clinic, Salisbury Park"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-surface-alt p-5 rounded-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display font-heading text-heading-sm text-ink">100% Patients</p>
                <p className="text-body-sm text-muted">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="surface-alt" padding="default">
        <div className="text-center max-w-[42rem] mx-auto mb-12">
          <span className="badge">Our Promise</span>
          <h2 className="font-display font-heading text-heading-lg text-ink mt-4 mb-4">
            Your Destination for Advanced Dental Care
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((promise) => (
            <div key={promise} className="bg-surface rounded-lg p-6 flex gap-3">
              <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-body text-ink">{promise}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="surface-alt" padding="default">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge">Why Choose Us</span>
            <h2 className="font-display font-heading text-heading-lg text-ink mt-4 mb-6">
              More Than Just Dental Care
            </h2>
            <p className="text-body-lg text-muted mb-8 leading-relaxed">{whyChooseUs.intro}</p>
            <ul className="space-y-5">
              {whyChooseUs.points.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-display font-heading text-heading-sm text-ink mb-1">{point.title}</h3>
                    <p className="text-body text-muted">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface rounded-lg p-8">
            <h3 className="font-display font-heading text-heading-md text-ink mb-6">Our Clinics</h3>
            <ul className="space-y-6">
              {branches.map((branch) => (
                <li key={branch.label} className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-display font-heading text-body text-ink">
                      {branch.label} — {branch.area}
                    </p>
                    <p className="text-body-sm text-muted">{branch.address}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button variant="primary" fullWidth className="mt-8" asChild>
              <Link href="/contact">Book An Appointment</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
