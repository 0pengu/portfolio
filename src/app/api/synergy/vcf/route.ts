import { NextResponse } from "next/server";
import { resolve } from "path";
import fs from "fs";

export async function GET() {
  const filePath = resolve(
    process.cwd(),
    "public",
    "contact",
    "SynergyPrep Notifications.vcf"
  );
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "text/x-vcard",
      "Cache-Control": "no-cache",
      "Content-Disposition": 'inline; filename="SynergyPrep Notifications.vcf"',
    },
  });
}
