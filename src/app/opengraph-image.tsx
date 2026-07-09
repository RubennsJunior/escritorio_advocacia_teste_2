import { ImageResponse } from "next/og"

import { siteConfig } from "@/lib/constants"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#1d3a3e",
          color: "#f8f6f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: "999px",
              border: "1.5px solid #b08d3f",
              fontSize: 22,
            }}
          >
            {siteConfig.initials}
          </div>
          <span style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase" }}>
            {siteConfig.shortName}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 56,
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            {siteConfig.tagline}
          </span>
          <span style={{ fontSize: 26, color: "#cfe0de", maxWidth: 780 }}>
            Advocacia consultiva e contenciosa com atendimento personalizado.
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
