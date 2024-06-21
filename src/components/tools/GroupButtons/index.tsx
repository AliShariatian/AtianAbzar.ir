import { FC } from "react";
import cn from "@/utils/cn";
import { TGroupButtonsProps } from "./type";

const RadioButtons: FC<TGroupButtonsProps> = ({ props }): JSX.Element => {
   return (
      <div className={cn("userHandle overflow-hidden", "py-0 px-0")}>
         {props.map(({ label, onClick }) => (
            <button
               key={label}
               onClick={onClick}
               className="flex w-full cursor-pointer items-center justify-center border-b-4 border-transparent py-3 hover:border-slate-400 hover:bg-slate-100 hover:dark:border-slate-400 dark:hover:bg-slate-700"
            >
               {label}
            </button>
         ))}
      </div>
   );
};

export default RadioButtons;
