import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: {
            primary: "#272727",
            secondary: "bg-gray-100",
          },
          text: {
            primary: "white",
            secondary: "black",
          },
          accent: {
            primary: "#C2DFE3",
            secondary: "#FFFFFF",
          },
        },
        light: {
          bg: {
            primary: "#EFEFEF",
            secondary: "#EFEFEF",
          },
          text: {
            primary: "white",
            secondary: "black",
          },
          accent: {
            primary: "#FFFFFF",
            secondary: "#120D31",
          },
          border: {
            primary: "#9c9c9c",
            secondary: "#959696",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
