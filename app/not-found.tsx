import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function LegacyNotFound() {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="hero-glow absolute inset-0" />
      <div className="surface-grid absolute inset-0 opacity-25" aria-hidden />
      <Container className="relative max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl tracking-tight">
          Página não encontrada
        </h1>
        <p className="mt-4 text-white/75">
          O endereço pode ter mudado. Volte à home ou fale com a eFcinco.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Ir para a home</Button>
          <Button href="/contato" variant="secondary">
            Contato
          </Button>
        </div>
      </Container>
    </section>
  );
}

export { default } from "./v3/not-found";
