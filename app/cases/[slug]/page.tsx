import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { cases, getCaseBySlug } from "@/content/cases";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.summary,
    path: `/cases/${item.slug}`,
    type: "article",
  });
}

async function LegacyCasePage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Cases", path: "/cases" },
    { name: item.client, path: `/cases/${item.slug}` },
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
      <PageHero
        eyebrow={item.segment}
        title={item.title}
        description={item.summary}
        image={item.image}
        imageAlt={item.title}
        breadcrumbs={crumbs}
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl tracking-tight text-navy">Desafio</h2>
          <p className="mt-3 leading-relaxed text-slate">{item.challenge}</p>

          <h2 className="mt-10 font-display text-2xl tracking-tight text-navy">Solução</h2>
          <p className="mt-3 leading-relaxed text-slate">{item.solution}</p>

          <h2 className="mt-10 font-display text-2xl tracking-tight text-navy">Resultados</h2>
          <ul className="mt-4 space-y-2 text-slate">
            {item.results.map((result) => (
              <li key={result} className="border-l-2 border-brand pl-4">
                {result}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-2xl tracking-tight text-navy">Stack</h2>
          <p className="mt-3 text-slate">{item.stack.join(" · ")}</p>

          {item.testimonial ? (
            <blockquote className="mt-12 border-l-2 border-brand pl-6">
              <p className="font-display text-2xl tracking-tight text-navy">
                “{item.testimonial.quote}”
              </p>
              <footer className="mt-4 text-sm text-slate">
                <strong className="text-navy">{item.testimonial.author}</strong>
                <span className="block">{item.testimonial.role}</span>
              </footer>
            </blockquote>
          ) : null}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}

export { default } from "../../v3/cases/[slug]/page";
