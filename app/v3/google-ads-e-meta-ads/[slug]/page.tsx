import { notFound } from "next/navigation";
import { CatalogProduct } from "@/components/v3/CatalogProduct";
import { adsServices, getAdsServiceBySlug } from "@/content/ads-services";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return adsServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getAdsServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/google-ads-e-meta-ads/${service.slug}`,
    keywords: [service.keyword, service.shortTitle, service.title, "GEO", "e-commerce"],
  });
}

export default async function AdsProductPage({ params }: Props) {
  const { slug } = await params;
  const service = getAdsServiceBySlug(slug);
  if (!service) notFound();
  const related = adsServices.filter((item) => item.slug !== service.slug).slice(0, 3);
  return (
    <CatalogProduct
      service={service}
      catalogName="Google Ads e Meta Ads"
      catalogPath="/google-ads-e-meta-ads"
      related={related}
      badge="Ads"
    />
  );
}
