import { CatalogListing } from "@/components/v3/CatalogListing";
import { adsServices } from "@/content/ads-services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Google Ads e Meta Ads para e-commerce",
  description:
    "Gestão de Google Ads (Search, PMax, Shopping, YouTube e remarketing), Meta Ads, Merchant Center, estruturação de conta e configuração de conversão principal com foco em receita.",
  path: "/google-ads-e-meta-ads",
  keywords: [
    "gestão de Google Ads",
    "gestão de Meta Ads",
    "Merchant Center",
    "Performance Max",
    "Shopping",
    "estruturação de conta",
    "conversão principal",
  ],
});

export default function AdsCatalogPage() {
  return (
    <CatalogListing
      eyebrow="Google Ads e Meta Ads"
      title="Mídia paga que otimiza receita, não métrica de meio."
      description="Gestão de Google Ads e Meta Ads da eFcinco opera Search, Performance Max, Shopping, YouTube, remarketing, catálogo e público próprio. Conversão principal é compra — ou o contato que vira pedido."
      path="/google-ads-e-meta-ads"
      badge="Ads"
      services={adsServices}
    />
  );
}
