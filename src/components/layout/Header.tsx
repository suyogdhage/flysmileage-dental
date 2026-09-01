"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const contactInfo = [
  { icon: Phone, text: "(555) 123-4567", href: "tel:5551234567" },
  { icon: Mail, text: "hello@flysmileage.com", href: "mailto:hello@flysmileage.com" },
];

export const Header = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <header
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "bg-surface-alt/95 backdrop-blur-sm",
          isScrolled ? "border-b border-muted/20 shadow-sm" : "",
          className
        )}
        {...props}
      >
        <Container>
          <div className="flex items-center justify-between h-[100px]">
            <Link href="/" className="flex items-center gap-2" aria-label="FlySmileage Dental Home">
              <span className="font-display font-heading text-heading-lg text-ink">
                FlySmileage<span className="text-primary"> Dental</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:5551234567"
                className="nav-link flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>(555) 123-4567</span>
              </a>
              <Button variant="primary" asChild>
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-ink hover:bg-surface transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>

        <div
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface-alt border-t border-muted/20",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <Container className="py-6">
            <nav className="flex flex-col gap-4" aria-label="Mobile main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link py-2 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              {contactInfo.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link flex items-center gap-3 py-2"
                >
                  <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span>{item.text}</span>
                </a>
              ))}
              <Button variant="primary" fullWidth className="mt-2" asChild>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </Container>
        </div>
      </header>
    );
  }
);

Header.displayName = "Header";