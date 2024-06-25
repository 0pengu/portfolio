import { resolve } from "path";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const filePath = resolve(process.cwd(), "public", "resume", "resume.pdf");
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: { "Content-Type": "application/pdf" },
  });
}
