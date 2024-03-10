"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { tools } from "@/utils/data/tools";

type PropsType = {
   leftSide: React.ReactNode;
   rightSide: React.ReactNode;
};

const ToolPageContainer: FC<PropsType> = ({ rightSide, leftSide }): JSX.Element => {
   const currentPath = usePathname();

   const currentPageInfo = tools.find((item) => `/${item.slug}` === currentPath);

   return (
      <main className="container -mt-10 flex flex-col gap-5 rounded-xl xl:mt-0 xl:flex-row">
         {/* Right side */}
         <div className="w-full px-2 xl:w-1/2 xl:pl-20">
            <h1 className="w-full text-wrap text-lg font-bold leading-7 xl:text-2xl">{currentPageInfo?.title}</h1>
            <section className="mb-28 mt-9 flex w-full flex-col items-center gap-2 text-2xl xl:items-start">{rightSide}</section>
         </div>

         {/* Left side */}
         <div className="w-full xl:w-1/2">{leftSide}</div>
      </main>
   );
};

export default ToolPageContainer;
