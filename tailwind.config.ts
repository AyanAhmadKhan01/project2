import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "2xl": { max: "1535px" }, 
        xl: { max: "1279px" },
        lg: { max: "1023px" }, 
        md: { max: "767px" }, 
        sm: { max: "639px" }, 
        xs: { max: "475px" }, 
        xxs: { max: "425px" },
        "3xs": { max: "375px" }, 
        "4xs": { max: "320px" }, 
      },
    },
  },
  plugins: [],
} satisfies Config;
