import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function CtaBand({
  title = "Pronto para evoluir sua operação VTEX?",
  description = "Agende um diagnóstico com a eFcinco. Avaliamos implantação, migração, performance, SEO ou ativação da Iugis com objetividade.",
  primaryHref = "/contato",
  primaryLabel = "Agendar diagnóstico VTEX",
  secondaryHref = "/iugis",
  secondaryLabel = "Conhecer Iugis",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="pb-20 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-navy px-6 py-12 text-white sm:px-12">
          <div className="surface-grid absolute inset-0 opacity-30" aria-hidden />
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/30 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={primaryHref}>{primaryLabel}</Button>
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
