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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "royal-blue": "hsl(241, 81%, 54%)",
        "slate-blue": "hsl(252, 100%, 67%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "pale-white": "hsl(221, 100%, 96%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "dark-blue-default": "hsl(213, 19%, 20%)",
        "light-gray": "hsl(217, 12%, 63%)",
      },
    },
  },
  plugins: [],
};
export default config;
