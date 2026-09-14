import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, ShoppingCart, Wrench } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { iugisBenefits } from "@/content/iugis";
import {
  JsonLd,
  breadcrumbJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Iugis — Automação e IA para E-commerce",
  description:
    "Iugis é a plataforma da eFcinco para automação de e-commerce e WhatsApp: chatbot com IA, recuperação de carrinho e rastreio de pedidos.",
  path: "/iugis",
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Iugis", path: "/iugis" },
];

const modules = [
  {
    href: "/iugis/chatbot",
    title: "Iugis Chatbot",
    text: "Agentes de IA, supervisor orquestrador, disparos e Flows no WhatsApp.",
    icon: Bot,
  },
  {
    href: "/iugis/automacoes",
    title: "Iugis Automações",
    text: "Tudo do chatbot + recuperação de carrinho, tracking e catálogo.",
    icon: ShoppingCart,
  },
  {
    href: "/contato?produto=iugis-sob-medida",
    title: "Sob Medida",
    text: "CRM avançado, fluxos custom, ERP legado e SLA prioritário.",
    icon: Wrench,
  },
];

export default function IugisPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          softwareApplicationJsonLd({
            name: "Iugis",
            description:
              "Plataforma de automação e inteligência para e-commerce e WhatsApp.",
            path: "/iugis",
          }),
        ]}
      />

      <PageHero
        eyebrow="Produto eFcinco"
        title="Iugis — torre de controle de automação e inteligência para vendas"
        description="Centralize operações e automatize recuperação de carrinhos, rastreio e atendimento. Escalável para e-commerce VTEX — com a seriedade de quem também constrói a loja."
        image="/images/chat-v2.jpg"
        imageAlt="Chatbot e automações em apps de mensagem no mobile"
        breadcrumbs={crumbs}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/iugis/planos" variant="light">
            Ver planos
          </Button>
          <Button href="/contato?produto=iugis-automacoes" variant="secondary">
            Falar com consultor
          </Button>
        </div>
      </PageHero>

      <section className="atmosphere py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Módulos"
              title="Três caminhos claros para automatizar sua operação"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {modules.map((item, index) => (
              <Reveal key={item.href} delay={index * 0.06}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-xl bg-white p-8 ring-1 ring-navy/8 transition hover:-translate-y-1 hover:ring-brand/40"
                >
                  <Icon icon={item.icon} className="text-brand" />
                  <h2 className="mt-4 text-2xl font-semibold text-navy group-hover:text-brand">
                    {item.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                    {item.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Explorar
                    <Icon icon={ArrowRight} size={16} className="text-brand" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-navy/10 bg-white py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading eyebrow="Benefícios" title="Operação pronta para escalar" />
              <div className="mt-10 grid gap-8">
                {iugisBenefits.map((item) => (
                  <div key={item.title} className="border-t border-navy/10 pt-5">
                    <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/devops-v2.jpg"
                alt="Dashboard de performance, SEO e métricas de e-commerce"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Arquitetura"
              title="Aberta para o que você já usa"
              description="API, infraestrutura escalável e webhooks para conectar ERP, VTEX e fluxos customizados."
            />
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "API Universal",
                text: "Conecte sistemas legados e fluxos custom via JSON documentado.",
              },
              {
                title: "Infraestrutura escalável",
                text: "Preparada para picos de tráfego e Black Friday sem latência na mensagem.",
              },
              {
                title: "Webhooks poderosos",
                text: "Gatilhos em tempo real baseados em pedido, carrinho e ações do usuário.",
              },
            ].map((item, index) => (
              <li key={item.title} className="border-t-2 border-brand pt-5">
                <p className="text-xs font-semibold text-brand">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-slate">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand
        title="Sua operação pronta para o próximo nível?"
        description="Confira planos e preços para Chatbot, Automações e Solutions Sob Medida."
        primaryHref="/iugis/planos"
        primaryLabel="Ver tabela de planos"
        secondaryHref="/contato?produto=iugis-automacoes"
        secondaryLabel="Falar com consultor"
      />
    </>
  );
}
