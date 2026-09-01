"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Smartphone, CheckCircle, Calendar, Bell, MessageCircle } from "lucide-react";

const appFeatures = [
  { icon: Calendar, title: "Easy Booking", desc: "Schedule in 30 seconds" },
  { icon: Bell, title: "Smart Reminders", desc: "Never miss an appointment" },
  { icon: MessageCircle, title: "Direct Chat", desc: "Text your care team" },
  { icon: CheckCircle, title: "Treatment Plans", desc: "Track your progress" },
];

export const PhoneMockup = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="app"
        className={cn("bg-surface-alt", className)}
        {...props}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
              <span className="badge px-3 py-1">FlySmileage App</span>
            </div>
            <h2 className="font-display font-heading text-heading-lg text-ink mb-4">
              Your Dental Care, In Your Pocket
            </h2>
            <p className="text-body-lg text-muted mb-8 leading-relaxed">
              Manage appointments, view treatment plans, chat with your care team, 
              and access your records — all from our secure, HIPAA-compliant mobile app.
            </p>

            <div className="space-y-4 mb-8">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feature.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-heading text-body text-ink">{feature.title}</h3>
                    <p className="text-body-sm text-muted">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-ink text-on-primary rounded-md text-body-sm font-medium hover:opacity-90 transition-opacity" aria-label="Download on the App Store">
                <Smartphone className="w-5 h-5" aria-hidden="true" />
                <span>Download on the App Store</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 border border-muted/30 rounded-md text-body-sm font-medium text-ink hover:bg-surface transition-colors" aria-label="Get it on Google Play">
                <Smartphone className="w-5 h-5" aria-hidden="true" />
                <span>Get it on Google Play</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[9/19] max-w-xs mx-auto rounded-[40px] bg-ink p-1.5 shadow-2xl">
              <div className="bg-white rounded-[38px] overflow-hidden relative">
                <div className="h-6 bg-ink/5 flex items-center justify-center px-4">
                  <div className="w-24 h-1 bg-ink/20 rounded-full" />
                </div>
                <div className="p-6 space-y-6">
                  <div className="bg-primary/5 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-display font-heading text-body text-ink">Next Appointment</h4>
                      <span className="badge">Confirmed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-display font-heading text-heading-sm text-ink">Cleaning & Exam</p>
                        <p className="text-body-sm text-muted">Dec 15, 2024 • 10:00 AM</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {appFeatures.slice(0, 4).map((feature, index) => (
                      <button key={index} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-surface hover:bg-surface-alt transition-colors text-left">
                        <feature.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                        <span className="text-body-sm text-center text-ink">{feature.title}</span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-muted/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-body-sm text-muted">Your Progress</p>
                        <p className="font-display font-heading text-2xl text-ink">85%</p>
                      </div>
                      <div className="w-24 h-24 relative">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="48"
                            cy="48"
                            r="40"
                            fill="none"
                            stroke="#F6F3ED"
                            strokeWidth="8"
                          />
                          <circle
                            cx="48"
                            cy="48"
                            r="40"
                            fill="none"
                            stroke="#E1132F"
                            strokeWidth="8"
                            strokeDasharray="251.2"
                            strokeDashoffset="37.7"
                            strokeLinecap="round"
                            className="transition-all duration-1000"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

PhoneMockup.displayName = "PhoneMockup";