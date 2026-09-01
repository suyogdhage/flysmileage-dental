import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogContent } from "@/components/blog/BlogContent";

export const metadata: Metadata = {
  title: "Dental Blog & Resources | FlySmileage Dental",
  description: "Expert dental advice, oral health tips, and the latest in gentle, modern dentistry from the FlySmileage Dental team.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-alt">
      <Header />
      <main className="flex-1 pt-[100px]">
        <BlogContent />
      </main>
      <Footer />
    </div>
  );
}