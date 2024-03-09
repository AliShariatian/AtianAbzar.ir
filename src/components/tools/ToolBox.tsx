import { FC } from "react";
import { ToolsType } from "@/utils/tools";
import Link from "next/link";

const ToolBox: FC<ToolsType> = ({ title, slug }): JSX.Element => {
   const hoverScaleValue = { "--hover-scale-value": 1.04 } as React.CSSProperties;

   return (
      <Link href={slug} style={hoverScaleValue} className="hover-scale rounded-lg bg-slate-200 p-6 shadow !transition-all hover:shadow-md">
         <h3 className="line-clamp-1 text-center font-bold">{title}</h3>
      </Link>
   );
};

export default ToolBox;
