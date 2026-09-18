import { notFound } from "next/navigation";
import { CatalogProduct } from "@/components/v3/CatalogProduct";
import { getTrackingServiceBySlug, trackingServices } from "@/content/tracking-services";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return trackingServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getTrackingServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/tracking-e-medicao/${service.slug}`,
    keywords: [service.keyword, service.shortTitle, service.title, "GEO", "e-commerce"],
  });
}

export default async function TrackingProductPage({ params }: Props) {
  const { slug } = await params;
  const service = getTrackingServiceBySlug(slug);
  if (!service) notFound();
  const related = trackingServices.filter((item) => item.slug !== service.slug).slice(0, 3);
  return (
    <CatalogProduct
      service={service}
      catalogName="Tracking e medição"
      catalogPath="/tracking-e-medicao"
      related={related}
      badge="Tracking"
    />
  );
}
