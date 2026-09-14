import Image from "next/image";

type Brand = "vtex" | "uappi" | "wake";

const brands = {
  vtex: {
    href: "https://vtex.com/",
    label: "Visitar o site da VTEX",
    title: "Conheça a VTEX",
    src: "/vtex-Logo.svg",
    alt: "VTEX",
    width: 305,
    height: 110,
  },
  uappi: {
    href: "https://uappi.com.br/",
    label: "Visitar o site da Uappi",
    title: "Conheça a Uappi",
    src: "/uappi-logo-on-light.png",
    alt: "Uappi",
    width: 353,
    height: 105,
  },
  wake: {
    href: "https://www.wake.tech/",
    label: "Visitar o site da Wake",
    title: "Conheça a Wake",
    src: "/wake-logo-on-light.png",
    alt: "Wake",
    width: 368,
    height: 107,
  },
} as const;

type Props = {
  brand: Brand;
  priority?: boolean;
};

export function PageBrandLogo({ brand, priority }: Props) {
  const item = brands[brand];

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label={item.label}
      title={item.title}
      className="inline-flex h-12 w-fit max-w-[11.5rem] items-center self-start transition hover:opacity-80"
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        className="h-12 w-auto max-w-[11.5rem] object-contain object-left"
        priority={priority}
      />
    </a>
  );
}
