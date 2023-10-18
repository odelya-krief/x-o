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
      <body className="bg-gradient-to-b from-gray-50 to-teal-50 flex flex-col gap-10 ml-5 mt-5 h-full">
        <h1 className="text-7xl text-black font-sans">XO</h1>

        {children}
      </body>
    </html>
  );
}
