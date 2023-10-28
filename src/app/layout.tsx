import { handleeFontClass } from "@/lib/font";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XO",
  description: "X/O",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${handleeFontClass} text-main-orange font-bold font-sans bg-gradient-to-b from-main-purple to-main-purple flex flex-col items-center pt-10 h-screen w-screen gap-4`}
      >
        <h1 className="text-7xl">XO</h1>
        {children}
      </body>
    </html>
  );
}
