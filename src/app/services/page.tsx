import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesPageContent } from "@/components/services/ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services | FlySmileage Dental",
  description: "Comprehensive dental services including general, cosmetic, restorative, implants, orthodontics, and pediatric care. All under one roof.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-alt">
      <Header />
      <main className="flex-1 pt-[100px]">
        <ServicesPageContent />
      </main>
      <Footer />
    </div>
  );
}