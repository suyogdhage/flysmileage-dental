"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { OptimizedImage } from "@/components/common/Image";
import { team } from "@/content/team";
import Link from "next/link";
import {
  Award,
  Check,
  GraduationCap,
  Heart,
  Shield,
  Star,
  Users,
  Sparkles,
  BadgeCheck,
  Stethoscope,
} from "lucide-react";

const stats = [
  { value: "15+", label: "Years in Practice" },
  { value: "4", label: "Specialist Dentists" },
  { value: "5,000+", label: "Patients Treated" },
  { value: "4.9★", label: "Average Rating" },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every patient like family — with empathy, patience, and genuine care for your comfort.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent pricing, honest recommendations, and no unnecessary treatments. Ever.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Continuous learning and advanced technology ensure you always receive the best possible care.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Flexible scheduling, financing options, and clear communication make dental care approachable.",
  },
];

const certifications = [
  "ADA Member",
  "AACD Accredited",
  "American Board of Periodontology Diplomate",
  "American Board of Orthodontics Diplomate",
  "Invisalign Premium & Diamond Provider",
  "Michigan Dental Association",
];

export function AboutContent() {
  return (
    <div>
      <Section variant="surface" padding="default">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
              <span className="badge px-3 py-1">About FlySmileage</span>
            </div>
            <h1 className="font-display font-heading text-hero-display text-ink mb-6">
              Where Expertise Meets <span className="text-primary">Warmth</span>
            </h1>
            <p className="text-body-lg text-muted mb-6 leading-relaxed">
              FlySmileage Dental was founded in 2009 on a simple belief: dental care should feel
              as good as it sounds. We&apos;ve grown from a single-chair practice into a
              multi-specialist destination — without ever losing the personal touch.
            </p>
            <p className="text-body text-muted mb-8 leading-relaxed">
              Our team of four specialists covers general, cosmetic, restorative, implant,
              periodontal, orthodontic, and pediatric dentistry — so you and your family can
              receive complete care in one welcoming place. Every treatment plan is built
              around <em className="font-medium">you</em>, not a template.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-surface-alt rounded-md">
                  <div className="font-display font-heading text-heading-lg text-primary">{stat.value}</div>
                  <div className="text-body-sm text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button variant="primary" asChild>
              <Link href="/contact">Meet Us in Person</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Modern, calming interior of the FlySmileage Dental clinic"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-surface-alt p-5 rounded-lg shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display font-heading text-heading-sm text-ink">AACD Accredited</p>
                <p className="text-body-sm text-muted">Fewer than 400 dentists worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="surface-alt" padding="default">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge px-3 py-1">Our Values</span>
          <h2 className="font-display font-heading text-heading-lg text-ink mt-4 mb-4">
            What We Stand For
          </h2>
          <p className="text-body-lg text-muted">
            Four principles guide every decision we make — from your first call to your final follow-up.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-surface rounded-lg p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <value.icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-display font-heading text-heading-sm text-ink mb-2">{value.title}</h3>
              <p className="text-body-sm text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="surface" padding="default" id="team">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge px-3 py-1">Meet the Team</span>
          <h2 className="font-display font-heading text-heading-lg text-ink mt-4 mb-4">
            Your Dedicated Care Team
          </h2>
          <p className="text-body-lg text-muted">
            Board-certified specialists who genuinely love what they do — and it shows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member) => (
            <article key={member.slug} className="bg-surface-alt rounded-lg overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-display font-heading text-heading-md text-ink">{member.name}</h3>
                    <p className="text-button text-primary font-display font-heading">{member.title}</p>
                  </div>
                  <div className="flex items-center gap-1 text-primary shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="text-body text-muted mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.specialties.map((specialty, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-pill bg-primary/10 text-primary text-body-sm font-medium">
                      <BadgeCheck className="w-3.5 h-3.5" aria-hidden="true" />
                      {specialty}
                    </span>
                  ))}
                </div>
                <details className="group">
                  <summary className="cursor-pointer inline-flex items-center gap-1 text-button text-primary font-display font-heading hover:underline">
                    <GraduationCap className="w-4 h-4" aria-hidden="true" />
                    View Credentials
                  </summary>
                  <div className="mt-3 space-y-3 text-body-sm text-ink">
                    <div>
                      <p className="font-display font-heading text-body mb-1">Education</p>
                      <ul className="space-y-1">
                        {member.education.map((edu, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-display font-heading text-body mb-1">Certifications</p>
                      <ul className="space-y-1">
                        {member.certifications.map((cert, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Shield className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="surface-alt" padding="default">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge px-3 py-1">Our Certifications</span>
            <h2 className="font-display font-heading text-heading-lg text-ink mt-4 mb-6">
              Committed to the Highest Standards
            </h2>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Stethoscope className="w-4 h-4 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-body text-ink">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface rounded-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-display font-heading text-heading-md text-ink mb-2">
              Join Our Dental Family
            </h3>
            <p className="text-body text-muted mb-6">
              Experience the FlySmileage difference for yourself. New patients are always welcome.
            </p>
            <Button variant="primary" asChild>
              <Link href="/contact">Book Your First Visit</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}