import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "Hive — The AI Coding Agent Orchestrator";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const iconData = await readFile(
    join(process.cwd(), "src/app/icon.png"),
    "base64"
  );
  const iconSrc = `data:image/png;base64,${iconData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1c150f 100%)",
          gap: 24,
        }}
      >
        <img
          src={iconSrc}
          width={96}
          height={96}
          style={{ borderRadius: 20 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            Hive
          </span>
          <span
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#f97316",
              letterSpacing: "-0.5px",
              lineHeight: 1.2,
            }}
          >
            The AI Coding Agent Orchestrator
          </span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#9ca3af",
              letterSpacing: "0px",
              lineHeight: 1.4,
              marginTop: 4,
            }}
          >
            Orchestrate AI coding agents from one window
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
