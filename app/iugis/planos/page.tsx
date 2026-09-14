import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { PlanCards } from "@/components/PlanCards";
import { Container } from "@/components/ui/Container";
import { iugisPlanFaqs, iugisPlans } from "@/content/iugis";
import {
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Planos e Preços Iugis",
  description:
    "Planos Iugis: Chatbot a partir de R$ 269/mês, Automações a partir de R$ 399/mês e Sob Medida sob consulta.",
  path: "/iugis/planos",
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Iugis", path: "/iugis" },
  { name: "Planos", path: "/iugis/planos" },
];

export default function IugisPlanosPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          faqJsonLd(iugisPlanFaqs),
          softwareApplicationJsonLd({
            name: "Iugis",
            description: "Planos de automação e IA para e-commerce e WhatsApp.",
            path: "/iugis/planos",
            offers: iugisPlans
              .filter((plan) => plan.price !== "0")
              .map((plan) => ({
                name: plan.name,
                price: plan.price,
                priceCurrency: "BRL",
              })),
          }),
        ]}
      />

      <PageHero
        eyebrow="Planos Iugis"
        title="Escolha a potência da sua automação"
        description="Três caminhos claros: inteligência pura, vendas online ou gestão complexa. A Iugis é o produto de automação da eFcinco."
        image="/images/devops-v2.jpg"
        imageAlt="Planos de automação com métricas de operação e conversão"
        breadcrumbs={crumbs}
      />

      <section className="atmosphere py-16 sm:py-20">
        <Container>
          <PlanCards />
        </Container>
      </section>

      <Faq items={iugisPlanFaqs} title="Perguntas frequentes sobre planos" />
    </>
  );
}
