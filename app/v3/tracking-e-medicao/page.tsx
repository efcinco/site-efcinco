import { CatalogListing } from "@/components/v3/CatalogListing";
import { trackingServices } from "@/content/tracking-services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Tracking e medição para e-commerce",
  description:
    "Implementação de medição, auditoria de tracking, checkout e compra, conversões otimizadas, server-side e medição de contato. GTM, GA4, Google Ads e Meta em VTEX, Shopify, Wake, Tray, Nuvemshop e loja própria.",
  path: "/tracking-e-medicao",
  keywords: [
    "implementação de medição e-commerce",
    "auditoria de tracking",
    "Google Tag Manager",
    "Google Analytics 4",
    "conversões otimizadas",
    "API de Conversões Meta",
    "medição server-side",
    "medição de WhatsApp",
  ],
});

export default function TrackingCatalogPage() {
  return (
    <CatalogListing
      eyebrow="Tracking e medição"
      title="Medição para e-commerce que o algoritmo e o caixa reconhecem."
      description="Implementação de medição para e-commerce é GTM, GA4, Google Ads e Meta com funil completo — produto visto, carrinho, checkout e compra com receita e ID do pedido. A eFcinco também audita o que se perde, mede contato e envia conversão pelo servidor."
      path="/tracking-e-medicao"
      badge="Tracking"
      services={trackingServices}
    />
  );
}
