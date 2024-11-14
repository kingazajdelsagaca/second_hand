import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "430px",
      ...defaultTheme.screens,
    },
    extend: {
      pageBreakpoints: {
        sm: "600px",
        md: "1000px",
        lg: "1200px",
        xl: "1350px",
      },
      backgroundImage: {
        // "dark-woods": "url(/jumbatron.png)",
        "quote-main": "url(/clothes04-mdsnmdsnmdsn.jpg)",
        "quote-about": "url(/miscelaneous02-beyzaa-yurtkuran.jpg)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        outfit: "var(--font-outfit)",
      },
      colors: {
        "header-gradient-left": "#3A3A42",
        "header-gradient-right": "#0F0F23",
        // primary: "#7d5da0",
        // secondary: "#b6d053",
        "primary-gray": "#242432",
        primary: "#F57F17",
        primary2: "#F57F17F0",  // + opacity
        secondary: "#F5B717",
        tertiary: "C45902",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
