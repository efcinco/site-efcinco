import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/content/blog/posts";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata, ogImageUrl } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Insights VTEX, SEO e Automação",
  description:
    "Artigos da eFcinco sobre migração VTEX IO, SEO técnico, GEO, Core Web Vitals, WhatsApp e plataforma Iugis.",
  path: "/blog",
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Conteúdos", path: "/blog" },
];

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${date}T12:00:00`));

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <section className="store-section bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="store-section-heading">
            <div>
              <p className="eyebrow">Conteúdos</p>
              <h1 className="mt-3">Guias práticos para quem opera e‑commerce.</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">VTEX IO, migração, SEO técnico, GEO, performance e automação, escritos por quem implementa no dia a dia.</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <article key={post.slug} className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-mist transition hover:-translate-y-1 hover:shadow-lg">
                <Link href={`/blog/${post.slug}`} title={post.title} tabIndex={-1} aria-hidden="true" className="block aspect-[1200/630] overflow-hidden bg-ink">
                  {/* Capa gerada pela mesma rota das imagens de compartilhamento. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ogImageUrl(post.title, post.tags[0])} alt="" width={1200} height={630} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted">
                    <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.tags.slice(0, 2).join(", ")}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-bold leading-snug text-ink group-hover:text-brand sm:text-2xl">
                    <Link href={`/blog/${post.slug}`} title={post.title}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand">Ler artigo <ArrowRight size={15} /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
