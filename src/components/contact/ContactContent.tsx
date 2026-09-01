"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more (10 characters minimum)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const serviceOptions = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Orthodontics (Braces/Invisalign)",
  "Periodontics (Gum Care)",
  "Endodontics (Root Canal)",
  "Pediatric Dentistry",
  "Other / Not Sure",
];

const timeSlots = [
  "Morning (8am–12pm)",
  "Afternoon (12pm–4pm)",
  "Evening (4pm–7pm)",
];

export function ContactContent() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("idle");
    try {
      // Integration point: POST to your backend/API route here.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("Form submitted:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClasses = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-md bg-white border text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
      hasError ? "border-primary" : "border-muted/30"
    }`;

  return (
    <div>
      <Section variant="surface" padding="default">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge px-3 py-1">Contact Us</span>
          <h1 className="font-display font-heading text-hero-display text-ink mt-4 mb-4">
            Let&apos;s Get You Smiling
          </h1>
          <p className="text-body-lg text-muted">
            Request an appointment, ask a question, or just say hello — we typically respond within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, label: "Address", value: "123 Smile Street, Suite 100\nSpringfield, IL 62701" },
              { icon: Phone, label: "Phone", value: "(555) 123-4567" },
              { icon: Mail, label: "Email", value: "hello@flysmileage.com" },
            ].map((item, index) => (
              <div key={index} className="bg-surface-alt rounded-lg p-5 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-heading text-heading-sm text-ink mb-1">{item.label}</h3>
                  <p className="text-body text-muted whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="bg-surface-alt rounded-lg p-5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display font-heading text-heading-sm text-ink">Office Hours</h3>
              </div>
              <dl className="space-y-2">
                {[
                  ["Monday – Thursday", "8:00 AM – 5:00 PM"],
                  ["Friday", "8:00 AM – 2:00 PM"],
                  ["Saturday", "By Appointment"],
                  ["Sunday", "Closed"],
                ].map(([day, time], index) => (
                  <div key={index} className="flex justify-between gap-4 text-body text-ink">
                    <dt className="text-muted">{day}</dt>
                    <dd className="font-medium text-right">{time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-body-sm text-muted bg-primary/5 rounded-md p-3">
                <strong className="text-primary">Dental emergency?</strong> Call us 24/7 at (555) 123-4567 and press 1 to reach our on-call dentist.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-surface-alt rounded-lg p-6 md:p-8">
            <h2 className="font-display font-heading text-heading-lg text-ink mb-2">
              Request an Appointment
            </h2>
            <p className="text-body-sm text-muted mb-6">
              Fields marked * are required.
            </p>

            {status === "success" && (
              <div className="mb-6 flex items-start gap-3 p-4 bg-primary/5 rounded-md border border-primary/20" role="status">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-display font-heading text-body text-ink">Request received!</p>
                  <p className="text-body-sm text-muted">Our team will contact you within one business day to confirm your appointment.</p>
                </div>
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 flex items-start gap-3 p-4 bg-primary/10 rounded-md" role="alert">
                <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-display font-heading text-body text-ink">Something went wrong</p>
                  <p className="text-body-sm text-muted">Please try again, or call us at (555) 123-4567.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-body-sm font-medium text-ink mb-1">
                    First Name *
                  </label>
                  <input id="firstName" type="text" placeholder="Jane" className={inputClasses(!!errors.firstName)} {...register("firstName")} />
                  {errors.firstName && <p className="mt-1 text-body-sm text-primary">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-body-sm font-medium text-ink mb-1">
                    Last Name *
                  </label>
                  <input id="lastName" type="text" placeholder="Doe" className={inputClasses(!!errors.lastName)} {...register("lastName")} />
                  {errors.lastName && <p className="mt-1 text-body-sm text-primary">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-body-sm font-medium text-ink mb-1">
                    Email Address *
                  </label>
                  <input id="email" type="email" placeholder="jane@example.com" className={inputClasses(!!errors.email)} {...register("email")} />
                  {errors.email && <p className="mt-1 text-body-sm text-primary">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-body-sm font-medium text-ink mb-1">
                    Phone Number *
                  </label>
                  <input id="phone" type="tel" placeholder="(555) 000-0000" className={inputClasses(!!errors.phone)} {...register("phone")} />
                  {errors.phone && <p className="mt-1 text-body-sm text-primary">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-body-sm font-medium text-ink mb-1">
                  Service Needed *
                </label>
                <select id="service" className={inputClasses(!!errors.service)} {...register("service")}>
                  <option value="">Select a service...</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 text-body-sm text-primary">{errors.service.message}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-body-sm font-medium text-ink mb-1">
                    Preferred Date
                  </label>
                  <input id="preferredDate" type="date" className={inputClasses(false)} {...register("preferredDate")} />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-body-sm font-medium text-ink mb-1">
                    Preferred Time
                  </label>
                  <select id="preferredTime" className={inputClasses(false)} {...register("preferredTime")}>
                    <option value="">Any time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-body-sm font-medium text-ink mb-1">
                  Message *
                </label>
                <textarea id="message" rows={4} placeholder="Tell us about your needs, symptoms, or questions..." className={inputClasses(!!errors.message)} {...register("message")} />
                {errors.message && <p className="mt-1 text-body-sm text-primary">{errors.message.message}</p>}
              </div>

              <Button type="submit" variant="primary" fullWidth loading={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Appointment Request"}
              </Button>
              <p className="text-body-sm text-muted text-center">
                By submitting, you agree to be contacted by FlySmileage Dental. We never share your information.
              </p>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}