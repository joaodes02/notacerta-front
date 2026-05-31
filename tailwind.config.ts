import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B6D11",
          hover: "#27500A",
          light: "#EAF3DE",
        },
        secondary: "#639922",
        background: "#F9F9F7",
        surface: "#FFFFFF",
        border: "#D3D1C7",
        text: {
          primary: "#2C2C2A",
          secondary: "#5F5E5A",
          muted: "#888780",
        },
        success: "#3B6D11",
        error: "#A32D2D",
        warning: "#BA7517",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
