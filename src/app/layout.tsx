import type { Metadata, Viewport } from "next";
import { Bitter, Mulish } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Dentist in Salisbury Park | Fly Dental Clinic, Pune",
  description: "Fly Dental Clinic — over 17 years of personalized dental care in Salisbury Park, Raviwar Peth and Bibwewadi, Pune. We Listen, We Care. Book your appointment today.",
  openGraph: {
    title: "Fly Dental Clinic | Best Dental Clinic in Salisbury Park",
    description: "Personalized dental care across three Pune clinics — root canal, implants, braces, smile makeover and more.",
    type: "website",
    locale: "en_IN",
    siteName: "Fly Dental Clinic",
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F3ED",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bitter.variable} ${mulish.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}