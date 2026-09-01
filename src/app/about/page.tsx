import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us | FlySmileage Dental",
  description: "Meet the FlySmileage Dental team and learn about our patient-first philosophy, advanced care, and 15+ years of trusted service.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-alt">
      <Header />
      <main className="flex-1 pt-[100px]">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}