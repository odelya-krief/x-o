import { Handlee } from "next/font/google";

const handleeFont = Handlee({
  display: "swap",
  subsets: ["latin"],
  variable: "--handlee",
  weight: "400",
});

export const handleeFontClass = handleeFont.variable;
