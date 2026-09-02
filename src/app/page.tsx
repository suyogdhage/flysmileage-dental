import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/homepage/Hero";
import { AboutSection } from "@/components/homepage/AboutSection";
import { ServicesStrip } from "@/components/homepage/ServicesStrip";
import { PhoneMockup } from "@/components/homepage/PhoneMockup";
import { FeatureIcons } from "@/components/homepage/FeatureIcons";
import { Timeline } from "@/components/homepage/Timeline";
import { WhyChooseUs } from "@/components/homepage/WhyChooseUs";
import { AppointmentSection } from "@/components/homepage/AppointmentSection";
import { Testimonials } from "@/components/homepage/Testimonials";
import { ClosingCta } from "@/components/homepage/ClosingCta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-alt">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesStrip />
        <PhoneMockup />
        <FeatureIcons />
        <Timeline />
        <WhyChooseUs />
        <AppointmentSection />
        <Testimonials />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
