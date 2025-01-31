import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        lightMode: {
          "primary": "#f8f8f3",
          "secondary": "#1f2122",
          "accent": "#59b280",
          "neutral": "#f8f8f3",
          "base-100": "#f8f8f3",
        },
      },
    ],
  },
} satisfies Config;
