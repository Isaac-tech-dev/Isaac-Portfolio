import { ImageResponse } from "next/og";

export const alt = "Isaac Ayeni, mobile and frontend engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f5f6f8",
          color: "#12161e",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30 }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: "#f2b300" }} />
          Isaac Ayeni
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -3,
          }}
        >
          I build the mobile apps people use to bank, train and talk to their doctor.
        </div>
        <div style={{ fontSize: 28, color: "#586070" }}>
          Mobile and frontend engineer, Lagos
        </div>
      </div>
    ),
    size,
  );
}
