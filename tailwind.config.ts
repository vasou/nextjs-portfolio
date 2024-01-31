import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: [
        "0.875rem",
        {
          lineHeight: "1.375rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.625rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      "2xl": [
        "1.375rem",
        {
          lineHeight: "1.875rem",
        },
      ],
      "3xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "4xl": [
        "1.625rem",
        {
          lineHeight: "2.125rem",
        },
      ],
      "5xl": [
        "1.75rem",
        {
          lineHeight: "2.25rem",
        },
      ],
      "6xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "7xl": [
        "2.25rem",
        {
          lineHeight: "2.875rem",
        },
      ],
      "8xl": [
        "2.5rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "9xl": [
        "2.75rem",
        {
          lineHeight: "3.375rem",
        },
      ],
    },
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        primaryContent: "rgb(var(--primary-content) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        accentA: "rgb(var(--accentA) / <alpha-value>)",
        accentB: "rgb(var(--accentB) / <alpha-value>)",
        cardColour: "rgb(var(--card-colour) / <alpha-value>)",
        transparent: "var(--transparent)",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
    },
    maxWidth: {
      md: "600px",
      base: "1080px",
      lg: "1100px",
    },
    screens: {
      max_3xl: { max: "1920px" },
      max_2xl: { max: "1200px" },
      max_xl: { max: "1100px" },
      max_lg: { max: "992px" },
      max_md: { max: "768px" },
      max_sm: { max: "639px" },
      max_s: { max: "530px" },
      max_xs: { max: "420px" },
    },
    borderRadius: {
      none: "0",
      sm: "10px",
      md: "15px",
      DEFAULT: "0",
      lg: "20px",
      full: "9999px",
    },
    boxShadow: {
      none: "0px 0px 0px rgb(0 0 0 / 0%)",
      small: "0px 2px 6px rgb(0 0 0 / 12%)",
      big: "0px 4px 12px rgb(0 0 0 /25%)",
    },
  },
  plugins: [],
};
export default config;
