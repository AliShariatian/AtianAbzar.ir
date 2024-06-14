"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { tools } from "@/public/data/tools/tools";
import { Breadcrumb } from "@/components";
import { categories } from "@/public/data/tools/categories";

type TProps = {
   topSide: React.ReactNode;
   bottomSide: React.ReactNode;
};

const ToolPageContainer: FC<TProps> = ({ topSide, bottomSide }): JSX.Element => {
   const currentPath = usePathname();

   const currentPageInfo = tools.find((item) => `/${item.slug}` === currentPath);
   const currentCategory = categories.find((item) => item.slug === currentPath.split("/")[1]);

   return (
      <main className="container -mt-10 flex w-full flex-col items-start gap-5 xl:-mt-5 xl:w-1/2">
         {/* Top side */}
         <div className="w-full">
            <Breadcrumb title={currentPageInfo?.title} category={currentCategory} />

            <h1 className="w-full text-wrap text-lg font-bold leading-7 xl:text-3xl">{currentPageInfo?.title}</h1>
            <section className="mb-28 mt-9 flex w-full flex-col items-center gap-2 text-2xl xl:items-start">{topSide}</section>
         </div>

         {/* Bottom side */}
         <div className="w-full">{bottomSide}</div>
      </main>
   );
};

export default ToolPageContainer;
