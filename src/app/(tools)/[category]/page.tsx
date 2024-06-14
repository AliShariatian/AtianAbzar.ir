"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { tools } from "@/public/data/tools/tools";
import { categories } from "@/public/data/tools/categories";
import { MainTitle, VitrineButton } from "@/components";

const Category: FC = (): JSX.Element => {
   const currentPath = usePathname();

   const currentCategoryTools = tools.filter((item) => `/${item.category}` === currentPath);
   const currentCategoryTitle = categories.find((item) => `/${item.slug}` === currentPath);

   return (
      <div className="container">
         {/* TITLE */}
         <MainTitle title={currentCategoryTitle?.title} description="" />

         {/* Tools list */}
         <div className="my-32 grid grid-cols-1 gap-4 py-9 xl:w-11/12 xl:grid-cols-5 xl:py-12">
            {currentCategoryTools.map((item) => (
               <VitrineButton key={item?.slug} {...item} />
            ))}
         </div>
      </div>
   );
};

export default Category;
