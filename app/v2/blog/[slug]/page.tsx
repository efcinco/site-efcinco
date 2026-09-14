import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeroV2 } from "@/components/v2/PageHero";
import { SectionV2 } from "@/components/v2/Section";
import { Faq } from "@/components/Faq";
import { getPostBySlug, posts } from "@/content/blog/posts";
import {
  JsonLd,
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  howToJsonLd,
} from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/v2/blog/${post.slug}`,
    canonicalPath: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    authors: [post.author],
  });
}

function renderParagraph(text: string, index: number) {
  if (text.startsWith("## ")) {
    return (
      <h2 key={index} className="mt-10 font-display text-2xl tracking-tight text-ink">
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

export default async function V2BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Início", path: "/v2" },
    { name: "Insights", path: "/v2/blog" },
    { name: post.title, path: `/v2/blog/${post.slug}` },
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
      <PageHeroV2
        eyebrow={post.tags.join(" · ")}
        title={post.title}
        description={post.description}
        image="/images/v2/analytics.jpg"
        crumbs={crumbs}
      />
      <SectionV2>
        <article className="mx-auto max-w-3xl">
          <p className="text-sm text-slate">
            {post.author} ·{" "}
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString("pt-BR")}
            </time>
          </p>
          <div className="mt-2">
            {post.content.map((paragraph, index) =>
              renderParagraph(paragraph, index),
            )}
          </div>
          <p className="mt-10 text-sm text-slate">
            <Link href="/v2/servicos" className="font-semibold text-brand hover:underline">
              Serviços VTEX
            </Link>{" "}
            ·{" "}
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              Versão clássica
            </Link>
          </p>
        </article>
      </SectionV2>
      {post.faq ? <Faq items={post.faq} /> : null}
    </>
  );
}
