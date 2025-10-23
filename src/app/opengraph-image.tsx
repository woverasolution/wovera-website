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
      <div tw="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-black text-white relative font-sans">
        <div tw="absolute top-16 left-16 flex items-center gap-4">
          <img src={logoSrc} width={72} height={72} alt="Wovera logo" />
          <div tw="font-bold text-[40px]">Wovera Solutions PLC</div>
        </div>

        <div tw="flex flex-col items-center text-center">
          <div tw="text-[64px] font-extrabold tracking-tight">
            We make products that just work
          </div>
          <div tw="mt-4 text-[28px] opacity-90">
            Software Engineering • AI • Cloud • GIS
          </div>
        </div>

        <div tw="absolute bottom-12 right-16 text-[24px] opacity-90">
          www.woverasolutions.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
