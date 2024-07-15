import { NextResponse } from "next/server";
import { resolve } from "path";
import fs from "fs";

export async function GET() {
  const filePath = resolve(
    process.cwd(),
    "public",
    "contact",
    "Synergy Prep Notifications.vcf"
  );
  const fileBuffer = fs.readFileSync(filePath);
  const filename = encodeURIComponent("Synergy Prep Notifications.vcf");

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "text/vcard",
      "Cache-Control": "no-cache",
      "Content-Disposition": `inline; filename*=UTF-8''${filename}`,
    },
  });
}
