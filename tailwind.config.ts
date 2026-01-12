import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "7.5": "1.875rem", // 30px
        "15": "3.75rem", // 60px
        "20": "5rem", // 80px
        "24": "6rem", // 96px
        "32": "8rem", // 128px
        "40": "10rem", // 160px
        "48": "12rem", // 192px
        "56": "14rem", // 224px
        "64": "16rem", // 256px
        "80": "20rem", // 320px
        "96": "24rem", // 384px
      },
    },
  },
  plugins: [],
};

export default config;
