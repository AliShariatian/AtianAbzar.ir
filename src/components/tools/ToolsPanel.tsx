import { FC } from "react";
import ToolBox from "./ToolBox";
import { tools, ToolsType } from "@/utils/data/tools";
import arrowDownIcon from "../../../public/img/arrow-down.svg";
import Image from "next/image";

const ToolsPanel: FC = (): JSX.Element => {
   return (
      <div id="tools" className="flex w-11/12 flex-col justify-center">
         {/* Title */}
         <div className="mx-auto mb-16 flex flex-col items-center">
            <h2 className="text-4xl font-bold">لیست ابزارها</h2>
            <Image src={arrowDownIcon} width={30} height={30} alt="arrow down" className="mt-6 animate-bounce opacity-80" />
         </div>

         {/* Tools list */}
         <div className="grid w-full grid-cols-1 gap-4 p-12 xl:grid-cols-4">
            {tools.map((item: ToolsType) => (
               <ToolBox key={item.slug} {...item} />
            ))}
         </div>
      </div>
   );
};

export default ToolsPanel;
