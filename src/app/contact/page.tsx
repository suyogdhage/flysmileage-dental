import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Fly Dental Clinic",
  description: "Book an appointment at Fly Dental Clinic — Salisbury Park, Raviwar Peth and Bibwewadi, Pune. Call +91 976 747 1117.",
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