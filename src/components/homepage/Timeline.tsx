"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/common/Image";
import { clinic, visitSteps } from "@/content/clinic";

export const Timeline = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="your-visit"
        className={cn("bg-surface py-section", className)}
        {...props}
      >
        <Container size="lg">
          <div className="text-center mb-2xl sm:mb-4xl">
            <span className="badge">Your Visit At</span>
            <h2 className="mt-base font-display font-heading text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.15] text-ink">
              {clinic.name}
            </h2>
          </div>

          {/* Horizontal alternating rail on desktop, simple stack on small screens */}
          <ol className="hidden lg:grid grid-cols-6 relative" role="list">
            <div
              className="absolute left-0 right-0 top-1/2 h-px bg-ink/25 -translate-y-1/2"
              aria-hidden="true"
            />
            {visitSteps.map((item, index) => {
              const isTop = index % 2 === 0;
              return (
                <li key={item.step} className="relative flex flex-col items-center px-sm">
                  <div className={cn("flex flex-col items-center", isTop ? "order-1" : "order-3")}>
                    {isTop ? (
                      <>
                        <div className="text-center min-h-[150px] flex flex-col justify-end">
                          <p className="font-display font-heading text-button text-primary">
                            {item.step}
                          </p>
                          <h3 className="font-display font-heading text-heading-sm text-ink mt-1">
                            {item.title}
                          </h3>
                          <p className="mt-md text-body-sm text-muted">{item.description}</p>
                        </div>
                        <div className="w-[130px] h-[130px] my-lg flex items-center justify-center">
                          <OptimizedImage
                            src={item.image}
                            alt=""
                            width={130}
                            height={130}
                            objectFit="contain"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-[130px] h-[130px] mb-lg flex items-center justify-center">
                          <OptimizedImage
                            src={item.image}
                            alt=""
                            width={130}
                            height={130}
                            objectFit="contain"
                          />
                        </div>
                        <div className="text-center min-h-[150px]">
                          <p className="font-display font-heading text-button text-primary">
                            {item.step}
                          </p>
                          <h3 className="font-display font-heading text-heading-sm text-ink mt-1">
                            {item.title}
                          </h3>
                          <p className="mt-md text-body-sm text-muted">{item.description}</p>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="order-2 relative flex items-center justify-center h-[40px]">
                    <span
                      className="absolute w-px h-[40px] bg-ink/40"
                      aria-hidden="true"
                    />
                    <span
                      className="relative w-[10px] h-[10px] bg-ink rotate-45"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              );
            })}
          </ol>

          <ol className="lg:hidden grid grid-cols-2 gap-x-lg gap-y-2xl sm:gap-4xl" role="list">
            {visitSteps.map((item) => (
              <li key={item.step} className="text-center">
                <div className="w-[92px] h-[92px] sm:w-[130px] sm:h-[130px] mx-auto mb-base sm:mb-lg flex items-center justify-center">
                  <OptimizedImage
                    src={item.image}
                    alt=""
                    width={130}
                    height={130}
                    objectFit="contain"
                  />
                </div>
                <p className="font-display font-heading text-button text-primary">{item.step}</p>
                <h3 className="font-display font-heading text-heading-sm text-ink mt-1">
                  {item.title}
                </h3>
                <p className="mt-sm sm:mt-md text-[13px] sm:text-body-sm leading-body text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    );
  }
);

Timeline.displayName = "Timeline";
