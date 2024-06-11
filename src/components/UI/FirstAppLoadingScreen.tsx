"use client";

import { HomePageTexts } from "@/public/data/persianTexts";
import { FC, useEffect, useState } from "react";

const FirstAppLoadingScreen: FC = (): JSX.Element | false => {
   const [isLoadingApp, setIsLoadingApp] = useState<boolean>(true);

   useEffect(() => {
      setIsLoadingApp(false);
   }, []);

   return (
      isLoadingApp && (
         <div className="fixed left-0 top-0 z-50 flex size-full select-none flex-col items-center justify-center bg-slate-200">
            <div className="mb-28 flex animate-pulse flex-col items-center justify-center gap-6">
               <p className="font-morabba text-5xl font-bold text-slate-800 xl:text-7xl">{HomePageTexts.toolBox}</p>
               <p className="text-base text-slate-600 xl:text-xl">{HomePageTexts.description}</p>
            </div>
         </div>
      )
   );
};

export default FirstAppLoadingScreen;
