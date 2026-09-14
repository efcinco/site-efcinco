import { ImageResponse } from "next/og";

export const alt = "eFcinco — Agência VTEX e Plataforma Iugis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(160deg, #05080f 0%, #0a1424 45%, #122038 100%)",
          color: "#f7f9fc",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, lineHeight: 1.1, maxWidth: 900 }}>
            Parceira técnica de lojistas VTEX
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(247,249,252,0.75)",
              maxWidth: 820,
            }}
          >
            Implantação, migração, SEO e automação com Iugis
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#1e5fc7" }}>
          www.efcinco.com.br
        </div>
      </div>
    ),
    { ...size },
  );
}
