import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Alias legacy names to the brand manual palette so existing
        // utility classes (bg-ink, text-gold, etc.) pick up the new colors
        // without a mass find-replace across every component.
        ink: "#0F2A4A", // navy — primario
        navy: {
          DEFAULT: "#0F2A4A",
          deep: "#0A1F38",
        },
        teal: {
          DEFAULT: "#0E7C86",
        },
        gold: {
          DEFAULT: "#E8A33D",
          light: "#F0B95E",
          dark: "#C6821F",
          deep: "#C6821F",
        },
        paper: "#F6F7F9",
        bone: "#F6F7F9",
        mist: "#EAEAEA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-fraunces)", "serif"],
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
        gold: "0 8px 30px -8px rgba(232,163,61,0.45)",
        soft: "0 10px 40px -12px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
