// TYPES
import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
// TEXTS
import { HomePageTexts, metaTitle } from "@/public/data/persianTexts";
// FONT
import { danaFont, jetBrainsFont, morabbaFont } from "@/public/font";
// STYLE
import "./globals.css";
// COMPONENT
import { Header, Footer, PageLoadingProgressBar, FirstAppLoadingScreen } from "@/components";
import AppThemeProvider from "@/providers/ThemeProvider";
// -------------------------------------------------------------------------------------

export const metadata: Metadata = {
   manifest: "/manifest.json",

   title: `${metaTitle} | ${HomePageTexts.description}`,
   description: "ابزارهای محاسباتی روزمره | محاسبه | محاسبه آنلاین | ماشین حساب آنلاین",
};

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <html lang="fa" dir="rtl" className="h-full" suppressHydrationWarning>
         <body
            className={`${danaFont.variable} ${morabbaFont.variable} ${jetBrainsFont.variable} bgDotPattern relative h-full overflow-x-hidden bg-slate-100 pt-36 font-dana text-slate-700 transition-all duration-200 ease-in dark:bg-slate-900 dark:text-slate-200`}
         >
            <AppThemeProvider>
               <PageLoadingProgressBar />

               <FirstAppLoadingScreen />

               <Header />
               {children}
               <Footer />
            </AppThemeProvider>
         </body>
      </html>
   );
};

export default RootLayout;
