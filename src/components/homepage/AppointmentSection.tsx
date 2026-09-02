"use client";

import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/common/Image";
import { ArrowUpRight } from "lucide-react";
import { appointment, clinic } from "@/content/clinic";

// The live site guards its form with a simple arithmetic question.
const SUM = { a: 10, b: 7 };

const fieldClasses =
  "w-full rounded-pill bg-surface-alt px-lg py-md text-body-sm text-ink placeholder-muted border border-transparent focus:outline-none focus:ring-2 focus:ring-ink";

export const AppointmentSection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const [error, setError] = useState<string | null>(null);
    const [sent, setSent] = useState(false);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      if (Number(data.get("captcha")) !== SUM.a + SUM.b) {
        setError("That answer isn't right — please try again.");
        setSent(false);
        return;
      }
      setError(null);
      setSent(true);
      event.currentTarget.reset();
    };

    return (
      <section
        ref={ref}
        id="appointment"
        className={cn("bg-surface-alt py-section", className)}
        {...props}
      >
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-2xl items-stretch">
            <div className="relative min-h-[320px] rounded-lg overflow-hidden">
              <OptimizedImage
                src={appointment.image}
                alt={`${clinic.name} reception taking an appointment call`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="bg-primary rounded-lg p-2xl md:p-4xl">
              <span className="inline-flex items-center rounded-pill bg-surface-alt px-[10px] py-[5px] font-display font-heading text-button-sm tracking-button uppercase text-ink">
                {appointment.eyebrow}
              </span>

              <h2 className="mt-lg font-display font-heading text-[32px] leading-[1.2] text-on-primary">
                {appointment.headline}
              </h2>

              <form onSubmit={onSubmit} className="mt-2xl grid sm:grid-cols-2 gap-base">
                <label className="sr-only" htmlFor="ap-first">First Name</label>
                <input id="ap-first" name="firstName" placeholder="First Name" required className={fieldClasses} />

                <label className="sr-only" htmlFor="ap-last">Last Name</label>
                <input id="ap-last" name="lastName" placeholder="Last Name" required className={fieldClasses} />

                <label className="sr-only" htmlFor="ap-email">Email Address</label>
                <input id="ap-email" name="email" type="email" placeholder="Email Address" required className={fieldClasses} />

                <label className="sr-only" htmlFor="ap-treatment">Select Treatment</label>
                <select id="ap-treatment" name="treatment" required defaultValue="" className={fieldClasses}>
                  <option value="" disabled>-- Select Treatment --</option>
                  {appointment.treatments.map((treatment) => (
                    <option key={treatment} value={treatment}>{treatment}</option>
                  ))}
                </select>

                <label className="sr-only" htmlFor="ap-mobile">Mobile Number</label>
                <input id="ap-mobile" name="mobile" type="tel" placeholder="Enter Mobile Number*" required className={fieldClasses} />

                <label className="sr-only" htmlFor="ap-location">Location</label>
                <input id="ap-location" name="location" placeholder="Enter Location*" required className={fieldClasses} />

                <label className="sr-only" htmlFor="ap-message">Message</label>
                <textarea
                  id="ap-message"
                  name="message"
                  rows={3}
                  placeholder="Write a message*"
                  required
                  className={cn(fieldClasses, "sm:col-span-2 rounded-lg")}
                />

                <div className="sm:col-span-2 flex flex-wrap items-center gap-base">
                  <label htmlFor="ap-captcha" className="font-display font-heading text-body-sm text-on-primary">
                    What is {SUM.a} + {SUM.b}?
                  </label>
                  <input
                    id="ap-captcha"
                    name="captcha"
                    inputMode="numeric"
                    placeholder="Answer"
                    required
                    className={cn(fieldClasses, "max-w-[12rem]")}
                  />
                </div>

                {error && (
                  <p className="sm:col-span-2 text-body-sm text-on-primary" role="alert">{error}</p>
                )}
                {sent && (
                  <p className="sm:col-span-2 text-body-sm text-on-primary" role="status">
                    Thank you — we&apos;ll call you back to confirm your appointment.
                  </p>
                )}

                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-pill bg-ink px-[30px] py-[14px] font-display font-heading text-button tracking-button text-on-primary transition-opacity hover:opacity-90"
                >
                  Send
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    );
  }
);

AppointmentSection.displayName = "AppointmentSection";
