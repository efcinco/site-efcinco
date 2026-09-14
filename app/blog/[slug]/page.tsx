import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Container } from "@/components/ui/Container";
import { getPostBySlug, posts } from "@/content/blog/posts";
import {
  JsonLd,
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  howToJsonLd,
} from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    authors: [post.author],
  });
}

function renderParagraph(text: string, index: number) {
  if (text.startsWith("## ")) {
    return (
      <h2 key={index} className="mt-10 font-display text-2xl text-navy">
        {text.replace("## ", "")}
      </h2>
    );
  }
  return (
    <p key={index} className="mt-4 text-base leading-relaxed text-slate">
      {text}
    </p>
  );
}

async function LegacyBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Insights", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const schemas: Record<string, unknown>[] = [
    breadcrumbJsonLd(crumbs),
    articleJsonLd({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      authorName: post.author,
    }),
  ];

  if (post.faq) schemas.push(faqJsonLd(post.faq));
  if (post.howTo) schemas.push(howToJsonLd(post.howTo));

  return (
    <>
      <JsonLd data={schemas} />
      <article className="atmosphere py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            {post.tags.join(" · ")}
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-tight text-navy sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.datePublished}>
              Publicado em{" "}
              {new Date(post.datePublished).toLocaleDateString("pt-BR")}
            </time>
            <span aria-hidden="true">·</span>
            <time dateTime={post.dateModified}>
              Atualizado em{" "}
              {new Date(post.dateModified).toLocaleDateString("pt-BR")}
            </time>
          </div>
          <p className="mt-8 text-lg leading-relaxed text-graphite">
            {post.description}
          </p>
          <div className="mt-2">
            {post.content.map((paragraph, index) =>
              renderParagraph(paragraph, index),
            )}
          </div>
          <p className="mt-10 text-sm text-slate">
            Quer aplicar isso na sua loja? Veja nossos{" "}
            <Link href="/servicos" className="font-semibold text-brand hover:underline">
              serviços VTEX
            </Link>{" "}
            ou a{" "}
            <Link href="/iugis" className="font-semibold text-brand hover:underline">
              plataforma Iugis
            </Link>
            .
          </p>
        </Container>
      </article>
      {post.faq ? <Faq items={post.faq} /> : null}
      <CtaBand />
    </>
  );
}

export { default } from "../../v3/blog/[slug]/page";
