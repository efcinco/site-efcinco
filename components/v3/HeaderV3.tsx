"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ClipboardList,
  Globe,
  Menu,
  MessageCircle,
  Search,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { useProposalCart } from "./ProposalCart";
import { posts } from "@/content/blog/posts";
import { cases } from "@/content/cases";
import { adsServices } from "@/content/ads-services";
import { iugisServices } from "@/content/iugis-services";
import { services } from "@/content/services";
import { trackingServices } from "@/content/tracking-services";
import { uappiServices } from "@/content/uappi-services";
import { wakeServices } from "@/content/wake-services";
import { siteConfig } from "@/lib/seo/site";
import { useLanguage } from "@/components/LanguageProvider";

const megaBrandLogoClass =
  "h-auto max-h-11 w-auto max-w-32 object-contain object-left transition duration-300 group-hover:scale-105";

const catalogLinks = services.map((service) => ({
  href: `/servicos-vtex/${service.slug}`,
  label: service.shortTitle,
}));

const uappiLinks = uappiServices.map((service) => ({
  href: `/servicos-uappi/${service.slug}`,
  label: service.shortTitle,
}));

const wakeLinks = wakeServices.map((service) => ({
  href: `/servicos-wake/${service.slug}`,
  label: service.shortTitle,
}));

const iugisLinks = iugisServices.map((service) => ({
  href: `/automacoes-iugis/${service.slug}`,
  label: service.shortTitle,
}));

const trackingLinks = trackingServices.map((service) => ({
  href: `/tracking-e-medicao/${service.slug}`,
  label: service.shortTitle,
}));

const adsLinks = adsServices.map((service) => ({
  href: `/google-ads-e-meta-ads/${service.slug}`,
  label: service.shortTitle,
}));

type SearchPage = {
  href: string;
  title: string;
  category: string;
  keywords: string;
};

const searchPages: SearchPage[] = [
  { href: "/", title: "Início eFcinco", category: "Página", keywords: "home e-commerce serviços" },
  { href: "/servicos-vtex", title: "Serviços VTEX", category: "Vitrine", keywords: "vtex plataforma ecommerce" },
  { href: "/servicos-uappi", title: "Serviços Uappi", category: "Vitrine", keywords: "uappi plataforma ecommerce b2b b2c" },
  { href: "/servicos-wake", title: "Serviços Wake", category: "Vitrine", keywords: "wake plataforma ecommerce commerce" },
  { href: "/cases", title: "Cases", category: "Conteúdo", keywords: "clientes resultados portfólio" },
  { href: "/blog", title: "Conteúdos", category: "Conteúdo", keywords: "blog artigos guias vtex ecommerce" },
  { href: "/sobre", title: "A eFcinco", category: "Institucional", keywords: "empresa equipe agência" },
  { href: "/contato", title: "Solicitar proposta", category: "Contato", keywords: "orçamento proposta contato" },
  { href: "/automacoes-iugis", title: "Automações Iugis", category: "Vitrine", keywords: "whatsapp inteligência artificial chatbot carrinho pedido" },
  { href: "/tracking-e-medicao", title: "Tracking e medição", category: "Vitrine", keywords: "gtm ga4 tracking medição pixel meta google ads server-side" },
  { href: "/google-ads-e-meta-ads", title: "Google Ads e Meta Ads", category: "Vitrine", keywords: "google ads meta ads shopping pmax merchant center remarketing" },
  { href: "/automacoes-iugis#planos-iugis", title: "Iugis Chatbot", category: "Automação", keywords: "chatbot ia whatsapp atendimento" },
  { href: "/automacoes-iugis", title: "Iugis Automações", category: "Automação", keywords: "automação carrinho rastreio whatsapp" },
  { href: "/automacoes-iugis#planos-iugis", title: "Planos Iugis", category: "Automação", keywords: "preços planos chatbot automações" },
  ...services.map((service) => ({
    href: `/servicos-vtex/${service.slug}`,
    title: service.shortTitle,
    category: "Serviço VTEX",
    keywords: `${service.keyword} ${service.description}`,
  })),
  ...uappiServices.map((service) => ({
    href: `/servicos-uappi/${service.slug}`,
    title: service.shortTitle,
    category: "Serviço Uappi",
    keywords: `${service.keyword} ${service.description}`,
  })),
  ...wakeServices.map((service) => ({
    href: `/servicos-wake/${service.slug}`,
    title: service.shortTitle,
    category: "Serviço Wake",
    keywords: `${service.keyword} ${service.description}`,
  })),
  ...iugisServices.map((service) => ({
    href: `/automacoes-iugis/${service.slug}`,
    title: service.shortTitle,
    category: "Automação Iugis",
    keywords: `${service.keyword} ${service.description}`,
  })),
  ...trackingServices.map((service) => ({
    href: `/tracking-e-medicao/${service.slug}`,
    title: service.shortTitle,
    category: "Tracking",
    keywords: `${service.keyword} ${service.description}`,
  })),
  ...adsServices.map((service) => ({
    href: `/google-ads-e-meta-ads/${service.slug}`,
    title: service.shortTitle,
    category: "Ads",
    keywords: `${service.keyword} ${service.description}`,
  })),
  ...posts.map((post) => ({
    href: `/blog/${post.slug}`,
    title: post.title,
    category: "Artigo",
    keywords: `${post.description} ${post.tags.join(" ")}`,
  })),
  ...cases.map((caseStudy) => ({
    href: `/cases/${caseStudy.slug}`,
    title: caseStudy.title,
    category: "Case",
    keywords: `${caseStudy.client} ${caseStudy.segment} ${caseStudy.summary}`,
  })),
];

const promoMessages = [
  "Implantação VTEX IO com go-live acompanhado",
  "Migração segura com preservação de SEO, GEO e operação",
  "SEO e GEO para Google e IAs",
  "Automação Iugis para vender e atender no WhatsApp",
];

type MegaId = "vtex" | "uappi" | "wake" | "iugis" | "midia";

export function HeaderV3() {
  const pathname = usePathname();
  const [openedOnPath, setOpenedOnPath] = useState<string | null>(null);
  const mobileOpen = openedOnPath === pathname;
  const [lockedMega, setLockedMega] = useState<MegaId | null>(null);
  const [promoIndex, setPromoIndex] = useState(0);
  const { count, openCart } = useProposalCart();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const timer = window.setInterval(
      () => setPromoIndex((current) => (current + 1) % promoMessages.length),
      4000,
    );
    return () => window.clearInterval(timer);
  }, []);

  const closeMobileMenu = () => setOpenedOnPath(null);

  const closeMega = (id: MegaId) => {
    setLockedMega(id);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  const unlockMega = (id: MegaId) => {
    setLockedMega((current) => (current === id ? null : current));
  };

  return (
    <>
      <ProgressBar />
      <div className="store-promo-bar relative">
        <p key={promoIndex} className="store-promo-message" aria-live="polite">
          {promoMessages[promoIndex]}
        </p>
        <button
          type="button"
          title={language === "pt" ? "View site in English" : "Ver site em português"}
          aria-label={language === "pt" ? "View site in English" : "Ver site em português"}
          className="flex shrink-0 items-center gap-1.5 rounded-full px-2 py-1 text-[.7rem] font-bold tracking-[.08em] text-white/80 ring-1 ring-white/25 transition hover:bg-white/10 hover:text-white sm:absolute sm:right-6"
          onClick={toggleLanguage}
        >
          <Globe size={14} aria-hidden="true" />
          <span lang={language === "pt" ? "en" : "pt-BR"}>{language === "pt" ? "EN" : "PT"}</span>
        </button>
      </div>
      <header className="sticky top-0 z-50 overflow-visible bg-ink/95 text-white backdrop-blur-md">
        <div className="relative mx-auto flex max-w-360 items-center gap-2 px-5 py-2.5 sm:gap-4 sm:py-3 lg:px-10">
          <button
            type="button"
            className="shrink-0 rounded-full p-2.5 text-white hover:bg-white/10 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpenedOnPath((current) => (current === pathname ? null : pathname))}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link href="/" className="shrink-0 transition hover:opacity-80" aria-label="eFcinco — página inicial" title="Ir para a página inicial">
            <Image
              src="/brand/efcinco-logo.svg"
              alt="eFcinco"
              width={200}
              height={44}
              className="aspect-[9052/2009] h-auto w-34 sm:w-40 lg:w-46"
              style={{ height: "auto" }}
              sizes="(min-width: 1024px) 184px, (min-width: 640px) 160px, 136px"
              priority
              unoptimized
            />
          </Link>

          <SiteSearch className="relative z-60 mx-2 hidden min-w-0 flex-1 md:block" />

          <div className="ml-auto flex shrink-0 items-center gap-1">
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="store-icon-link store-icon-link-dark hidden sm:grid" aria-label="Atendimento pelo WhatsApp" title="Atendimento pelo WhatsApp">
              <MessageCircle size={19} />
            </a>
            <button type="button" onClick={openCart} className="store-icon-link store-icon-link-dark relative grid" aria-label={`Sua proposta${count > 0 ? ` (${count} itens)` : ""}`} title="Sua proposta">
              <ClipboardList size={19} />
              {count > 0 && <span className="store-cart-count">{count}</span>}
            </button>
          </div>
        </div>

        <nav className="store-category-nav hidden lg:flex" aria-label="Categorias da loja">
          <div className="mx-auto flex w-full max-w-360 items-center overflow-x-auto px-6 xl:px-10">
            <div
              className={`group/vtex relative${lockedMega === "vtex" ? " is-mega-locked" : ""}`}
              onMouseLeave={() => unlockMega("vtex")}
            >
              <Link href="/servicos-vtex" title="Serviços VTEX" className="store-category-link inline-flex" onClick={() => closeMega("vtex")}>Serviços VTEX <ChevronDown size={15} /></Link>
              <div className="store-mega-menu">
                <div className="grid grid-cols-[1fr_1fr_1.1fr] gap-8 p-7">
                  <div>
                    <p className="store-menu-eyebrow">COMECE POR AQUI</p>
                    {catalogLinks.slice(0, 3).map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMega("vtex")} />)}
                  </div>
                  <div>
                    <p className="store-menu-eyebrow">CRESCIMENTO</p>
                    {catalogLinks.slice(3).map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMega("vtex")} />)}
                  </div>
                  <div className="group relative min-h-48 overflow-hidden rounded-xl bg-charcoal p-6 text-white">
                    <a href="https://vtex.com/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Visitar o site da VTEX" title="Conheça a VTEX" className="relative flex h-11 w-32 items-center">
                      <Image src="/vtex-Logo.svg" alt="VTEX" width={305} height={110} className={megaBrandLogoClass} />
                    </a>
                    <Link href="/servicos-vtex" title="Ver serviços VTEX" className="relative mt-4 block transition hover:opacity-80" onClick={() => closeMega("vtex")}>
                      <span className="text-xs font-semibold uppercase tracking-[.08em] text-accent">Mais procurado</span>
                      <strong className="mt-3 block text-xl">Soluções para e-commerce</strong>
                      <span className="mt-5 inline-block text-sm">Ver serviços VTEX →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`group/uappi relative${lockedMega === "uappi" ? " is-mega-locked" : ""}`}
              onMouseLeave={() => unlockMega("uappi")}
            >
              <Link href="/servicos-uappi" title="Serviços Uappi" className="store-category-link inline-flex" onClick={() => closeMega("uappi")}>Serviços Uappi <ChevronDown size={15} /></Link>
              <div className="store-mega-menu">
                <div className="grid grid-cols-[1fr_1fr_1.1fr] gap-8 p-7">
                  <div>
                    <p className="store-menu-eyebrow">IMPLANTAÇÃO E OPERAÇÃO</p>
                    {uappiLinks.slice(0, 3).map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMega("uappi")} />)}
                  </div>
                  <div>
                    <p className="store-menu-eyebrow">CRESCIMENTO</p>
                    {uappiLinks.slice(3).map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMega("uappi")} />)}
                  </div>
                  <div className="group relative min-h-48 overflow-hidden rounded-xl bg-charcoal p-6 text-white">
                    <a href="https://uappi.com.br/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Visitar o site da Uappi" title="Conheça a Uappi" className="relative flex h-11 w-32 items-center">
                      <Image src="/uappi-logo.svg" alt="Uappi" width={78} height={21} className={megaBrandLogoClass} unoptimized />
                    </a>
                    <Link href="/servicos-uappi" title="Ver todos os serviços Uappi" className="relative mt-4 block transition hover:opacity-80" onClick={() => closeMega("uappi")}>
                      <span className="text-xs font-semibold uppercase tracking-[.08em] text-accent">Uappi</span>
                      <strong className="mt-3 block text-xl">Soluções para sua operação</strong>
                      <span className="mt-5 inline-block text-sm">Ver todos os serviços →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`group/wake relative${lockedMega === "wake" ? " is-mega-locked" : ""}`}
              onMouseLeave={() => unlockMega("wake")}
            >
              <Link href="/servicos-wake" title="Serviços Wake" className="store-category-link inline-flex" onClick={() => closeMega("wake")}>Serviços Wake <ChevronDown size={15} /></Link>
              <div className="store-mega-menu">
                <div className="grid grid-cols-[1fr_1fr_1.1fr] gap-8 p-7">
                  <div>
                    <p className="store-menu-eyebrow">IMPLANTAÇÃO E OPERAÇÃO</p>
                    {wakeLinks.slice(0, 3).map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMega("wake")} />)}
                  </div>
                  <div>
                    <p className="store-menu-eyebrow">CRESCIMENTO</p>
                    {wakeLinks.slice(3).map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMega("wake")} />)}
                  </div>
                  <div className="group relative min-h-48 overflow-hidden rounded-xl bg-charcoal p-6 text-white">
                    <a href="https://www.wake.tech/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Visitar o site da Wake" title="Conheça a Wake" className="relative flex h-11 w-32 items-center">
                      <Image src="/wake-logo.png" alt="Wake" width={215} height={68} className={megaBrandLogoClass} />
                    </a>
                    <Link href="/servicos-wake" title="Ver todos os serviços Wake" className="relative mt-4 block transition hover:opacity-80" onClick={() => closeMega("wake")}>
                      <span className="text-xs font-semibold uppercase tracking-[.08em] text-accent">Wake</span>
                      <strong className="mt-3 block text-xl">Soluções para sua operação</strong>
                      <span className="mt-5 inline-block text-sm">Ver todos os serviços →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`group/iugis relative${lockedMega === "iugis" ? " is-mega-locked" : ""}`}
              onMouseLeave={() => unlockMega("iugis")}
            >
              <Link href="/automacoes-iugis" title="Automações Iugis" className="store-category-link inline-flex" onClick={() => closeMega("iugis")}>Automações Iugis <ChevronDown size={15} /></Link>
              <div className="store-mega-menu">
                <div className="grid grid-cols-[1fr_1.1fr] gap-8 p-7">
                  <div>
                    <p className="store-menu-eyebrow">AUTOMAÇÕES DE COMMERCE</p>
                    {iugisLinks.map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMega("iugis")} />)}
                  </div>
                  <div className="group relative min-h-48 overflow-hidden rounded-xl bg-charcoal p-6 text-white">
                    <Image src="/brand/iugis-logo.png" alt="Iugis" width={124} height={38} className="h-auto w-28" style={{ width: "auto", height: "auto" }} />
                    <Link href="/automacoes-iugis" title="Conhecer a Iugis" className="relative mt-5 block transition hover:opacity-80" onClick={() => closeMega("iugis")}>
                      <span className="text-xs font-semibold uppercase tracking-[.08em] text-accent">Venda no WhatsApp</span>
                      <strong className="mt-3 block text-xl">Recupere oportunidades sem esforço manual.</strong>
                      <span className="mt-5 inline-block text-sm">Conhecer a Iugis →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`group/midia${lockedMega === "midia" ? " is-mega-locked" : ""}`}
              onMouseLeave={() => unlockMega("midia")}
            >
              <Link href="/tracking-e-medicao" title="Tracking e Ads" className="store-category-link inline-flex" onClick={() => closeMega("midia")}>Tracking e Ads <ChevronDown size={15} /></Link>
              <div className="store-mega-menu">
                <div className="grid grid-cols-[1fr_1fr_1.1fr] gap-8 p-7">
                  <div>
                    <p className="store-menu-eyebrow">TRACKING E MEDIÇÃO</p>
                    {trackingLinks.map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMega("midia")} />)}
                  </div>
                  <div>
                    <p className="store-menu-eyebrow">GOOGLE ADS E META ADS</p>
                    {adsLinks.map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMega("midia")} />)}
                  </div>
                  <div className="group relative min-h-48 overflow-hidden rounded-xl bg-charcoal p-6 text-white">
                    <div className="relative flex items-center gap-5">
                      <span className="inline-flex items-center gap-2" aria-label="Google">
                        <Image src="/brand/google-g.svg" alt="Google" width={28} height={28} className="h-7 w-7 transition duration-300 group-hover:scale-105" />
                        <span className="text-lg font-semibold tracking-tight">Google</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5" aria-label="Meta">
                        <Image src="/brand/meta-infinity.svg" alt="" width={28} height={28} className="h-7 w-7 transition duration-300 group-hover:scale-105" />
                        <span className="text-lg font-semibold tracking-tight">Meta</span>
                      </span>
                    </div>
                    <Link href="/tracking-e-medicao" title="Ver tracking e Ads" className="relative mt-4 block transition hover:opacity-80" onClick={() => closeMega("midia")}>
                      <span className="text-xs font-semibold uppercase tracking-[.08em] text-accent">Tracking e Ads</span>
                      <strong className="mt-3 block text-xl">Medição e mídia no mesmo número</strong>
                      <span className="mt-5 inline-block text-sm">Ver todos os serviços →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link className="store-category-link hidden xl:inline-flex" href="/cases" title="Cases">Cases</Link>
            <Link className="store-category-link hidden xl:inline-flex" href="/blog" title="Conteúdos">Conteúdos</Link>
            <Link href="/contato" title="Solicitar proposta" className="ml-auto shrink-0 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-hover xl:px-5 xl:py-2">
              Solicitar proposta
            </Link>
          </div>
        </nav>

        {mobileOpen && (
          <nav className="border-t border-mist bg-white px-5 py-5 lg:hidden" aria-label="Menu móvel">
            <SiteSearch className="relative block" mobile onNavigate={() => closeMobileMenu()} />
            <div className="mt-5 grid gap-1">
              <Link href="/servicos-vtex" title="Todos os serviços VTEX" className="store-mobile-link font-bold" onClick={() => closeMobileMenu()}>Todos os serviços VTEX</Link>
              {catalogLinks.map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMobileMenu()} />)}
              <Link href="/servicos-uappi" title="Todos os serviços Uappi" className="mt-4 store-mobile-link font-bold" onClick={() => closeMobileMenu()}>Todos os serviços Uappi</Link>
              {uappiLinks.map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMobileMenu()} />)}
              <Link href="/servicos-wake" title="Todos os serviços Wake" className="mt-4 store-mobile-link font-bold" onClick={() => closeMobileMenu()}>Todos os serviços Wake</Link>
              {wakeLinks.map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMobileMenu()} />)}
              <Link href="/automacoes-iugis" title="Todas as automações Iugis" className="mt-4 store-mobile-link font-bold" onClick={() => closeMobileMenu()}>Todas as automações Iugis</Link>
              {iugisLinks.map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMobileMenu()} />)}
              <Link href="/tracking-e-medicao" title="Tracking e medição" className="mt-4 store-mobile-link font-bold" onClick={() => closeMobileMenu()}>Tracking e medição</Link>
              {trackingLinks.map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMobileMenu()} />)}
              <Link href="/google-ads-e-meta-ads" title="Google Ads e Meta Ads" className="mt-4 store-mobile-link font-bold" onClick={() => closeMobileMenu()}>Google Ads e Meta Ads</Link>
              {adsLinks.map((link) => <StoreLink key={link.href} {...link} onNavigate={() => closeMobileMenu()} />)}
              <Link href="/cases" title="Cases" className="mt-4 store-mobile-link font-bold" onClick={() => closeMobileMenu()}>Cases</Link>
              <Link href="/blog" title="Conteúdos" className="store-mobile-link font-bold" onClick={() => closeMobileMenu()}>Conteúdos</Link>
              <Link href="/sobre" title="Sobre a eFcinco" className="store-mobile-link font-bold" onClick={() => closeMobileMenu()}>Sobre a eFcinco</Link>
              <Link href="/contato" title="Ver proposta" className="mt-3 rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-hover" onClick={() => closeMobileMenu()}>Solicitar proposta{count > 0 ? ` (${count})` : ""}</Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

function StoreLink({ href, label, onNavigate }: { href: string; label: string; onNavigate?: () => void }) {
  return <Link href={href} title={label} onClick={onNavigate} className="store-menu-link">{label}<span>→</span></Link>;
}

function normalizeSearchText(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
}

function SiteSearch({ className, mobile = false, onNavigate }: { className: string; mobile?: boolean; onNavigate?: () => void }) {
  const [query, setQuery] = useState("");
  const resultsId = useId();
  const normalizedQuery = normalizeSearchText(query.trim());
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const results = terms.length
    ? searchPages.filter((page) => {
      const searchable = normalizeSearchText(`${page.title} ${page.category} ${page.keywords}`);
      return terms.every((term) => searchable.includes(term));
    }).slice(0, 6)
    : [];

  const clearAndNavigate = () => {
    setQuery("");
    onNavigate?.();
  };

  return (
    <div className={className}>
      <label className={`store-search flex ${mobile ? "store-search-mobile" : ""}`}>
        <Search size={18} aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setQuery("");
          }}
          role="combobox"
          aria-autocomplete="list"
          aria-controls={resultsId}
          aria-expanded={terms.length > 0}
          aria-label="Buscar solução, serviço ou conteúdo"
          placeholder="O que sua operação precisa?"
        />
      </label>
      {terms.length > 0 && (
        <div id={resultsId} role="listbox" className="absolute left-0 top-[calc(100%+0.5rem)] z-50 w-full min-w-80 overflow-hidden rounded-xl border border-mist bg-white p-2 text-ink shadow-2xl">
          {results.length > 0 ? results.map((page) => (
            <Link key={page.href} href={page.href} title={page.title} role="option" onClick={clearAndNavigate} className="block rounded-lg px-4 py-3 transition hover:bg-mist hover:text-accent">
              <span className="block text-[0.65rem] font-bold uppercase tracking-[.08em] text-muted">{page.category}</span>
              <span className="mt-1 block text-sm font-bold">{page.title}</span>
            </Link>
          )) : <p className="px-4 py-3 text-sm text-muted">Nenhuma página encontrada para “{query}”.</p>}
        </div>
      )}
    </div>
  );
}
