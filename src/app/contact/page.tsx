import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Advanced Dental Clinic by Dr. Garde",
  description: "Book an appointment at Advanced Dental Clinic by Dr. Garde — Pune Satara Road, Pune. Call 020 2421 3708.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-alt">
      <Header />
      <main className="flex-1">
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}