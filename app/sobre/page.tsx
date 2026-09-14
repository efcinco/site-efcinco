import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/ui/Container";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site";

export const metadata = buildMetadata({
  title: "Sobre a eFcinco",
  description:
    "Conheça a eFcinco: mais de 10 anos em e-commerce VTEX, unindo implantação, SEO, UX e a plataforma Iugis de automação e IA.",
  path: "/sobre",
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Sobre", path: "/sobre" },
];

function LegacySobrePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Sobre a eFcinco",
            url: `${siteConfig.url}/sobre`,
            mainEntity: {
              "@id": `${siteConfig.url}/#organization`,
            },
          },
        ]}
      />
      <PageHero
        eyebrow="Sobre"
        title="Empresa estruturada para lojistas que levam VTEX a sério"
        description="Mais de 10 anos em e-commerce: agilidade e proximidade com o lojista para evoluir usabilidade, performance e conversão."
        image="/images/team-v2.jpg"
        imageAlt="Time técnico colaborando em projetos de e-commerce"
        breadcrumbs={crumbs}
      />

      <section className="py-16">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-navy">Missão</h2>
            <p className="mt-4 leading-relaxed text-slate">
              Ser a parceira técnica de referência para operações VTEX que
              precisam de implantação, migração, evolução contínua e automações
              que realmente entram na rotina — sem teatro de slides.
            </p>
            <h2 className="mt-10 font-display text-3xl tracking-tight text-navy">
              eFcinco + Iugis
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              A eFcinco constrói e evolui a loja. A Iugis automatiza atendimento
              e receita no WhatsApp. Juntas, formam um ecossistema coerente:
              mesma visão de operação, menos fornecedores desalinhados.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/code-v2.jpg"
              alt="Desenvolvimento front-end e engenharia VTEX"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-navy/10 bg-mist/60 py-16">
        <Container>
          <h2 className="font-display text-3xl tracking-tight text-navy">Como trabalhamos</h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Profundidade VTEX",
                text: "IO e Legacy, Store Framework, integrações e SEO aplicado na plataforma.",
              },
              {
                title: "Proximidade com o negócio",
                text: "Priorizamos o que move conversão, estabilidade e autonomia do time interno.",
              },
              {
                title: "Produto próprio",
                text: "Iugis prova capacidade de engenharia além da prestação de serviço.",
              },
            ].map((item) => (
              <li key={item.title} className="border-t-2 border-brand pt-5">
                <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-slate">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title="Vamos nos conhecer?"
        description="Conte o estágio da sua operação VTEX. Retornamos com um diagnóstico objetivo."
      />
    </>
  );
}

export { default } from "../v3/sobre/page";
