"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { OptimizedImage } from "@/components/common/Image";
import { blogPosts, type BlogPost } from "@/content/blog";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";

interface BlogPostContentProps {
  post: BlogPost;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div>
      <Section variant="surface" padding="default">
        <div className="max-w-[48rem] mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-button text-primary font-display font-heading mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to All Articles
          </Link>

          <span className="badge">{post.category}</span>
          <h1 className="font-display font-heading text-hero-display text-ink mt-4 mb-6 leading-[1.2]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-body-sm text-muted mb-8">
            <span className="inline-flex items-center gap-2">
              <User className="w-4 h-4 text-primary" aria-hidden="true" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>

          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8">
            <OptimizedImage
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <article
            className="article-body max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-primary" aria-hidden="true" />
            {post.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center px-3 py-1 rounded-pill bg-surface text-muted text-body-sm">
                #{tag.replace(/\s+/g, "-")}
              </span>
            ))}
          </div>

          <div className="mt-12 bg-surface-alt rounded-lg p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-heading text-heading-md text-ink mb-2">
                Have Questions About This?
              </h2>
              <p className="text-body text-muted">
                Our team is happy to help. Book a visit or give us a call.
              </p>
            </div>
            <Button variant="primary" asChild className="shrink-0">
              <Link href="/#appointment">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section variant="surface-alt" padding="default">
        <div className="max-w-[48rem] mx-auto">
          <h2 className="font-display font-heading text-heading-lg text-ink mb-8 text-center">
            Keep Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="group">
                <article className="bg-surface rounded-lg overflow-hidden h-full transition-colors">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <OptimizedImage
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <span className="badge mb-2">{related.category}</span>
                    <h3 className="font-display font-heading text-heading-sm text-ink mb-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-button text-primary font-display font-heading">
                      Read <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}