import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EFF8FF",
        primary2: "#175CD3",
        secondary: "#D0D5DD",
        secondary2: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
export default config;
