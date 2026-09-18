import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="relative overflow-hidden rounded-2xl theme-dark bg-gradient-to-br from-charcoal to-ink p-10 sm:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,104,176,0.35),transparent_70%)]" />
          
          <div className="relative text-center">
            <p className="eyebrow mb-5">Diagnóstico gratuito</p>

            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Vamos olhar sua loja juntos?
            </h2>
            
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Analisamos sua loja e entregamos um plano técnico claro, sem compromisso.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contato" size="lg" magnetic>
                Agendar conversa de 30 min
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button href="/#vitrine-servicos" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                Conhecer serviços
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-white/70">
              {[
                "30 min com especialista",
                "Diagnóstico técnico documentado",
                "Roadmap de próximos passos",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
