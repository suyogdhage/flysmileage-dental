"use client";

import { forwardRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { clinic } from "@/content/clinic";

const navLinks = [
  { href: "/", label: "" },
];

const contactInfo = [
  { icon: Phone, text: clinic.phone, href: clinic.phoneHref },
];

export const Header = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <header ref={ref} className={cn("relative z-50 bg-surface-alt", className)} {...props}>
        <div className="bg-surface">
          <div className="w-full px-lg lg:px-4xl">
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-2xl gap-y-sm py-sm lg:py-md">
              <div className="flex items-center gap-sm lg:gap-xl text-[12.5px] sm:text-body-sm leading-[1.45] lg:leading-body-sm text-ink text-center lg:text-left">
                <span className="block">
                  <MapPin
                    className="inline-block w-4 h-4 mr-1.5 align-[-3px] text-primary"
                    aria-hidden="true"
                  />
                  {clinic.primaryLocation}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-lg lg:px-4xl">
          <div className="flex items-center justify-between h-[72px] lg:h-[100px] gap-base lg:gap-4xl">
            <Link href="/" className="flex flex-col leading-none min-w-0" aria-label="Advanced Dental Clinic by Dr. Garde Home">
              <span className="font-display font-heading text-[19px] sm:text-[22px] lg:text-heading-lg text-ink">
                Advanced Dental<span className="text-primary">.</span>
              </span>
              <span className="text-[12px] sm:text-body-sm text-muted italic">Clinic by Dr. Garde</span>
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
                <Link href="/#appointment">Book An Appointment</Link>
              </Button>
            </div>

            <div className="flex items-center gap-xs lg:hidden shrink-0">
              <a
                href={clinic.phoneHref}
                className="icon-badge w-11 h-11 shrink-0"
                aria-label={`Call ${clinic.phone}`}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
              </a>
              <button
              className="w-11 h-11 inline-flex items-center justify-center rounded-md text-ink hover:bg-surface transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface-alt border-t border-muted/20",
            isMobileMenuOpen
              ? "max-h-[calc(100dvh-72px)] overflow-y-auto opacity-100"
              : "max-h-0 opacity-0"
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="w-full px-lg lg:px-4xl py-lg sm:py-2xl">
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
                <Link href="/#appointment" onClick={() => setIsMobileMenuOpen(false)}>
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
