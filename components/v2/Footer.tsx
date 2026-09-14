import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo/site";

export function FooterV2() {
  return (
    <footer className="border-t border-ink/8 bg-white">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/v2" aria-label="eFcinco" className="inline-block rounded-md bg-ink px-2.5 py-1.5">
              <Image
                src="/brand/efcinco-logo.png"
                alt="eFcinco"
                width={160}
                height={36}
                className="h-7 w-auto mix-blend-lighten"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate">
              Especialistas em VTEX IO, Legacy, SEO técnico e UX de conversão.
              Também atuamos com Uappi e automações.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">
                Navegar
              </p>
              <ul className="mt-3 space-y-2 text-ink/70">
                <li>
                  <Link href="/v2/servicos" className="hover:text-brand">
                    Serviços VTEX
                  </Link>
                </li>
                <li>
                  <Link href="/v2/automacoes" className="hover:text-brand">
                    Automações
                  </Link>
                </li>
                <li>
                  <Link href="/v2/cases" className="hover:text-brand">
                    Cases
                  </Link>
                </li>
                <li>
                  <Link href="/v2/contato" className="hover:text-brand">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">
                Versões
              </p>
              <ul className="mt-3 space-y-2 text-ink/70">
                <li>
                  <Link href="/" className="hover:text-brand">
                    Versão clássica
                  </Link>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-brand"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-ink/8 pt-6 text-xs text-ink/40">
          © {new Date().getFullYear()} {siteConfig.name}. VTEX é a plataforma
          principal.
        </p>
      </div>
    </footer>
  );
}
