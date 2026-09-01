import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | FlySmileage Dental",
  description: "Book an appointment, ask a question, or get directions to FlySmileage Dental in Springfield, IL.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-alt">
      <Header />
      <main className="flex-1 pt-[100px]">
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}