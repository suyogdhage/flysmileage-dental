import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesPageContent } from "@/components/services/ServicesPageContent";

export const metadata: Metadata = {
  title: "Treatments | Fly Dental Clinic",
  description: "Root canal treatment, general dentistry, dental implants, smile makeover, full mouth rehabilitation, braces, teeth cleaning, veneers and kids dental care in Pune.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-alt">
      <Header />
      <main className="flex-1">
        <ServicesPageContent />
      </main>
      <Footer />
    </div>
  );
}