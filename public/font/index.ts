import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

// Heading font
export const morabbaFont = localFont({ src: "./Morabba-Medium.ttf", variable: "--font-morabba" });

// Code font
export const jetBrainsFont = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetBrains" });

// Body font
export const danaFont = localFont({
   src: [
      {
         path: "./DanaFaNum-Light.ttf",
         weight: "300",
         style: "normal",
      },
      {
         path: "./DanaFaNum-Regular.ttf",
         weight: "400",
         style: "normal",
      },
      {
         path: "./DanaFaNum-Medium.ttf",
         weight: "500",
         style: "normal",
      },
      {
         path: "./DanaFaNum-DemiBold.ttf",
         weight: "600",
         style: "normal",
      },
      {
         path: "./DanaFaNum-Bold.ttf",
         weight: "700",
         style: "normal",
      },
   ],
   variable: "--font-dana",
});
