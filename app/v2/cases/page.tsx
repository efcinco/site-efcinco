import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageHeroV2 } from "@/components/v2/PageHero";
import { SectionV2 } from "@/components/v2/Section";
import { cases } from "@/content/cases";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Cases VTEX",
  description:
    "Cases de migração VTEX IO, evolução contínua e automações para e-commerce.",
  path: "/v2/cases",
  canonicalPath: "/cases",
});

const crumbs = [
  { name: "Início", path: "/v2" },
  { name: "Cases", path: "/v2/cases" },
];

const imgs = ["/images/v2/analytics.jpg", "/images/v2/code.jpg", "/images/v2/chat.jpg"];

export default function V2CasesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHeroV2
        eyebrow="Cases"
        title="Cases de VTEX, performance e automação"
        description="Projetos com foco em migração VTEX IO, SEO técnico e operação."
        image="/images/v2/analytics.jpg"
        imageAlt="Analytics e performance de e-commerce"
        crumbs={crumbs}
      />
      <SectionV2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.05}>
              <Link href={`/v2/cases/${item.slug}`} className="group block">
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={imgs[i % imgs.length]}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, 33vw"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  {item.segment}
                </p>
                <h2 className="mt-2 font-display text-xl tracking-tight group-hover:text-brand">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-slate line-clamp-3">{item.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </SectionV2>
    </>
  );
}
