import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CaseLogo } from "@/components/v3/CaseLogo";
import { cases } from "@/content/cases";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = cases.find((caseStudy) => caseStudy.slug === slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.summary,
    path: `/cases/${item.slug}`,
    type: "article",
    eyebrow: `Case · ${item.client}`,
  });
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const item = cases.find((caseStudy) => caseStudy.slug === slug);
  if (!item) notFound();

  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Cases", path: "/cases" },
    { name: item.client, path: `/cases/${item.slug}` },
  ];
  const others = cases.filter((caseStudy) => caseStudy.slug !== item.slug).slice(0, 3);

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
      <section className="bg-ink px-5 pb-16 pt-10 text-white sm:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <Link href="/cases" title="Voltar aos cases" className="inline-flex items-center gap-2 text-sm font-bold text-accent"><ArrowLeft size={16} /> Todos os cases</Link>
            <p className="eyebrow mt-10">{item.client} · {item.segment}</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-[-.03em] sm:text-6xl">{item.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{item.summary}</p>
          </div>
          <div className={`relative min-h-64 overflow-hidden rounded-2xl ${item.logoOnDark ? "bg-charcoal ring-1 ring-white/10" : "bg-white"}`}>
            <div className="absolute inset-x-12 inset-y-14">
              <CaseLogo src={item.image} alt={`Logo ${item.client}`} onDark={item.logoOnDark} sizes="(max-width: 1024px) 80vw, 30vw" tight bare />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-mist bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-10">
          <p className="eyebrow">Resultados</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {item.results.map((result) => (
              <li key={result} className="flex gap-3 rounded-2xl bg-brand-soft p-5 font-semibold leading-snug text-ink">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand" />
                {result}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="store-section bg-paper">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Desafio</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{item.challenge}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Solução</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{item.solution}</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1200px] px-5 sm:px-10">
          <ul className="flex flex-wrap gap-2" aria-label="Stack do projeto">
            {item.stack.map((tech) => <li key={tech} className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-muted ring-1 ring-mist">{tech}</li>)}
          </ul>
          {item.testimonial ? (
            <figure className="mt-12 rounded-2xl bg-white p-8 ring-1 ring-mist">
              <blockquote className="font-display text-2xl font-semibold leading-snug text-ink">“{item.testimonial.quote}”</blockquote>
              <figcaption className="mt-5 text-sm text-muted"><strong className="text-ink">{item.testimonial.author}</strong> · {item.testimonial.role}</figcaption>
            </figure>
          ) : null}
        </div>
      </section>

      <section className="store-section bg-white">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          <div className="flex flex-col gap-6 rounded-2xl bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Quer um resultado assim na sua loja?</h2>
              <p className="mt-2 text-white/70">Conte o momento da sua operação e retornamos com um diagnóstico.</p>
            </div>
            <Link href="/contato" title="Solicitar diagnóstico" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-hover">
              Solicitar diagnóstico <ArrowRight size={17} />
            </Link>
          </div>

          <h2 className="mt-16 font-display text-2xl font-bold text-ink">Outros cases</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {others.map((other) => (
              <Link key={other.slug} href={`/cases/${other.slug}`} title={other.title} className="group rounded-2xl border border-mist p-5 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-12 w-32">
                  <CaseLogo src={other.image} alt={`Logo ${other.client}`} onDark={other.logoOnDark} sizes="128px" tight mono />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-ink group-hover:text-brand">{other.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">Ler case <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
