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
  title: "Iugis Chatbot — Agentes de IA para WhatsApp",
  description:
    "Iugis Chatbot: agentes de IA especializados, supervisor orquestrador, disparos em massa, WhatsApp Flows e base de conhecimento.",
  path: "/iugis/chatbot",
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Iugis", path: "/iugis" },
  { name: "Chatbot IA", path: "/iugis/chatbot" },
];

const features = [
  "Agentes de IA especializados por jornada",
  "Supervisor de IA (orquestrador)",
  "Marketing em massa com disparos",
  "Formulários nativos no WhatsApp (Flows)",
  "Base de conhecimento com docs e tabelas",
  "Pesquisa de satisfação pós-atendimento",
  "Servidor MCP e webhooks",
  "Chatbot no-code ilimitado",
];

export default function IugisChatbotPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          softwareApplicationJsonLd({
            name: "Iugis Chatbot",
            description:
              "Chatbot com agentes de IA para atendimento e marketing no WhatsApp.",
            path: "/iugis/chatbot",
            offers: [
              { name: "Iugis Chatbot", price: "269", priceCurrency: "BRL" },
            ],
          }),
        ]}
      />
      <PageHero
        eyebrow="Iugis Chatbot"
        title="Automação inteligente sem complexidade de gestão"
        description="Atendimento e marketing com IA no WhatsApp: agentes especializados, orquestração e disparos — ideal para validar ganho rápido antes de conectar todo o e-commerce."
        image="/images/chat-v2.jpg"
        imageAlt="WhatsApp e canais de mensagem para chatbot com IA"
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
        title="Comece pelo Chatbot"
        description="A partir de R$ 269/mês. Evolua depois para Automações quando quiser conectar recuperação e tracking."
        primaryHref="/contato?produto=iugis-chatbot"
        primaryLabel="Selecionar Chatbot"
        secondaryHref="/iugis/planos"
        secondaryLabel="Ver planos"
      />
    </>
  );
}
