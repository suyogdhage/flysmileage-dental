"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { OptimizedImage } from "@/components/common/Image";
import { blogPosts, blogCategories } from "@/content/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogContent() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div>
      <Section variant="surface" padding="default">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge px-3 py-1">Blog &amp; Resources</span>
          <h1 className="font-display font-heading text-hero-display text-ink mt-4 mb-4">
            Smile Wisdom, Straight From Our Dentists
          </h1>
          <p className="text-body-lg text-muted">
            Practical oral-health advice, treatment guides, and myth-busting — written by the team who actually treats you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Filter posts by category">
          {blogCategories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "btn-primary inline-flex items-center justify-center px-[20px] py-[8px] text-button-sm font-display font-heading rounded-pill cursor-pointer"
                  : "btn-secondary inline-flex items-center justify-center px-[20px] py-[8px] text-button-sm font-display font-heading rounded-pill cursor-pointer"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-surface-alt rounded-lg overflow-hidden h-full transition-shadow hover:shadow-lg">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <OptimizedImage
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 z-10 badge">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-body-sm text-muted mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-display font-heading text-heading-sm text-ink mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-body text-muted mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-button text-primary font-display font-heading">
                    Read Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-body text-muted py-16">
            No articles in this category yet. Check back soon!
          </p>
        )}

        <div className="text-center mt-16 bg-surface-alt rounded-lg p-10">
          <h2 className="font-display font-heading text-heading-lg text-ink mb-3">
            Have a Question We Should Cover?
          </h2>
          <p className="text-body text-muted mb-6 max-w-xl mx-auto">
            Email us at <a href="mailto:hello@flysmileage.com" className="text-primary font-medium underline underline-offset-2">hello@flysmileage.com</a> — we love hearing what&apos;s on your mind.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="btn-secondary inline-flex items-center gap-2"
          >
            Contact Our Team
          </button>
        </div>
      </Section>
    </div>
  );
}