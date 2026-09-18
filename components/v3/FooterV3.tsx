import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ShieldCheck, Lock, Award } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";
import { siteConfig } from "@/lib/seo/site";

const serviceLinks = [
  { href: "/servicos-vtex/implantacao-vtex-io", label: "Implantação" },
  { href: "/servicos-vtex/migracao-vtex-io", label: "Migração" },
  { href: "/servicos-vtex/manutencao-vtex", label: "Manutenção" },
  { href: "/servicos-vtex/seo-vtex", label: "SEO e GEO" },
  { href: "/tracking-e-medicao", label: "Tracking e medição" },
  { href: "/google-ads-e-meta-ads", label: "Google Ads e Meta" },
];

const iugisLinks = [
  { href: "/automacoes-iugis", label: "Plataforma" },
  { href: "/automacoes-iugis", label: "Chatbot IA" },
  { href: "/automacoes-iugis", label: "Automações" },
  { href: "/#planos-iugis", label: "Planos" },
];

const companyLinks = [
  { href: "/cases", label: "Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

const legalLinks = [
  { href: "/termos", label: "Termos de uso" },
  { href: "/privacidade", label: "Privacidade" },
];

const certifications = [
  { icon: Award, label: "Partner VTEX" },
  { icon: ShieldCheck, label: "SSL Secure" },
  { icon: Lock, label: "LGPD Compliant" },
];

export function FooterV3() {
  return (
    <footer className="border-t border-white/10 bg-luxury-black text-white">
      <section className="bg-charcoal py-10 sm:py-14">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="store-newsletter grid items-center gap-8 lg:grid-cols-[1fr_.85fr]">
            <div className="relative">
              <p className="font-mono text-xs font-bold uppercase tracking-[.08em] text-[#d3d9de]">eFcinco insider</p>
              <h2 className="mt-4 max-w-lg font-display text-4xl font-bold leading-none tracking-[-.02em] text-white sm:text-5xl">
                Conteúdo técnico, sem cara de conteúdo genérico.
              </h2>
            </div>
            <div className="relative"><NewsletterForm inverted /></div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start">
              <Link href="/" title="Ir para a home" className="inline-block transition hover:opacity-80">
                <Image
                  src="/brand/efcinco-logo.svg"
                  alt="eFcinco"
                  width={180}
                  height={41}
                  className="h-9 w-auto"
                  style={{ width: "auto", height: "auto" }}
                  unoptimized
                />
              </Link>
              <Link
                href="/sobre"
                title="Sobre a eFcinco"
                className="mt-3 text-sm font-semibold text-white/80 transition hover:text-[#d3d9de] hover:underline"
              >
                Sobre a eFcinco
              </Link>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/65">
              <a
                href={`mailto:${siteConfig.email}`}
                title={`Enviar e-mail para ${siteConfig.email}`}
                className="link-underline flex items-center gap-2 hover:text-[#d3d9de]"
              >
                <Mail size={16} />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                title={`Ligar para ${siteConfig.phone}`}
                className="link-underline flex items-center gap-2 hover:text-[#d3d9de]"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
            </div>
            <div className="mt-4 flex gap-3">
              {siteConfig.sameAs.map((url) => {
                const isLinkedIn = url.includes("linkedin");
                return (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/75 transition hover:bg-[#d3d9de] hover:text-luxury-black"
                    aria-label={isLinkedIn ? "LinkedIn" : "Instagram"}
                    title={isLinkedIn ? "LinkedIn da eFcinco" : "Instagram da eFcinco"}
                  >
                    {isLinkedIn ? (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white">Serviços</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    title={link.label}
                    className="link-underline text-sm text-white/65 hover:text-[#d3d9de]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Iugis */}
          <div>
            <h3 className="font-semibold text-white">Iugis</h3>
            <ul className="mt-4 space-y-2.5">
              {iugisLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    title={link.label}
                    className="link-underline text-sm text-white/65 hover:text-[#d3d9de]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-semibold text-white">Empresa</h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={link.label}
                    className="link-underline text-sm text-white/65 hover:text-[#d3d9de]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guia de compra */}
          <div>
            <h3 className="font-semibold text-white">Precisa de ajuda?</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/65">Monte sua proposta com um especialista e encontre a solução certa para o momento da sua loja.</p>
            <Link href="/contato" title="Falar com consultor" className="mt-5 inline-flex rounded-full bg-[#006db1] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#005a93]">
              Falar com consultor
            </Link>
          </div>
        </div>

        {/* Certifications & Payment */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.label}
                  className="flex items-center gap-2 text-sm text-white/65"
                >
                  <cert.icon size={18} className="text-[#d3d9de]" />
                  <span>{cert.label}</span>
                </div>
              ))}
            </div>
            <div className="text-sm text-white/65">
              <span className="font-medium">Formas de contratação:</span> Projeto, sprint ou squad
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/55">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName} • Fundada em{" "}
            {siteConfig.foundingYear}
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                title={link.label}
                className="link-underline hover:text-[#d3d9de]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        title="Conversar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
          <path d="M20.52 3.45A11.82 11.82 0 0 0 12.07 0C5.55 0 .25 5.3.25 11.82c0 2.08.54 4.1 1.57 5.88L.15 23.8l6.25-1.64a11.77 11.77 0 0 0 5.66 1.44h.01c6.52 0 11.82-5.3 11.82-11.82 0-3.16-1.23-6.12-3.37-8.33ZM12.07 21.6c-1.8 0-3.57-.48-5.12-1.39l-.37-.22-3.71.97.99-3.62-.24-.37a9.75 9.75 0 0 1-1.5-5.15c0-5.38 4.38-9.76 9.77-9.76 2.61 0 5.07 1.02 6.92 2.87a9.7 9.7 0 0 1 2.86 6.92c0 5.38-4.38 9.76-9.77 9.76Zm5.35-7.32c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.2-.34.22-.63.07-.29-.15-1.21-.45-2.3-1.44-.85-.75-1.42-1.68-1.59-1.97-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.7-.7 1.94-1.38.24-.69.24-1.28.17-1.4-.07-.12-.26-.19-.55-.34Z" />
        </svg>
      </a>
    </footer>
  );
}
