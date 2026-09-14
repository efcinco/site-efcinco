import Link from "next/link";
import { cases } from "@/content/cases";
import { CaseLogo } from "./CaseLogo";

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-6 pr-6" aria-hidden={hidden || undefined}>
      {cases.map((item) => (
        <li key={item.slug}>
          <Link
            href={`/cases/${item.slug}`}
            title={item.title}
            tabIndex={hidden ? -1 : undefined}
            className="relative block h-16 w-40 overflow-hidden ring-1 ring-soft-beige transition hover:ring-gold/50"
          >
            <CaseLogo src={item.image} alt={hidden ? "" : `Logo ${item.client}`} onDark={item.logoOnDark} sizes="160px" compact />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function CaseLogoMarquee() {
  return (
    <section id="colecao-cases" aria-label="Logos dos cases" className="overflow-hidden border-y border-soft-beige bg-white py-8">
      <div className="hidden flex-wrap justify-center gap-6 px-5 motion-reduce:flex">
        {cases.map((item) => (
          <Link
            key={item.slug}
            href={`/cases/${item.slug}`}
            title={item.title}
            className="relative block h-16 w-40 overflow-hidden ring-1 ring-soft-beige"
          >
            <CaseLogo src={item.image} alt={`Logo ${item.client}`} onDark={item.logoOnDark} sizes="160px" compact />
          </Link>
        ))}
      </div>
      <div className="motion-reduce:hidden">
        <div className="marquee case-logo-marquee">
          <LogoSet />
          <LogoSet hidden />
        </div>
      </div>
    </section>
  );
}
