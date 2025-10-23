import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "Wovera Solutions PLC — We make products that just work";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public", "wovera.svg"),
    "base64"
  );
  const logoSrc = `data:image/svg+xml;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
          color: "white",
          position: "relative",
          fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 64,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <img src={logoSrc} width={72} height={72} alt="Wovera logo" />
          <div style={{ fontSize: 40, fontWeight: 700 }}>
            Wovera Solutions PLC
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>
            We make products that just work
          </div>
          <div style={{ marginTop: 16, fontSize: 28, opacity: 0.9 }}>
            Software Engineering • AI • Cloud • GIS
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 64,
            fontSize: 24,
            opacity: 0.9,
          }}
        >
          www.woverasolutions.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
