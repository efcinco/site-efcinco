import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { posts } from "@/content/blog/posts";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Insights VTEX, SEO e Automação",
  description:
    "Artigos da eFcinco sobre migração VTEX IO, SEO técnico, GEO, Core Web Vitals, WhatsApp e plataforma Iugis.",
  path: "/blog",
});

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Insights", path: "/blog" },
];

const postImages = [
  "/images/devops-v2.jpg",
  "/images/analytics-v2.jpg",
  "/images/chat-v2.jpg",
  "/images/code-v2.jpg",
  "/images/mobile-v2.jpg",
];

function LegacyBlogPage() {
  redirect("/v3/blog");
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Insights"
        title="Insights para lojistas VTEX"
        description="Conteúdo técnico e operacional para ranquear melhor, converter mais e automatizar com Iugis."
        image="/images/analytics-v2.jpg"
        imageAlt="Analytics, SEO e métricas de e-commerce"
        breadcrumbs={crumbs}
      />
      <section className="atmosphere py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-xl bg-white ring-1 ring-navy/8 transition hover:-translate-y-1 hover:ring-brand/40"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={postImages[index % postImages.length]}
                      alt=""
                      fill
                      className="image-zoom object-cover"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                      {post.tags.join(" · ")}
                    </p>
                    <h2 className="mt-3 text-xl font-semibold text-navy group-hover:text-brand">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate">
                      {post.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <time className="text-xs text-slate" dateTime={post.datePublished}>
                        {new Date(post.datePublished).toLocaleDateString("pt-BR")}
                      </time>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
                        Ler
                        <Icon icon={ArrowRight} size={16} className="text-brand" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export { default } from "../v3/blog/page";
