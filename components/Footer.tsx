import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/seo/site";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" aria-label="eFcinco — página inicial" className="inline-block">
              <Image
                src="/brand/efcinco-logo.png"
                alt="eFcinco"
                width={200}
                height={44}
                className="h-10 w-auto mix-blend-lighten"
              />
            </Link>
            <Link
              href="/iugis"
              aria-label="Iugis"
              className="mt-4 inline-block opacity-70 transition hover:opacity-100"
            >
              <Image
                src="/brand/iugis-logo.png"
                alt="Iugis"
                width={130}
                height={40}
                className="h-7 w-auto mix-blend-lighten"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {siteConfig.description}
            </p>
            <p className="mt-6 text-sm text-white/55">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-soft">
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
              Serviços
            </p>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
              Iugis & Empresa
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <Link href="/iugis" className="hover:text-white">
                  Plataforma Iugis
                </Link>
              </li>
              <li>
                <Link href="/iugis/planos" className="hover:text-white">
                  Planos Iugis
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-white">
                  Cases
                </Link>
              </li>
              <li>
                <Link href="/v3/blog" className="hover:text-white">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-white">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
              Legal & Social
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <Link href="/privacidade" className="hover:text-white">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-white">
                  Termos
                </Link>
              </li>
              {siteConfig.sameAs.map((url) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {url.includes("linkedin") ? "LinkedIn" : "Instagram"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Especialistas em VTEX IO, Legacy e automação com Iugis.</span>
            <Link href="/v2" className="text-white/70 underline-offset-2 hover:text-white hover:underline">
              Versão clean
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
