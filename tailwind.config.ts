import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slowSpin: "slowSpin 3s linear infinite",
        halt: "halt 6s linear infinite",
      },
      keyframes: {
        slowSpin: {
          "0%": { transform: "translateX(50%) rotate(0deg)" },
          "100%": { transform: "translateX(50%) rotate(360deg)" },
        },
        halt: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        staatliches: ["Staatliches", "cursive"],
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
