import { FC } from "react";
import cn from "@/utils/cn";
import { TRadioButtonProps } from "./type";

const RadioButton: FC<TRadioButtonProps> = ({ props, title }): JSX.Element => {
   return (
      <div className={cn("userHandle overflow-hidden", `${title ? " pl-0" : "px-0"} py-0`)}>
         {title && <p className="ml-2 whitespace-nowrap font-semibold">{title}:</p>}

         <ul className="flex w-full *:w-full *:border-l-2 *:border-l-slate-200 last:*:border-none dark:*:border-l-slate-900">
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
