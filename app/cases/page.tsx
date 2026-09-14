import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { cases } from "@/content/cases";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Cases VTEX e Iugis",
  description:
    "Cases da eFcinco em migração VTEX IO, evolução contínua e automações Iugis para e-commerce.",
  path: "/cases",
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Cases", path: "/cases" },
];

function LegacyCasesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Cases"
        title="Cases de VTEX, performance e automação"
        description="Projetos que mostram como a eFcinco combina engenharia VTEX com resultados de operação — inclusive com a plataforma Iugis."
        image="/images/analytics-v2.jpg"
        imageAlt="Cases com foco em performance, SEO e conversão"
        breadcrumbs={crumbs}
      />
      <section className="atmosphere py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {cases.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.06}>
                <Link
                  href={`/cases/${item.slug}`}
                  className="group relative flex min-h-80 flex-col justify-end overflow-hidden rounded-2xl p-6 text-white"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="image-zoom object-cover"
                    sizes="(max-width:1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/75 to-deep/25" />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-soft">
                      {item.segment}
                    </p>
                    <h2 className="mt-3 font-display text-2xl tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">
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
      <CtaBand />
    </>
  );
}

export { default } from "../v3/cases/page";
