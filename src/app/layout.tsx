// TYPES
import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
// TEXTS
import { metaTitle } from "@/utils/persianTexts";
// FONT
import { danaFont, jetBrainsFont, morabbaFont } from "@/utils/font";
// STYLE
import "./globals.css";
// COMPONENT
import { Navbar, PageLoadingProgressBar } from "@/components";
// -------------------------------------------------------------------------------------

export const metadata: Metadata = {
   title: `${metaTitle} | ابزارهای برنامه‌نویسی فرانت‌اند`,
   description: "جعبه ابزار برنامه نویسی",
};

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <html lang="fa" dir="rtl">
         <body
            className={`${danaFont.variable} ${morabbaFont.variable} ${jetBrainsFont.variable} bgDotPattern relative overflow-x-hidden bg-slate-100 py-36 font-dana text-slate-700 transition-all duration-200 ease-in`}
         >
            <PageLoadingProgressBar />
            <Navbar />
            {children}
         </body>
      </html>
   );
};

export default RootLayout;
