import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import AnimatedBeam from "@/components/Background/Background";
import { Navbar } from "@/components/Navbar";

const rubik = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tahmid Ahmed",
  description: "Personal website of Tahmid Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
