import { FC } from "react";
import ToolBox from "./ToolBox";
import { tools, ToolsType } from "@/utils/tools";

const ToolsPanel: FC = (): JSX.Element => {
   return (
      <div id="toolbox" className="flex w-11/12 flex-col justify-center">
         {/* Title */}
         <h2 className="mx-auto mb-16 font-morabba text-4xl">لیست ابزارها</h2>

         {/* Tools list */}
         <div dir="ltr" className="grid w-full grid-cols-1 gap-4 rounded-xl border-2 border-dashed bg-slate-100 p-12 xl:grid-cols-5">
            {tools.map((item: ToolsType) => (
               <ToolBox key={item.slug} {...item} />
            ))}
         </div>
      </div>
   );
};

export default ToolsPanel;
