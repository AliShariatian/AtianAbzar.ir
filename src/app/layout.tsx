// TYPES
import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
// TEXTS
import { metaTitle } from "@/public/data/persianTexts";
// FONT
import { danaFont, jetBrainsFont, morabbaFont } from "@/public/font";
// STYLE
import "./globals.css";
// COMPONENT
import { Navbar, Footer, PageLoadingProgressBar } from "@/components";
// -------------------------------------------------------------------------------------

export const metadata: Metadata = {
   manifest: "/manifest.json",

   title: `${metaTitle} | مرجع ابزارهای محاسباتی روزمره`,
   description: "مرجع ابزارهای محاسباتی روزمره | محاسبه | محاسبه آنلاین",
};

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <html lang="fa" dir="rtl" className="h-full">
         <body
            className={`${danaFont.variable} ${morabbaFont.variable} ${jetBrainsFont.variable} bgDotPattern relative h-full overflow-x-hidden bg-slate-100 pt-36 font-dana text-slate-700 transition-all duration-200 ease-in`}
         >
            <PageLoadingProgressBar />
            
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
};

export default RootLayout;
