import Image from "next/image";

type CaseLogoProps = {
  src: string;
  alt: string;
  sizes?: string;
  compact?: boolean;
  onDark?: boolean;
};

export function CaseLogo({ src, alt, sizes = "(max-width: 768px) 100vw, 33vw", compact = false, onDark = false }: CaseLogoProps) {
  const pad = compact ? "p-4" : "p-8";
  const surface = onDark ? "bg-[#111]" : "bg-white";

  return (
    <div className={`absolute inset-0 ${surface}`}>
      {src.endsWith(".svg") ? (
        <div className={`flex h-full w-full items-center justify-center ${pad}`}>
          {/* SVGs locais não passam pelo otimizador do next/image. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
        </div>
      ) : (
        <Image src={src} alt={alt} fill className={`object-contain ${pad}`} sizes={sizes} />
      )}
    </div>
  );
}
