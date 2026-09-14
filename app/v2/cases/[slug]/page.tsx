import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeroV2 } from "@/components/v2/PageHero";
import { SectionV2 } from "@/components/v2/Section";
import { cases, getCaseBySlug } from "@/content/cases";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.summary,
    path: `/v2/cases/${item.slug}`,
    canonicalPath: `/cases/${item.slug}`,
    type: "article",
  });
}

export default async function V2CasePage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  const crumbs = [
    { name: "Início", path: "/v2" },
    { name: "Cases", path: "/v2/cases" },
    { name: item.client, path: `/v2/cases/${item.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          articleJsonLd({
            title: item.title,
            description: item.summary,
            path: `/cases/${item.slug}`,
            datePublished: "2026-01-15",
            dateModified: "2026-01-15",
            authorName: "Equipe eFcinco",
          }),
        ]}
      />
      <PageHeroV2
        eyebrow={item.segment}
        title={item.title}
        description={item.summary}
        image="/images/v2/analytics.jpg"
        crumbs={crumbs}
      />
      <SectionV2 className="max-w-3xl">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl tracking-tight">Desafio</h2>
          <p className="mt-3 text-slate">{item.challenge}</p>
          <h2 className="mt-10 font-display text-2xl tracking-tight">Solução</h2>
          <p className="mt-3 text-slate">{item.solution}</p>
          <h2 className="mt-10 font-display text-2xl tracking-tight">Resultados</h2>
          <ul className="mt-3 space-y-2 text-slate">
            {item.results.map((r) => (
              <li key={r} className="border-l-2 border-brand pl-4">
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-slate">
            Stack: {item.stack.join(" · ")}
          </p>
          {item.testimonial ? (
            <blockquote className="mt-10 border-l-2 border-brand pl-5">
              <p className="font-display text-xl text-ink">
                “{item.testimonial.quote}”
              </p>
              <footer className="mt-3 text-sm text-slate">
                {item.testimonial.author} — {item.testimonial.role}
              </footer>
            </blockquote>
          ) : null}
          <p className="mt-10 text-sm">
            <Link href={`/cases/${item.slug}`} className="text-brand hover:underline">
              Ver na versão clássica
            </Link>
          </p>
        </div>
      </SectionV2>
    </>
  );
}
