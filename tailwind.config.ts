import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/utils/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         container: {
            center: true,
            padding: {
               DEFAULT: "1rem",
               sm: "2rem",
               lg: "4rem",
               xl: "5rem",
               "2xl": "6rem",
            },
         },
         fontFamily: {
            dana: ["var(--font-dana)"],
            morabba: ["var(--font-morabba)"],
            jetBrains: ["var(--font-jetBrains)"],
         },
      },
   },
   plugins: [],
};
export default config;
