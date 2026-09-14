import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/content/blog/posts";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Conteúdos VTEX",
  description: "Guias técnicos de VTEX IO, SEO, GEO, migração e automação para e-commerce.",
  path: "/blog",
});

export default function BlogV3Page() {
  return (
    <section className="store-section bg-cream">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="store-section-heading">
          <div><p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-gold-hover">Editorial eFcinco</p><h1 className="mt-3">Conteúdo para escolher melhor a próxima solução.</h1></div>
          <Link href="/contato" title="Montar proposta" className="hidden rounded-full bg-luxury-black px-5 py-3 text-sm font-bold text-white transition hover:bg-charcoal sm:block">Montar proposta</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => <article key={post.slug} className="flex min-h-72 flex-col bg-white p-6 ring-1 ring-soft-beige transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-wrap items-center gap-2">{post.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-soft-beige px-3 py-1 text-xs font-bold text-warm-gray">{tag}</span>)}</div>
            <h2 className="mt-5 font-display text-2xl font-bold leading-tight text-luxury-black">{post.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-gray">{post.description}</p>
            <Link href={`/blog/${post.slug}`} title={post.title} className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-gold-hover transition hover:underline">Ler conteúdo <ArrowRight size={15} /></Link>
          </article>)}
        </div>
      </div>
    </section>
  );
}
