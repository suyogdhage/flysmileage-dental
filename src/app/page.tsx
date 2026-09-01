import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/homepage/Hero";
import { AboutSection } from "@/components/homepage/AboutSection";
import { ServicesStrip } from "@/components/homepage/ServicesStrip";
import { PhoneMockup } from "@/components/homepage/PhoneMockup";
import { FeatureIcons } from "@/components/homepage/FeatureIcons";
import { Timeline } from "@/components/homepage/Timeline";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-alt">
      <Header />
      <main className="flex-1 pt-[100px]">
        <Hero />
        <AboutSection />
        <ServicesStrip />
        <PhoneMockup />
        <FeatureIcons />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}