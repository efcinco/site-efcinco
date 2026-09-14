import Link from "next/link";
import { Button } from "@/components/v3/Button";

export default function NotFoundV3() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-20 text-center">
      <div className="mx-auto max-w-md">
        <p className="font-mono text-sm font-semibold uppercase tracking-wider text-gold">
          Erro 404
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold text-luxury-black">
          Página não encontrada
        </h1>
        <p className="mt-4 text-lg text-warm-gray">
          A página que você procura não existe ou foi movida
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/">Voltar ao início</Button>
          <Button href="/contato" variant="outline">
            Falar com suporte
          </Button>
        </div>
      </div>
    </div>
  );
}
