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
      <body className="h-screen bg-gradient-to-b from-gray-50 to-teal-50 flex flex-col gap-10 ml-5 mt-5">
        <h1 className="text-7xl text-teal-700 font-sans">X/O</h1>
        {children}
      </body>
    </html>
  );
}
