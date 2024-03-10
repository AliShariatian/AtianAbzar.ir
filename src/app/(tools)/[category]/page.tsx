'use client'

import { FC } from "react";
import { usePathname } from "next/navigation";
import { toolsType, tools } from "@/utils/data/tools";

const Category: FC = (): JSX.Element => {
   const currentPath = usePathname();

   const currentPageInfo = tools.find((item: toolsType) => `/${item.category}` === currentPath);
   console.log(currentPageInfo);

   return <div>page</div>;
};

export default Category;
