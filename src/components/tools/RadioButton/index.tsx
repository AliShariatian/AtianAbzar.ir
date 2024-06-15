import { FC } from "react";
import cn from "@/utils/cn";
import { TRadioButtonProps } from "./type";

const RadioButton: FC<TRadioButtonProps> = ({ props, title }): JSX.Element => {
   return (
      <div className={cn("userHandle overflow-hidden", "py-0 pl-0")}>
         <p className="ml-2 whitespace-nowrap font-semibold">{title}:</p>

         <ul className="flex w-full *:w-full">
            {props.map(({ id, label, name, onChange, defaultChecked }) => (
               <li key={id}>
                  <input defaultChecked={defaultChecked} onChange={onChange} type="radio" id={id} name={name} value={id} className="peer hidden" />
                  <label
                     htmlFor={id}
                     className="flex w-full cursor-pointer items-center justify-center border-b-4 border-transparent py-3 hover:bg-slate-100 peer-checked:border-slate-400 peer-checked:bg-slate-200 dark:hover:bg-slate-700 peer-checked:dark:border-slate-400 peer-checked:dark:bg-slate-600"
                  >
                     {label}
                  </label>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default RadioButton;
