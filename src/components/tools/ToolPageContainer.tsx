"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { tools } from "@/public/data/tools/tools";
import { Breadcrumb } from "@/components";
import { categories } from "@/public/data/tools/categories";

type TProps = {
   leftSide: React.ReactNode;
   rightSide: React.ReactNode;
};

const ToolPageContainer: FC<TProps> = ({ rightSide, leftSide }): JSX.Element => {
   const currentPath = usePathname();

   const currentPageInfo = tools.find((item) => `/${item.slug}` === currentPath);
   const currentCategory = categories.find((item) => item.slug === currentPath.split("/")[1]);

   return (
      <main className="container -mt-10 flex flex-col gap-5 rounded-xl xl:flex-row">
         {/* Right side */}
         <div className="w-full px-2 xl:w-1/2 xl:pl-20">
            <Breadcrumb title={currentPageInfo?.title} category={currentCategory} />

            <h1 className="w-full text-wrap text-lg font-bold leading-7 xl:text-2xl">{currentPageInfo?.title}</h1>
            <section className="mb-28 mt-9 flex w-full flex-col items-center gap-2 text-2xl xl:items-start">{rightSide}</section>
         </div>

         {/* Left side */}
         <div className="w-full xl:w-1/2">{leftSide}</div>
      </main>
   );
};

export default ToolPageContainer;
