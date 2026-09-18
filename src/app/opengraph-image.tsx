import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export const alt =
  "Dinesh Harish Kumar - Senior Full Stack Developer & Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "#030303",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2px, transparent 0)",
        backgroundSize: "50px 50px",
        padding: "80px",
        fontFamily: "sans-serif",
        color: "#ffffff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor: "#22c55e",
          }}
        />
        <span
          style={{
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#a1a1aa",
          }}
        >
          AVAILABLE FOR HIGH-IMPACT ROLES
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            margin: 0,
            color: "#ffffff",
          }}
        >
          Dinesh Harish Kumar
        </h1>
        <p
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#a1a1aa",
            margin: 0,
          }}
        >
          Senior Full Stack Developer & Software Engineer
        </p>
        <p
          style={{
            fontSize: "24px",
            color: "#71717a",
            margin: 0,
            marginTop: "8px",
          }}
        >
          React • Next.js • Node.js • Django • PostgreSQL • Redis System
          Architecture
        </p>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          paddingTop: "24px",
        }}
      >
        <span style={{ fontSize: "20px", color: "#a1a1aa" }}>
          {siteConfig.url.replace("https://", "")}
        </span>
        <span style={{ fontSize: "20px", color: "#a1a1aa" }}>
          github.com/jdmkd
        </span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
