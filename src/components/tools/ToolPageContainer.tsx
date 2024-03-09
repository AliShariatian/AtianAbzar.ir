"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { tools, ToolsType } from "@/utils/tools";

type PropsType = {
   leftSide: React.ReactNode;
   rightSide: React.ReactNode;
};

const ToolPageContainer: FC<PropsType> = ({ rightSide, leftSide }): JSX.Element => {
   const currentPath = usePathname();

   const currentPageInfo = tools.find((item: ToolsType) => `/${item.slug}` === currentPath);

   return (
      <main className="container -mt-10 flex flex-col gap-5 rounded-xl xl:mt-0 xl:flex-row">
         {/* Right side */}
         <div className="w-full xl:w-1/2">
            <h1 className="w-full text-center text-2xl font-bold xl:text-right">{currentPageInfo?.title}</h1>
            <section className="mb-28 mt-11 flex w-full flex-col items-center gap-2 text-2xl xl:items-start">{rightSide}</section>
         </div>

         {/* Left side */}
         <div className="w-full xl:w-1/2">{leftSide}</div>
      </main>
   );
};

export default ToolPageContainer;
