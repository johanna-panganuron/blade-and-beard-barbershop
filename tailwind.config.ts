import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C878",
          dark: "#8B6914",
        },
        cream: "#F5F0E8",
        ink: "#0A0A0A",
        charcoal: "#1A1A1A",
        smoke: "#2A2A2A",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        serif: ["var(--font-cormorant)", "serif"],
        condensed: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-dm)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;