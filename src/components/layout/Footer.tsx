"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { clinic, branches } from "@/content/clinic";
import { MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Our Treatments", href: "/#services" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Book Appointment", href: "/#appointment" },
];

const treatmentLinks = [
  { label: "Smile Makeover", href: "/services/smile-makeover" },
  { label: "Dental Veneers", href: "/services/dental-veneers" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Full Mouth Rehabilitation", href: "/services/full-mouth-rehabilitation" },
  { label: "Kids Dental Care", href: "/services/kids-dental-care" },
  { label: "Braces Treatment", href: "/services/braces-treatment" },
  { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
  { label: "Teeth Cleaning", href: "/services/teeth-cleaning" },
];

export const Footer = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <footer ref={ref} className={cn("bg-surface text-ink", className)} {...props}>
        <Container className="py-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <h3 className="font-display font-heading text-heading-sm mb-4">
                Advanced Dental
                <span className="text-primary"> Clinic by Dr. Garde</span>
              </h3>
              <p className="text-body text-muted mb-6">{clinic.intro}</p>
              <div className="flex flex-col gap-3">
                <a
                  href={clinic.phoneHref}
                  className="footer-link flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <span>{clinic.phone}</span>
                </a>
                <a
                  href={clinic.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <span>WhatsApp us</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display font-heading text-heading-sm mb-6">Quick Links</h3>
              <ul className="space-y-3" role="list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link inline-block hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-heading text-heading-sm mb-6">Treatments</h3>
              <ul className="space-y-3" role="list">
                {treatmentLinks.map((link) => (
                  <li key={link.label} className="footer-link inline-block text-ink">
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-heading text-heading-sm mb-6">Get In Touch!</h3>
              <ul className="space-y-5" role="list">
                {branches.map((branch) => (
                  <li key={branch.label} className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-display font-heading text-body text-ink">
                        {branch.label} — {branch.area}
                      </p>
                      <p className="text-body-sm text-muted">{branch.address}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-body-sm text-muted">
              © {new Date().getFullYear()} {clinic.name}. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-body-sm text-muted">
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms and conditions
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy policy
              </Link>
              <Link href="/#appointment" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                Book An Appointment
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    );
  }
);

Footer.displayName = "Footer";
