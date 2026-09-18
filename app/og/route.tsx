import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Imagem de compartilhamento (Open Graph/Twitter) gerada por página.
// Uso: /og?title=...&eyebrow=...  (ver buildMetadata em lib/seo/metadata.ts)

const size = { width: 1200, height: 630 };

function fitTitle(title: string) {
  if (title.length <= 34) return 76;
  if (title.length <= 56) return 64;
  if (title.length <= 80) return 54;
  return 46;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") || "Parceira técnica de lojistas VTEX").slice(0, 120);
  const eyebrow = (searchParams.get("eyebrow") || "Agência VTEX e Plataforma Iugis").slice(0, 60);

  const [logo, display, displayBold, sans] = await Promise.all([
    readFile(join(process.cwd(), "public/brand/efcinco-logo.svg")),
    readFile(join(process.cwd(), "assets/fonts/plus-jakarta-sans-latin-800-normal.woff")),
    readFile(join(process.cwd(), "assets/fonts/plus-jakarta-sans-latin-700-normal.woff")),
    readFile(join(process.cwd(), "assets/fonts/inter-latin-500-normal.woff")),
  ]);
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 88% 12%, rgba(0,104,176,0.45), transparent 48%), radial-gradient(circle at 10% 110%, rgba(0,104,176,0.22), transparent 45%)",
          color: "#ffffff",
          fontFamily: "Inter",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={252} height={56} />

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#6cb8ec",
              fontFamily: "Jakarta",
              fontWeight: 700,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: fitTitle(title),
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 1000,
              fontFamily: "Jakarta",
              fontWeight: 800,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex" }}>VTEX · Uappi · Wake · Iugis</div>
          <div style={{ display: "flex", color: "#ffffff" }}>efcinco.com.br</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Jakarta", data: display, weight: 800, style: "normal" },
        { name: "Jakarta", data: displayBold, weight: 700, style: "normal" },
        { name: "Inter", data: sans, weight: 500, style: "normal" },
      ],
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=31536000, immutable",
      },
    },
  );
}
