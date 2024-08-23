import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('./public/background.webp')",
        "corner-tour":
          "radial-gradient(circle at 0 0, transparent 28px, #f4f3ec 28px)",
      },
      colors: {
        "dark-color-title": "var(--dark-color-title)",
        "dark-color-text": "var(--gray-color)",
        "main-light-color": "var(--light-color)",
        "btn-w": "rgba(255, 255, 255, 0.70)",
      },
      boxShadow: {
        "0-0-15-0": "0px 0px 15px 0px rgba(0, 0, 0, 0.10)",
      },
      letterSpacing: {
        "title-0.4": "-0.4px",
        "2": "0.025em",
        "3": "0.05em",
        "4": "0.1em",
        h1: "-0.7px",
        "tour-text": "-1.26px",
        "tour-desc": "-0.32px",
      },
      borderRadius: {
        "rd-12": "12px",
        "rd-20": "20px",
        "rd-28": "28px",
        "rd-50": "50px",
        "rd-64": "64px",
      },
      dropShadow: {
        "tour-text": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },

  plugins: [],
}
export default config
