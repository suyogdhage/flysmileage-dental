"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import {
  Globe,
  Camera,
  Share2,
  ArrowRight,
} from "lucide-react";

const footerColumns = [
  {
    title: "FlySmileage Dental",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "General Dentistry", href: "/services/general-dentistry" },
      { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
      { label: "Dental Implants", href: "/services/dental-implants" },
      { label: "Orthodontics", href: "/services/orthodontics" },
      { label: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
    ],
  },
  {
    title: "Patient Resources",
    links: [
      { label: "New Patient Forms", href: "/contact#forms" },
      { label: "Insurance & Financing", href: "/contact#insurance" },
      { label: "FAQ", href: "/contact#faq" },
      { label: "Emergency Care", href: "/contact#emergency" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "123 Smile Street, Suite 100", href: "#" },
      { label: "Springfield, IL 62701", href: "#" },
      { label: "(555) 123-4567", href: "tel:5551234567" },
      { label: "hello@flysmileage.com", href: "mailto:hello@flysmileage.com" },
    ],
  },
];

const socialLinks = [
  { icon: Globe, href: "https://facebook.com/flysmileage", label: "Facebook" },
  { icon: Camera, href: "https://instagram.com/flysmileage", label: "Instagram" },
  { icon: Share2, href: "https://twitter.com/flysmileage", label: "Twitter" },
];

const hours = [
  { day: "Monday – Thursday", time: "8:00 AM – 5:00 PM" },
  { day: "Friday", time: "8:00 AM – 2:00 PM" },
  { day: "Saturday", time: "By Appointment Only" },
  { day: "Sunday", time: "Closed" },
];

export const Footer = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn("bg-surface text-ink", className)}
        {...props}
      >
        <Container className="py-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {footerColumns.map((column, index) => (
              <div key={index}>
                <h3 className="font-display font-heading text-heading-sm mb-6">
                  {column.title}
                </h3>
                <ul className="space-y-3" role="list">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="footer-link inline-block transition-colors hover:translate-x-1"
                      >
                        {link.label}
                        {link.href.startsWith("http") || link.href.startsWith("tel:") || link.href.startsWith("mailto:") ? (
                          <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-muted/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-display font-heading text-heading-sm mb-4">Hours</h3>
                <dl className="space-y-2">
                  {hours.map((hour, index) => (
                    <div key={index} className="flex justify-between gap-4">
                      <dt className="text-body text-muted">{hour.day}</dt>
                      <dd className="text-body font-medium text-ink text-right">{hour.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h3 className="font-display font-heading text-heading-sm mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="footer-link p-2 rounded-full bg-surface-alt hover:bg-primary hover:text-on-primary transition-colors"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-heading text-heading-sm mb-4">Newsletter</h3>
                <p className="text-body text-muted mb-4">Tips for a healthier smile, delivered monthly.</p>
                <form className="flex gap-2" action="/newsletter" method="POST">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-md bg-surface-alt border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary text-ink placeholder-muted"
                    required
                  />
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-body-sm text-muted">
              © {new Date().getFullYear()} FlySmileage Dental. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-body-sm text-muted">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
            </div>
          </div>
        </Container>
      </footer>
    );
  }
);

Footer.displayName = "Footer";