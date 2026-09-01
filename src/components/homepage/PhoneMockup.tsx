"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/common/Image";
import { Container } from "@/components/ui/Container";

export const PhoneMockup = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="invisalign"
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <div className="absolute inset-0" aria-hidden="true">
          <OptimizedImage
            src="/images/flysmileage/bg-banner-qr.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/45" />
        </div>

        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-2xl items-end min-h-[380px]">
            <div className="py-5xl">
              <h2 className="font-display font-heading text-heading-lg text-on-primary">
                See your new invisalign smile in seconds
              </h2>
              <p className="mt-md font-display font-heading text-body text-on-primary">
                Scan the QR code to see your smile transformation
              </p>

              <div className="mt-2xl inline-block bg-surface-alt p-sm rounded-sm">
                <OptimizedImage
                  src="/images/flysmileage/qr-code.jpeg"
                  alt="QR code to start the Invisalign smile simulation"
                  width={120}
                  height={120}
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="w-[85%] max-w-[28rem]">
                <OptimizedImage
                  src="/images/flysmileage/invisalign-mobile-hand.png"
                  alt="Invisalign smile simulation shown on a phone"
                  width={520}
                  height={640}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
);

PhoneMockup.displayName = "PhoneMockup";
