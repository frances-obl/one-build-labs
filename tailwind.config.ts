import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#f4f4f7",
          secondary: "#ececf2",
        },
        navy: {
          DEFAULT: "#16162a",
          light: "#2a2a45",
          faint: "#16162a14",
        },
        muted: "#8a8aa8",
        border: "#deded8",
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
    },
  },
  plugins: [],
};

export default config;
