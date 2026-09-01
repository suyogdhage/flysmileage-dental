"use client";

import { forwardRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { clinic } from "@/content/clinic";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Treatments" },
  { href: "/blog", label: "Blog" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/contact", label: "Contact Us" },
];

const contactInfo = [
  { icon: Phone, text: clinic.phone, href: clinic.phoneHref },
  { icon: Mail, text: clinic.email, href: clinic.emailHref },
];

// lucide-react no longer ships brand marks, so these are inline paths.
const socialPaths: Record<string, string> = {
  Facebook:
    "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z",
  Instagram:
    "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6zm6.9-11.1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z",
  YouTube:
    "M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z",
};

export const Header = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <header ref={ref} className={cn("relative z-50 bg-surface-alt", className)} {...props}>
        <div className="bg-surface">
          <div className="w-full px-lg lg:px-4xl">
            <div className="flex flex-wrap items-center justify-between gap-x-2xl gap-y-sm py-md">
              <div className="flex items-center gap-xl text-body-sm text-ink">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                  {clinic.primaryLocation}
                </span>
                <a
                  href={clinic.emailHref}
                  className="hidden sm:inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                  {clinic.email}
                </a>
              </div>
              <div className="flex items-center gap-base">
                {clinic.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-ink hover:text-primary transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d={socialPaths[social.label]} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-lg lg:px-4xl">
          <div className="flex items-center justify-between h-[100px] gap-4xl">
            <Link href="/" className="flex flex-col leading-none shrink-0" aria-label="Fly Dental Clinic Home">
              <span className="font-display font-heading text-heading-lg text-ink">
                FLY<span className="text-primary">.</span>
              </span>
              <span className="text-body-sm text-muted italic">The new smileage</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-xl xl:gap-2xl mx-auto" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link uppercase tracking-button">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-xl shrink-0">
              <a href={clinic.phoneHref} className="flex items-center gap-md group whitespace-nowrap">
                <span className="icon-badge w-12 h-12 shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-body-sm text-muted uppercase tracking-button">Call Us Now</span>
                  <span className="font-display font-heading text-body-lg text-ink group-hover:text-primary transition-colors">
                    {clinic.phone}
                  </span>
                </span>
              </a>
              <Button variant="primary" asChild>
                <Link href="/contact">Book An Appointment</Link>
              </Button>
            </div>

            <button
              className="lg:hidden p-2 rounded-md text-ink hover:bg-surface transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface-alt border-t border-muted/20",
            isMobileMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="w-full px-lg lg:px-4xl py-2xl">
            <nav className="flex flex-col gap-base" aria-label="Mobile main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link uppercase tracking-button py-2 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-2xl flex flex-col gap-md">
              {contactInfo.map((item) => (
                <a key={item.href} href={item.href} className="nav-link flex items-center gap-3 py-2">
                  <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span>{item.text}</span>
                </a>
              ))}
              <Button variant="primary" fullWidth className="mt-sm" asChild>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book An Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }
);

Header.displayName = "Header";
