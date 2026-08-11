import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E4C766",
          dark: "#B8952C",
        },
        paper: "#F8F8F8",
        mist: "#EAEAEA",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(212,175,55,0.45)",
        soft: "0 10px 40px -12px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
