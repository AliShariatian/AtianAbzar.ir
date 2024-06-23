"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumb } from "@/components";

import { tools } from "@/public/data/tools/tools";
import { categories } from "@/public/data/tools/categories";

type TProps = {
   topSide: React.ReactNode;
};

const ToolInfo: FC<TProps> = ({ topSide }): JSX.Element => {
   const currentPath = usePathname();

   const currentPageInfo = tools.find((item) => `/${item.slug}` === currentPath);
   const currentCategory = categories.find((item) => item.slug === currentPath.split("/")[1]);

   return (
      <>
         <Breadcrumb title={currentPageInfo?.title} category={currentCategory} />

         <h1 className="w-full text-wrap text-lg font-bold leading-7 xl:text-3xl">{currentPageInfo?.title}</h1>
         <section className="mb-28 mt-9 flex w-full flex-col items-center gap-2 text-2xl xl:items-start">{topSide}</section>
      </>
   );
};

export default ToolInfo;
