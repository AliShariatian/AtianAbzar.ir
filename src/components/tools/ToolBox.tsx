import Link from "next/link";
import { FC } from "react";

import { ToolsType } from "@/utils/tools";

const ToolBox: FC<ToolsType> = ({ title, slug }): JSX.Element => {
   const hoverScaleValue = { "--hover-scale-value": 1.08 } as React.CSSProperties;

   return (
      <Link href={slug} style={hoverScaleValue} className="hover-scale">
         <div className="rounded-lg bg-slate-200 p-6 shadow-md">
            <h3 className="text-center font-jetBrains font-bold">{title}</h3>
         </div>
      </Link>
   );
};

export default ToolBox;
