import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";

export function PageHeroV2({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: { name: string; path: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            loading="eager"
            fetchPriority="high"
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        </>
      ) : null}
      <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-24">
        {crumbs ? (
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/55">
            <ol className="flex flex-wrap gap-2">
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden>/</span> : null}
                  {i === crumbs.length - 1 ? (
                    <span className="text-white">{c.name}</span>
                  ) : (
                    <Link href={c.path} className="hover:text-white">
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
