import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--handlee)"],
      },
      colors: {
        "main-purple": "#D5CAE4",
        "main-orange": "#E59462",
        "main-gray": "#E1E5EB",
        "main-dark-purple": "#3B2F52",
      },
    },
  },
  plugins: [],
};
export default config;
