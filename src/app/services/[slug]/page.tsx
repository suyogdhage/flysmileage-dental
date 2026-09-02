import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceDetailContent } from "@/components/services/ServiceDetailContent";
import { services } from "@/content/services";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | Advanced Dental Clinic by Dr. Garde" };
  return {
    title: `${service.title} | Advanced Dental Clinic by Dr. Garde`,
    description: service.shortDescription,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="flex flex-col min-h-screen bg-surface-alt">
      <Header />
      <main className="flex-1">
        <ServiceDetailContent service={service} />
      </main>
      <Footer />
    </div>
  );
}