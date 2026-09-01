import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogContent } from "@/components/blog/BlogContent";

export const metadata: Metadata = {
  title: "Blog | Fly Dental Clinic",
  description: "Dental advice and oral health tips from the team at Fly Dental Clinic, Pune.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-alt">
      <Header />
      <main className="flex-1">
        <BlogContent />
      </main>
      <Footer />
    </div>
  );
}