import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { CaseLogo } from "@/components/v3/CaseLogo";
import { cases } from "@/content/cases";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = cases.find((caseStudy) => caseStudy.slug === slug);
  if (!item) return {};
  return buildMetadata({ title: item.title, description: item.summary, path: `/cases/${item.slug}` });
}

export default async function CaseV3Page({ params }: Props) {
  const { slug } = await params;
  const item = cases.find((caseStudy) => caseStudy.slug === slug);
  if (!item) notFound();
  return (
    <>
      <section className="bg-luxury-black px-5 pb-16 pt-12 text-white sm:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="flex flex-col justify-end"><Link href="/cases" title="Voltar aos cases" className="inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:underline"><ArrowLeft size={16} /> Voltar aos cases</Link><p className="mt-12 font-mono text-xs font-bold uppercase tracking-[.16em] text-gold">{item.client} · {item.segment}</p><h1 className="mt-4 font-display text-5xl font-bold leading-[.95] tracking-[-.06em] sm:text-7xl">{item.title}</h1><p className="mt-6 text-lg leading-relaxed text-white/70">{item.summary}</p></div>
          <div className="relative min-h-80 overflow-hidden bg-white"><CaseLogo src={item.image} alt={`Logo ${item.client}`} onDark={item.logoOnDark} sizes="50vw" /></div>
        </div>
      </section>
      <section className="store-section bg-cream"><div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-10 md:grid-cols-2"><div><p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-gold-hover">Desafio</p><p className="mt-4 text-lg leading-relaxed text-warm-gray">{item.challenge}</p></div><div><p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-gold-hover">Solução</p><p className="mt-4 text-lg leading-relaxed text-warm-gray">{item.solution}</p></div></div></section>
      <section className="store-section bg-white"><div className="mx-auto max-w-[1200px] px-5 sm:px-10"><p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-gold-hover">Resultados</p><div className="mt-6 grid gap-4 sm:grid-cols-3">{item.results.map((result) => <div key={result} className="flex gap-3 border border-soft-beige p-5 text-sm font-semibold text-luxury-black"><CheckCircle2 size={18} className="shrink-0 text-gold-hover" />{result}</div>)}</div><p className="mt-10 text-sm text-warm-gray">Stack: {item.stack.join(" · ")}</p>{item.testimonial ? <blockquote className="mt-10 border-l-2 border-gold pl-5"><p className="font-display text-2xl leading-snug text-luxury-black">“{item.testimonial.quote}”</p><footer className="mt-4 text-sm text-warm-gray"><strong className="text-luxury-black">{item.testimonial.author}</strong> — {item.testimonial.role}</footer></blockquote> : null}</div></section>
    </>
  );
}
