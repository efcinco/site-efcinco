import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageHeroV2 } from "@/components/v2/PageHero";
import { SectionV2 } from "@/components/v2/Section";
import { posts } from "@/content/blog/posts";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Insights VTEX e SEO",
  description:
    "Artigos sobre migração VTEX IO, SEO técnico, Core Web Vitals e automações.",
  path: "/v2/blog",
  canonicalPath: "/blog",
});

const crumbs = [
  { name: "Início", path: "/v2" },
  { name: "Insights", path: "/v2/blog" },
];

const imgs = [
  "/images/v2/code.jpg",
  "/images/v2/analytics.jpg",
  "/images/v2/chat.jpg",
  "/images/v2/mobile.jpg",
  "/images/v2/server.jpg",
];

export default function V2BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHeroV2
        eyebrow="Insights"
        title="Conteúdo para lojistas VTEX"
        description="Migração VTEX IO, SEO técnico, Core Web Vitals e automação — pensado para ranquear e converter."
        image="/images/v2/analytics.jpg"
        imageAlt="SEO e analytics para e-commerce"
        crumbs={crumbs}
      />
      <SectionV2>
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.03}>
              <li>
                <Link
                  href={`/v2/blog/${post.slug}`}
                  className="group flex flex-col gap-4 py-7 sm:flex-row sm:items-center"
                >
                  <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-40">
                    <Image
                      src={imgs[i % imgs.length]}
                      alt=""
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="160px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                      {post.tags.join(" · ")}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold group-hover:text-brand">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </SectionV2>
    </>
  );
}
