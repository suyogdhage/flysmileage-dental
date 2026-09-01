"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/common/Image";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/content/blog";

export const BlogStrip = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section ref={ref} id="blog" className={cn("bg-surface-alt py-section", className)} {...props}>
        <Container>
          <div className="text-center mb-4xl">
            <span className="badge">Latest Post</span>
            <h2 className="mt-base font-display font-heading text-[40px] leading-[1.15] text-ink">
              Our Blog
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-4xl gap-y-2xl max-w-[64rem] mx-auto">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex gap-lg items-start">
                <div className="relative w-[130px] h-[90px] shrink-0 rounded-md overflow-hidden">
                  <OptimizedImage
                    src={post.image}
                    alt=""
                    fill
                    sizes="130px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display font-heading text-body leading-body-tight text-ink">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-md inline-flex items-center gap-1.5 font-display font-heading text-body-sm text-ink underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    Read More
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    );
  }
);

BlogStrip.displayName = "BlogStrip";
