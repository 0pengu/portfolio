import { NextResponse } from "next/server";
import { resolve } from "path";
import fs from "fs";

export async function GET() {
  const filePath = resolve(process.cwd(), "public", "contact", "contact.vcf");
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: { "Content-Type": "text/vcard", "Cache-Control": "no-cache" },
  });
}
