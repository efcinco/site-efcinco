import Image from "next/image";

type CaseLogoProps = {
  src: string;
  alt: string;
  sizes?: string;
  compact?: boolean;
  /** Logo claro, pensado para fundo escuro. */
  onDark?: boolean;
  /**
   * Monocromático: todos os logos em cinza sobre fundo claro, para listas e vitrines
   * ficarem uniformes. Logos claros são invertidos para continuarem visíveis.
   */
  mono?: boolean;
  /** Sem respiro interno, para espaços pequenos. */
  tight?: boolean;
  /** Sem fundo próprio: usa o fundo do container. */
  bare?: boolean;
};

export function CaseLogo({ src, alt, sizes = "(max-width: 768px) 100vw, 33vw", compact = false, onDark = false, mono = false, tight = false, bare = false }: CaseLogoProps) {
  const pad = tight ? "p-0.5" : compact ? "p-4" : "p-8";
  const surface = mono || bare ? "" : onDark ? "bg-ink" : "bg-white";
  const filter = mono
    ? `${onDark ? "invert" : ""} grayscale opacity-70 transition duration-300 group-hover:opacity-100`
    : "";

  return (
    <div className={`absolute inset-0 ${surface}`}>
      {src.endsWith(".svg") ? (
        <div className={`flex h-full w-full items-center justify-center ${pad}`}>
          {/* SVGs locais não passam pelo otimizador do next/image. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className={`max-h-full max-w-full object-contain ${filter}`} />
        </div>
      ) : (
        <Image src={src} alt={alt} fill className={`object-contain ${pad} ${filter}`} sizes={sizes} />
      )}
    </div>
  );
}
