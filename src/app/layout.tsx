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
  title: "FlySmileage Dental | Boutique Dental Care for Your Best Smile",
  description: "FlySmileage Dental — a patient-first boutique dental practice offering comprehensive care in a warm, calm environment. Book your appointment today.",
  openGraph: {
    title: "FlySmileage Dental | Boutique Dental Care",
    description: "Patient-first boutique dental practice offering comprehensive care in a warm, calm environment.",
    type: "website",
    locale: "en_US",
    siteName: "FlySmileage Dental",
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