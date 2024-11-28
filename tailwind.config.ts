import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito-sans)", "sans-serif"],
        paladin: ["var(--font-paladin)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
      },
      backgroundImage: {
        "gradient-100": "linear-gradient(180deg, #E3FF74 0%, #E37C39 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
