import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      extend: {
        grayscale: ['hover'],
        scale: ['hover'],
        transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      },
    },
  },
  plugins: [],
};
export default config;
