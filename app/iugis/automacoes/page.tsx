import { Check } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import {
  JsonLd,
  breadcrumbJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Iugis Automações — Commerce + WhatsApp",
  description:
    "Iugis Automações: recuperação de carrinho, rastreio de pedidos, leitura de catálogo e integração nativa com VTEX, Shopify e Tray.",
  path: "/iugis/automacoes",
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Iugis", path: "/iugis" },
  { name: "Automações", path: "/iugis/automacoes" },
];

const features = [
  "Tudo do plano Chatbot",
  "Recuperação de carrinho abandonado",
  "Rastreio automático de pedidos",
  "Integração nativa com VTEX, Shopify e Tray",
  "Leitura de catálogo de produtos",
  "Identificação de Pix e boleto pendente",
];

export default function IugisAutomacoesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          softwareApplicationJsonLd({
            name: "Iugis Automações",
            description:
              "Infraestrutura de vendas com chatbot, recuperação de carrinho e tracking para e-commerce.",
            path: "/iugis/automacoes",
            offers: [
              {
                name: "Iugis Automações",
                price: "399",
                priceCurrency: "BRL",
              },
            ],
          }),
        ]}
      />
      <PageHero
        eyebrow="Iugis Automações"
        title="Infraestrutura completa de vendas"
        description="Tudo do Chatbot mais o módulo de varejo: conecte VTEX, recupere carrinhos, notifique rastreio e transforme o WhatsApp em canal previsível de receita."
        image="/images/checkout-v2.jpg"
        imageAlt="Checkout e pagamento digital em e-commerce"
        breadcrumbs={crumbs}
      />
      <section className="atmosphere py-16 sm:py-20">
        <Container>
          <ul className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 rounded-xl bg-white px-5 py-4 text-graphite ring-1 ring-navy/8"
              >
                <Icon icon={Check} size={18} className="mt-0.5 shrink-0 text-brand" />
                {feature}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand
        title="Ative Automações Commerce"
        description="A partir de R$ 399/mês. Ideal para lojistas VTEX que já têm volume e querem recuperar receita."
        primaryHref="/contato?produto=iugis-automacoes"
        primaryLabel="Selecionar Automações"
        secondaryHref="/iugis/planos"
        secondaryLabel="Ver planos"
      />
    </>
  );
}
