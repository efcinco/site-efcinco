import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Gauge,
  MessageCircle,
  Package,
  ShoppingCart,
} from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { MethodologySteps } from "@/components/MethodologySteps";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cases } from "@/content/cases";
import { homeFaqs } from "@/content/faq-home";
import { services } from "@/content/services";
import { getIcon } from "@/lib/icons";
import { JsonLd, faqJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "eFcinco",
  description:
    "eFcinco: implantação, migração e evolução de e-commerces VTEX. SEO técnico, UX de conversão e plataforma Iugis de automação e IA para WhatsApp.",
  path: "/",
});

const trustItems = [
  { icon: Gauge, label: "+10 anos", detail: "em e-commerce e VTEX" },
  { icon: Package, label: "VTEX IO + Legacy", detail: "profundidade nas duas versões" },
  { icon: MessageCircle, label: "SEO & Performance", detail: "código e conteúdo juntos" },
  { icon: Bot, label: "Iugis", detail: "automação e IA próprias" },
];

function LegacyHomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />

      <section className="relative min-h-[88vh] overflow-hidden text-white">
        <Image
          src="/images/hero-v2.jpg"
          alt="Comércio omnichannel com pagamento mobile e POS"
          fill
          priority
          loading="eager"
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/88 to-navy/55" />
        <div className="absolute inset-0 bg-brand/15 mix-blend-multiply" />
        <div className="surface-grid absolute inset-0 opacity-20" aria-hidden />
        <Container className="relative flex min-h-[88vh] items-center py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="animate-fade-in font-display text-3xl tracking-tight text-white sm:text-4xl">
              Uappi
            </p>
            <h1 className="animate-fade-up mt-5 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Parceira técnica de lojistas — da implantação à evolução
            </h1>
            <p className="animate-fade-up-delay mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Engenharia, SEO, UX de conversão e automações para sua loja
              vender mais com operação estável na VTEX e na Uappi.
            </p>
            <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-3">
              <Button href="/contato">Diagnóstico VTEX</Button>
              <Button href="/servicos" variant="secondary">
                Ver serviços
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-navy/10 bg-white">
        <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <div className="flex gap-3">
                <Icon icon={item.icon} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <p className="font-display text-2xl tracking-tight text-navy">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-slate">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="atmosphere py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Serviços"
              title="Tudo o que sua operação VTEX precisa para evoluir com segurança"
              description="Do go-live à evolução contínua: times próximos, entrega técnica e foco em conversão."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-white ring-1 ring-navy/8 transition duration-300 hover:-translate-y-1 hover:ring-brand/40"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="image-zoom object-cover"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <Icon
                        icon={getIcon(service.icon)}
                        className="text-white"
                        size={24}
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold text-navy transition group-hover:text-brand">
                      {service.shortTitle}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      Ver serviço
                      <Icon
                        icon={ArrowRight}
                        size={16}
                        className="text-brand transition group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
        <div className="surface-grid absolute inset-0 opacity-20" aria-hidden />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                light
                eyebrow="Iugis"
                title="Automação e inteligência para e-commerce e WhatsApp"
                description="Braço de produto da eFcinco: chatbot com IA, recuperação de carrinho, rastreio de pedidos e integrações nativas com VTEX."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/iugis/automacoes" variant="light">
                  Ver automações
                </Button>
                <Button href="/iugis/planos" variant="secondary">
                  Ver planos
                </Button>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  {
                    icon: ShoppingCart,
                    title: "Recuperação de carrinho",
                    text: "Mensagens no momento certo para recuperar receita abandonada.",
                  },
                  {
                    icon: Package,
                    title: "Rastreio automático",
                    text: "Menos tickets de “onde está meu pedido?” com notificações proativas.",
                  },
                  {
                    icon: Bot,
                    title: "Chatbot com IA",
                    text: "Agentes especializados e supervisor orquestrando atendimento e vendas.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-t border-white/15 pt-5">
                    <Icon icon={item.icon} className="text-brand-soft" />
                    <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src="/images/chat-v2.jpg"
                alt="Apps de mensagem e chatbot no celular — WhatsApp e canais de atendimento"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 to-transparent" />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Metodologia"
              title="Processo claro, entrega previsível"
              description="Uma trilha objetiva do diagnóstico à evolução contínua — sem surpresas no go-live."
            />
          </Reveal>
          <MethodologySteps />
        </Container>
      </section>

      <section className="border-y border-navy/10 bg-white py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Cases"
                title="Resultados com engenharia e operação"
                description="Projetos que unem VTEX, performance e automações Iugis."
              />
            </Reveal>
            <Button href="/cases" variant="ghost">
              Ver todos os cases
            </Button>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {cases.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.06}>
                <Link
                  href={`/cases/${item.slug}`}
                  className="group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-2xl p-6 text-white"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="image-zoom object-cover"
                    sizes="(max-width:1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/70 to-deep/20 transition group-hover:via-deep/80" />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-soft">
                      {item.segment}
                    </p>
                    <h3 className="mt-3 font-display text-2xl tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm text-white/75">
                      {item.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-soft">
                      Ler case
                      <Icon icon={ArrowRight} size={16} className="text-brand-soft" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="atmosphere py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Depoimentos"
              title="Seriedade que se prova na operação"
            />
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {cases
              .filter((item) => item.testimonial)
              .map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.08}>
                  <blockquote className="border-l-2 border-brand pl-6">
                    <p className="font-display text-2xl leading-snug tracking-tight text-navy">
                      “{item.testimonial?.quote}”
                    </p>
                    <footer className="mt-6 text-sm text-slate">
                      <strong className="text-navy">{item.testimonial?.author}</strong>
                      <span className="block">{item.testimonial?.role}</span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
          </div>
        </Container>
      </section>

      <Faq items={homeFaqs} />
      <CtaBand />
    </>
  );
}

export { default } from "./v3/page";
