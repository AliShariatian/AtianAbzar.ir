"use client";

import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

const AppThemeProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <ThemeProvider attribute="class" disableTransitionOnChange storageKey="theme" defaultTheme="system" enableSystem>
         {children}
      </ThemeProvider>
   );
};

export default AppThemeProvider;
