import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDownRight, ArrowRight, CheckCircle2, Code2, Gauge, MessageCircle, ShieldCheck } from "lucide-react";
import { CaseLogo } from "@/components/v3/CaseLogo";
import { buildMetadata } from "@/lib/seo/metadata";
import { cases } from "@/content/cases";
import { siteConfig } from "@/lib/seo/site";

export const metadata = buildMetadata({
  title: "Sobre a eFcinco",
  description: "A eFcinco une mais de 10 anos de experiência em e-commerce VTEX à plataforma própria Iugis.",
  path: "/sobre",
});

export default function SobreV3Page() {
  const yearsOfExperience = new Date().getFullYear() - siteConfig.foundingYear;

  return (
    <>
      <section className="overflow-hidden bg-luxury-black text-white">
        <div className="mx-auto grid min-h-[44rem] max-w-[1440px] gap-10 px-5 py-12 sm:px-10 lg:grid-cols-[1.15fr_.85fr] lg:px-16 lg:py-16">
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[.08em] text-gold">Desde {siteConfig.foundingYear} • e-commerce em movimento</p>
              <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[.92] tracking-[-.02em] sm:text-6xl xl:text-[5.5rem] xl:leading-[.88] xl:tracking-[-.02em]">A loja não pode parar.<br /><span className="text-gold">A gente também não.</span></h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">A eFcinco é a parceira técnica para empresas que precisam transformar e-commerce em uma operação mais rápida, confiável e preparada para crescer.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contato" title="Montar uma proposta" className="inline-flex items-center rounded-full bg-[#006db1] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#005a93]">Montar uma proposta <ArrowRight size={17} className="ml-2" /></Link>
              <Link href="/cases" title="Conhecer cases" className="inline-flex items-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">Conhecer cases</Link>
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden bg-charcoal">
            <Image src="/images/team-v2.jpg" alt="Profissionais da eFcinco colaborando em uma operação de e-commerce" fill priority className="object-cover opacity-80" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="font-mono text-xs font-bold uppercase tracking-[.08em] text-gold">O que nos move</p>
              <p className="mt-3 max-w-sm text-2xl font-semibold leading-tight">Tirar complexidade da operação para abrir espaço para vender.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-soft-beige bg-white">
        <div className="mx-auto grid max-w-[1440px] divide-y divide-soft-beige px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-10">
          <Stat label="Experiência dedicada" value={`${yearsOfExperience}+ anos`} text="Criando, migrando e evoluindo operações digitais." />
          <Stat label="Foco de plataforma" value="VTEX + Uappi" text="Estratégia e desenvolvimento para comércio de alta exigência." />
          <Stat label="Extensão da operação" value="Iugis" text="Automação de conversas que move receita no WhatsApp." />
        </div>
      </section>

      <section className="store-section bg-cream">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[.08em] text-gold-hover">Nosso ponto de vista</p>
              <h2 className="mt-4 font-display text-5xl font-bold leading-[.92] tracking-[-.02em] text-luxury-black">Não entregamos só uma interface bonita.</h2>
            </div>
            <div className="text-lg leading-relaxed text-warm-gray">
              <p>Uma loja pode ter um layout impecável e ainda assim perder vendas por causa de um catálogo confuso, uma integração instável ou um checkout que não acompanha o ritmo da operação.</p>
              <p className="mt-5">Por isso, olhamos para o todo: tecnologia, experiência, dados, conteúdo, SEO e atendimento. Cada decisão precisa facilitar a compra de alguém e a operação de quem está por trás dela.</p>
            </div>
          </div>
          <div className="mt-14 grid gap-px bg-soft-beige md:grid-cols-3">
            <Capability icon={<Code2 size={24} />} number="01" title="Construir a base" text="Implantações e migrações com arquitetura, catálogo, integrações e critérios de qualidade." />
            <Capability icon={<Gauge size={24} />} number="02" title="Fazer evoluir" text="UX, SEO técnico e GEO, performance e sprints para manter a loja competitiva." />
            <Capability icon={<MessageCircle size={24} />} number="03" title="Continuar a conversa" text="Iugis conecta atendimento, status de pedido e recuperação de carrinho ao WhatsApp." />
          </div>
        </div>
      </section>

      <section className="store-section bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-10 lg:grid-cols-[1fr_.9fr]">
          <div className="relative min-h-[28rem] overflow-hidden bg-soft-beige">
            <Image src="/images/collab-v2.jpg" alt="Colaboração entre estratégia e desenvolvimento na eFcinco" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[.08em] text-gold-hover">Como trabalhamos</p>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[.92] tracking-[-.02em] text-luxury-black">Proximidade sem improviso.</h2>
            <div className="mt-8 grid gap-5">
              {[
                ["Diagnóstico que vai além do briefing", "Entendemos negócio, jornada, operação e os riscos que não podem chegar ao go-live."],
                ["Prioridade que faz sentido para receita", "Organizamos o backlog pelo impacto em conversão, estabilidade e autonomia do time."],
                ["Entrega que continua depois da publicação", "Validamos, medimos e evoluímos a solução com a realidade da sua operação."],
              ].map(([title, text], index) => <div key={title} className="flex gap-4 border-t border-soft-beige pt-5"><span className="font-mono text-sm font-bold text-[#006db1]">0{index + 1}</span><div><h3 className="font-bold text-luxury-black">{title}</h3><p className="mt-1 text-sm leading-relaxed text-warm-gray">{text}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="store-section bg-luxury-black text-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.08em] text-gold">Experiência aplicada</p>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[.92] tracking-[-.02em]">Uma trajetória construída ao lado de quem vende todos os dias.</h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-2xl text-lg leading-relaxed text-white/70">A experiência da eFcinco inclui projetos para operações de moda, varejo, tecnologia, climatização e casa — de implantações e migrações a evoluções contínuas de e-commerce.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {cases.map((item) => (
                <Link key={item.client} href={`/cases/${item.slug}`} title={item.title} className="relative flex h-20 items-center justify-center overflow-hidden bg-white px-4 ring-1 ring-white/10 transition hover:-translate-y-0.5">
                  <CaseLogo src={item.image} alt={`Logo ${item.client}`} onDark={item.logoOnDark} sizes="160px" compact />
                </Link>
              ))}
            </div>
            <Link href="/cases" title="Ver como pensamos em cada projeto" className="mt-10 inline-flex w-fit items-center gap-2 font-bold text-gold hover:text-gold-hover hover:underline">Ver como pensamos em cada projeto <ArrowDownRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="store-section bg-[#006db1] text-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-white/80"><ShieldCheck size={21} /><span className="font-mono text-xs font-bold uppercase tracking-[.08em]">Próximo passo</span></div>
            <h2 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[.92] tracking-[-.02em] sm:text-7xl">Seu e-commerce não precisa crescer no escuro.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">Vamos transformar o que hoje trava a operação em uma rota clara de evolução.</p>
          </div>
          <Link href="/contato" title="Começar uma conversa" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-[#006db1] transition hover:bg-soft-beige">Começar uma conversa <ArrowRight size={17} className="ml-2" /></Link>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-8 border-t border-soft-beige pt-10 lg:grid-cols-[.55fr_1fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.08em] text-[#006db1]">Sobre nós</p>
            <div className="mt-5 inline-flex bg-luxury-black px-5 py-4">
              <Image
                src="/brand/efcinco-logo.svg"
                alt="eFcinco"
                width={180}
                height={41}
                className="w-36"
                style={{ height: "auto" }}
                unoptimized
              />
            </div>
          </div>
          <div>
            <p className="font-display text-3xl font-bold leading-tight tracking-[-.02em] text-luxury-black sm:text-4xl">A eFcinco une estratégia, desenvolvimento e automação para que o e-commerce opere com mais clareza, velocidade e confiança.</p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-warm-gray">Somos uma parceira técnica para operações que precisam crescer sem criar novas camadas de complexidade. Da plataforma ao WhatsApp, ajudamos cada frente da jornada a trabalhar a favor da venda.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value, text }: { label: string; value: string; text: string }) {
  return <div className="p-7 sm:p-9"><p className="font-mono text-[.65rem] font-bold uppercase tracking-[.08em] text-warm-gray">{label}</p><p className="mt-4 font-display text-3xl font-bold tracking-[-.02em] text-luxury-black">{value}</p><p className="mt-2 max-w-xs text-sm leading-relaxed text-warm-gray">{text}</p></div>;
}

function Capability({ icon, number, title, text }: { icon: ReactNode; number: string; title: string; text: string }) {
  return <article className="bg-white p-7 sm:p-9"><div className="flex items-center justify-between text-[#006db1]"><span>{icon}</span><span className="font-mono text-xs font-bold">{number}</span></div><h3 className="mt-12 font-display text-3xl font-bold tracking-[-.02em] text-luxury-black">{title}</h3><p className="mt-4 text-sm leading-relaxed text-warm-gray">{text}</p></article>;
}
