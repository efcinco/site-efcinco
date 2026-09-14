import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo/site";

export const runtime = "edge";
export const alt = siteConfig.tagline;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.15), transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#fdfaf7",
              textAlign: "center",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#d4af37",
              textAlign: "center",
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#f4f1ed",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.5,
            }}
          >
            {siteConfig.description}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
