import Link from "next/link";
import { cases } from "@/content/cases";
import { CaseLogo } from "./CaseLogo";

function LogoTile({ item, hidden = false }: { item: (typeof cases)[number]; hidden?: boolean }) {
  return (
    <Link
      href={`/cases/${item.slug}`}
      title={item.title}
      tabIndex={hidden ? -1 : undefined}
      className="group relative block h-16 w-40 overflow-hidden"
    >
      <CaseLogo src={item.image} alt={hidden ? "" : `Logo ${item.client}`} onDark={item.logoOnDark} sizes="160px" compact mono />
    </Link>
  );
}

export function CaseLogoMarquee() {
  return (
    <section id="colecao-cases" aria-labelledby="clientes-titulo" className="overflow-hidden border-y border-mist bg-white py-10">
      <p id="clientes-titulo" className="mb-6 text-center text-xs font-bold uppercase tracking-[.12em] text-muted">
        Lojas que confiam na eFcinco
      </p>
      <div className="hidden flex-wrap justify-center gap-6 px-5 motion-reduce:flex">
        {cases.map((item) => <LogoTile key={item.slug} item={item} />)}
      </div>
      <div className="motion-reduce:hidden">
        <div className="marquee case-logo-marquee">
          {[false, true].map((hidden) => (
            <ul key={String(hidden)} className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
              {cases.map((item) => (
                <li key={item.slug}><LogoTile item={item} hidden={hidden} /></li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
