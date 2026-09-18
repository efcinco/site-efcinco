import { buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Bot, Gauge, Layers3, MessageCircle, PackageCheck, ShieldCheck } from "lucide-react";
import { HeroV3 } from "@/components/v3/HeroV3";
import { ServicesGrid } from "@/components/v3/ServicesGrid";
import { CaseLogoMarquee } from "@/components/v3/CaseLogoMarquee";
import { TestimonialWall } from "@/components/v3/TestimonialWall";
import { FaqSection } from "@/components/v3/FaqSection";
import { CtaBanner } from "@/components/v3/CtaBanner";
import { homeFaqs } from "@/content/faq-home";
import { JsonLd, faqJsonLd } from "@/lib/seo/jsonld";

export const metadata = buildMetadata({
  title: "eFcinco",
  description:
    "eFcinco: implantação, migração e evolução de e-commerces VTEX. SEO técnico, UX de conversão e plataforma Iugis de automação e IA para WhatsApp.",
  path: "/",
});

export default function PageV3() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <HeroV3 />
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-10">
          <div className="store-value-strip">
            <StoreValue icon={<ShieldCheck size={21} />} label="Método validado" text="Diagnóstico antes de desenvolver" />
            <StoreValue icon={<PackageCheck size={21} />} label="Entrega assistida" text="Do discovery ao go-live" />
            <StoreValue icon={<Gauge size={21} />} label="Foco em receita" text="SEO, GEO, UX e performance na rota" />
            <StoreValue icon={<MessageCircle size={21} />} label="Time próximo" text="Especialistas VTEX de verdade" />
          </div>
        </div>
      </section>
      <section className="store-section bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="store-section-heading">
            <div>
              <p className="eyebrow">Por objetivo</p>
              <h2 className="mt-3">O que sua operação precisa agora?</h2>
            </div>
            <Link href="/#vitrine-servicos" title="Ver todos os serviços" className="hidden text-sm font-bold text-ink underline underline-offset-4 transition hover:text-accent sm:block">Ver todos os serviços</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CategoryCard href="/servicos-vtex/implantacao-vtex-io" icon={<Layers3 size={20} />} title="Lançar uma loja" text="Implantação VTEX IO do zero" />
            <CategoryCard href="/servicos-vtex/migracao-vtex-io" icon={<PackageCheck size={20} />} title="Migrar com segurança" text="Legacy para IO sem perder SEO e GEO" />
            <CategoryCard href="/servicos-vtex/seo-vtex" icon={<Gauge size={20} />} title="Vender mais" text="SEO, GEO e conversão" />
            <CategoryCard href="/automacoes-iugis" icon={<Bot size={20} />} title="Automatizar operação" text="Iugis para WhatsApp e carrinho" />
          </div>
        </div>
      </section>
      <ServicesGrid />
      <section id="automacoes" className="store-section bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="store-banner-card">
            <Image src="/images/chat-v2.jpg" alt="Automação de atendimento para e-commerce com Iugis" fill className="object-cover opacity-70" sizes="100vw" />
            <div className="store-banner-content text-white">
              <p className="eyebrow">Iugis · automação no WhatsApp</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-[-.03em] sm:text-5xl">O pós‑clique também vende.</h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">Chatbot IA, recuperação de carrinho e rastreio proativo conectados à sua operação VTEX.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/automacoes-iugis" title="Conhecer a Iugis" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-ink transition hover:bg-paper">Conhecer a Iugis</Link>
                <Link href="/automacoes-iugis#planos-iugis" title="Ver planos" className="rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">Ver planos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CaseLogoMarquee />
      <TestimonialWall />
      <FaqSection faqs={homeFaqs} />
      <CtaBanner />
    </>
  );
}

function StoreValue({ icon, label, text }: { icon: ReactNode; label: string; text: string }) {
  return <div className="flex items-start gap-3">
    <span className="mt-0.5 text-accent">{icon}</span>
    <p className="text-sm text-muted"><strong className="block text-ink">{label}</strong>{text}</p>
  </div>;
}

function CategoryCard({ href, icon, title, text }: { href: string; icon: ReactNode; title: string; text: string }) {
  return (
    <Link href={href} title={title} className="group flex min-h-40 flex-col rounded-2xl border border-mist bg-white p-6 transition sm:min-h-56 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">{icon}</span>
      <h3 className="mt-auto pt-5 font-display text-2xl font-bold text-ink sm:pt-8">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">Explorar <ArrowRight size={15} className="transition group-hover:translate-x-0.5" /></span>
    </Link>
  );
}
