import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { FaqSection } from "@/components/v3/FaqSection";
import { posts } from "@/content/blog/posts";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleJsonLd, JsonLd } from "@/lib/seo/jsonld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};
  return buildMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}`, keywords: post.tags });
}

export default async function V3ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={articleJsonLd({ title: post.title, description: post.description, path: `/blog/${post.slug}`, datePublished: post.datePublished, dateModified: post.dateModified, authorName: post.author })} />
      <article className="bg-white">
        <header className="mx-auto max-w-4xl px-5 pb-12 pt-16 sm:px-10 sm:pt-24">
          <Link href="/blog" title="Todos os conteúdos" className="inline-flex items-center gap-2 text-sm font-bold text-gold-hover transition hover:underline"><ArrowLeft size={16} /> Todos os conteúdos</Link>
          <div className="mt-8 flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="rounded-full bg-soft-beige px-3 py-1 text-xs font-bold text-warm-gray">{tag}</span>)}</div>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[.95] tracking-[-.02em] text-luxury-black sm:text-7xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-warm-gray">{post.description}</p>
          <p className="mt-8 font-mono text-xs text-warm-gray">{post.author} · {new Intl.DateTimeFormat("pt-BR").format(new Date(post.datePublished))}</p>
        </header>
        <div className="mx-auto max-w-3xl px-5 pb-16 sm:px-10">
          <div className="space-y-6 text-lg leading-relaxed text-warm-gray">
            {post.content.map((paragraph, index) => paragraph.startsWith("## ")
              ? <h2 key={index} className="pt-8 font-display text-3xl font-bold tracking-[-.02em] text-luxury-black">{paragraph.slice(3)}</h2>
              : <p key={index}>{paragraph}</p>)}
          </div>
        </div>
      </article>
      {post.faq && <FaqSection faqs={post.faq} title="Perguntas frequentes" />}
    </>
  );
}
