import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

// Heading font
export const morabbaFont = localFont({ src: "../../../public/font/Morabba-Medium.ttf", variable: "--font-morabba" });

// Code font
export const jetBrainsFont = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetBrains" });

// Body font
export const danaFont = localFont({
   src: [
      {
         path: "../../../public/font/DanaFaNum-Light.ttf",
         weight: "300",
         style: "normal",
      },
      {
         path: "../../../public/font/DanaFaNum-Regular.ttf",
         weight: "400",
         style: "normal",
      },
      {
         path: "../../../public/font/DanaFaNum-Medium.ttf",
         weight: "500",
         style: "normal",
      },
      {
         path: "../../../public/font/DanaFaNum-DemiBold.ttf",
         weight: "600",
         style: "normal",
      },
      {
         path: "../../../public/font/DanaFaNum-Bold.ttf",
         weight: "700",
         style: "normal",
      },
   ],
   variable: "--font-dana",
});
