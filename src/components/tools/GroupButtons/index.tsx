import { FC } from "react";
import cn from "@/utils/cn";
import { TGroupButtonsProps } from "./type";

const RadioButtons: FC<TGroupButtonsProps> = ({ props }): JSX.Element => {
   return (
      <div className={cn("userHandle overflow-hidden", "gap-0 p-0 *:border-l-2 *:border-l-slate-200 last:*:border-l-0 dark:*:border-l-slate-900")}>
         {props.map(({ label, onClick }) => (
            <button
               key={label}
               onClick={onClick}
               className="flex w-full cursor-pointer items-center justify-center border-b-4 border-transparent py-3 hover:bg-slate-100 active:bg-slate-200 dark:hover:bg-slate-700 active:dark:bg-slate-800"
            >
               {label}
            </button>
         ))}
      </div>
   );
};

export default RadioButtons;
