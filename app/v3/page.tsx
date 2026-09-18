import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Bot, Gauge, Layers3, MessageCircle, PackageCheck, ShieldCheck } from "lucide-react";
import { HeroV3 } from "@/components/v3/HeroV3";
import { TrustBar } from "@/components/v3/TrustBar";
import { ServicesGrid } from "@/components/v3/ServicesGrid";
import { PricingTable } from "@/components/v3/PricingTable";
import { CaseLogoMarquee } from "@/components/v3/CaseLogoMarquee";
import { TestimonialWall } from "@/components/v3/TestimonialWall";
import { FaqSection } from "@/components/v3/FaqSection";
import { CtaBanner } from "@/components/v3/CtaBanner";
import { homeFaqs } from "@/content/faq-home";

export default function PageV3() {
  return (
    <>
      <HeroV3 />
      <TrustBar />
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
      <section className="store-section bg-cream">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="store-section-heading">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[.08em] text-gold-hover">Compre por objetivo</p>
              <h2 className="mt-3">Qual resultado você quer colocar no carrinho?</h2>
            </div>
            <Link href="/#vitrine-servicos" title="Ver catálogo completo" className="hidden text-sm font-bold text-luxury-black underline underline-offset-4 transition hover:text-[#006db1] sm:block">Ver catálogo completo</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CategoryCard href="/servicos-vtex/implantacao-vtex-io" image="/images/code-v2.jpg" icon={<Layers3 size={20} />} title="Lançar uma loja" text="Implantação VTEX IO do zero" priority />
            <CategoryCard href="/servicos-vtex/migracao-vtex-io" image="/images/devops-v2.jpg" icon={<PackageCheck size={20} />} title="Migrar com segurança" text="Legacy para IO sem perder SEO e GEO" />
            <CategoryCard href="/servicos-vtex/seo-vtex" image="/images/analytics-v2.jpg" icon={<Gauge size={20} />} title="Vender mais" text="SEO, GEO e conversão" />
            <CategoryCard href="/#automacoes" image="/images/chat-v2.jpg" icon={<Bot size={20} />} title="Automatizar operação" text="Iugis para WhatsApp e carrinho" />
          </div>
        </div>
      </section>
      <ServicesGrid />
      <section id="automacoes" className="store-section bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="store-banner-card">
            <Image src="/images/chat-v2.jpg" alt="Automação de atendimento para e-commerce com Iugis" fill className="object-cover opacity-70" sizes="100vw" />
            <div className="store-banner-content text-white">
              <p className="font-mono text-xs font-bold uppercase tracking-[.08em] text-gold">Coleção Iugis</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-.02em] sm:text-6xl">O pós-clique também vende.</h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">Chatbot IA, recuperação de carrinho e rastreio proativo conectados à sua operação VTEX.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/automacoes-iugis" title="Conhecer a Iugis" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-luxury-black transition hover:bg-cream">Conhecer a Iugis</Link>
                <Link href="/iugis/planos" title="Ver planos" className="rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">Ver planos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingTable />
      <CaseLogoMarquee />
      <TestimonialWall />
      <FaqSection faqs={homeFaqs} />
      <CtaBanner />
    </>
  );
}

function StoreValue({ icon, label, text }: { icon: ReactNode; label: string; text: string }) {
  return <div className="flex items-start gap-3">
    <span className="mt-0.5 text-gold-hover">{icon}</span>
    <p className="text-sm text-warm-gray"><strong className="block text-luxury-black">{label}</strong>{text}</p>
  </div>;
}

function CategoryCard({ href, image, icon, title, text, priority = false }: { href: string; image: string; icon: ReactNode; title: string; text: string; priority?: boolean }) {
  return (
    <Link href={href} title={title} className="group relative min-h-72 overflow-hidden bg-charcoal p-5 text-white transition hover:brightness-110">
      <Image src={image} alt="" fill priority={priority} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} className="object-cover opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-40" sizes="(max-width: 1024px) 50vw, 25vw" />
      <div className="relative flex h-full flex-col">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-gold backdrop-blur">{icon}</span>
        <div className="mt-auto">
          <h3 className="font-display text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-sm text-white/75">{text}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold">Explorar <ArrowRight size={15} /></span>
        </div>
      </div>
    </Link>
  );
}
