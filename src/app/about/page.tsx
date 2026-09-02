import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Advanced Dental Clinic by Dr. Garde",
  description:
    "Learn about the personalized approach to dental care at Advanced Dental Clinic by Dr. Garde in Pune.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-alt">
      <Header />
      <main className="flex-1">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}