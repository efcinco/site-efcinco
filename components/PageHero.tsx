import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./ui/Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs?: { name: string; path: string }[];
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden text-white">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            loading="eager"
            fetchPriority="high"
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/90 to-navy/70" />
          <div className="absolute inset-0 bg-brand/20 mix-blend-multiply" />
        </>
      ) : (
        <div className="hero-glow absolute inset-0" />
      )}
      <div className="surface-grid absolute inset-0 opacity-25" aria-hidden />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} light /> : null}
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/78">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
