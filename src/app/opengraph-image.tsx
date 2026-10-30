import { ImageResponse } from "next/og";

export const alt = "Mesakh — UX Lead & Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#eef0ec",
          color: "#1b2340",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 600 }}>Mesakh</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>
            I design the software businesses run on, and build the teams that ship it.
          </div>
          <div style={{ fontSize: 28, color: "#4a5268" }}>UX Lead & Product Designer, Jakarta</div>
        </div>
        <div style={{ height: 6, width: 160, background: "#2d4be0" }} />
      </div>
    ),
    size
  );
}
