import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaqSection } from "@/components/v3/FaqSection";
import { posts } from "@/content/blog/posts";
import { JsonLd, articleJsonLd, breadcrumbJsonLd, faqJsonLd, howToJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    authors: [post.author],
    eyebrow: post.tags[0],
  });
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${date}T12:00:00`));

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Conteúdos", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];
  const schemas: Record<string, unknown>[] = [
    breadcrumbJsonLd(crumbs),
    articleJsonLd({ title: post.title, description: post.description, path: `/blog/${post.slug}`, datePublished: post.datePublished, dateModified: post.dateModified, authorName: post.author }),
  ];
  if (post.faq) schemas.push(faqJsonLd(post.faq));
  if (post.howTo) schemas.push(howToJsonLd(post.howTo));

  const related = posts
    .filter((item) => item.slug !== post.slug)
    .map((item) => ({ item, shared: item.tags.filter((tag) => post.tags.includes(tag)).length }))
    .sort((a, b) => b.shared - a.shared)
    .slice(0, 2)
    .map(({ item }) => item);
  const updated = post.dateModified !== post.datePublished;

  return (
    <>
      <JsonLd data={schemas} />
      <article className="bg-white">
        <header className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-10 sm:pt-20">
          <Link href="/blog" title="Todos os conteúdos" className="inline-flex items-center gap-2 text-sm font-bold text-brand"><ArrowLeft size={16} /> Todos os conteúdos</Link>
          <div className="mt-8 flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="rounded-full bg-mist px-3 py-1 text-xs font-bold text-muted">{tag}</span>)}</div>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-[-.03em] text-ink sm:text-6xl">{post.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-muted">{post.description}</p>
          <p className="mt-8 flex flex-wrap gap-x-2 border-t border-mist pt-5 text-sm text-muted">
            <span className="font-semibold text-ink">{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
            {updated && <><span aria-hidden="true">·</span><span>atualizado em <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time></span></>}
          </p>
        </header>
        <div className="mx-auto max-w-3xl px-5 pb-16 pt-4 sm:px-10">
          <div className="space-y-6 text-lg leading-[1.75] text-ink/85">
            {post.content.map((paragraph, index) => paragraph.startsWith("## ")
              ? <h2 key={index} className="pt-6 font-display text-3xl font-bold tracking-[-.02em] text-ink">{paragraph.slice(3)}</h2>
              : <p key={index}>{paragraph}</p>)}
          </div>

          <aside className="theme-dark mt-14 rounded-2xl bg-ink p-8 text-white">
            <p className="eyebrow">Próximo passo</p>
            <h2 className="mt-3 font-display text-2xl font-bold">Quer aplicar isso na sua loja?</h2>
            <p className="mt-2 text-white/75">A eFcinco faz um diagnóstico da sua operação e aponta o que priorizar.</p>
            <Link href="/contato" title="Solicitar diagnóstico" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-hover">
              Solicitar diagnóstico <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </article>
      {post.faq && <FaqSection faqs={post.faq} title="Perguntas frequentes" />}
      {related.length > 0 && (
        <section className="store-section bg-paper">
          <div className="mx-auto max-w-4xl px-5 sm:px-10">
            <h2 className="font-display text-2xl font-bold text-ink">Continue lendo</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} title={item.title} className="group rounded-2xl bg-white p-6 ring-1 ring-mist transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-[.12em] text-muted">{item.tags[0]}</p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink group-hover:text-brand">{item.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">Ler artigo <ArrowRight size={14} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
