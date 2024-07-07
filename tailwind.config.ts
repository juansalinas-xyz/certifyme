import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ".src/app/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        customBlackBackground: '#0E0E0E',
        customBlueLinkedin: '#0A66C2',
        customCeleste: '#01CABD',
      },
    },
  },
  plugins: [],
};
export default config;
