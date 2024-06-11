import { FC } from "react";
import { TRadioButtonProps } from "./type";

const RadioButton: FC<TRadioButtonProps> = ({ props }): JSX.Element => {
   return (
      <ul className="flex w-full overflow-hidden rounded-xl text-lg shadow *:w-full">
         {props.map(({ id, label, name, onChange, defaultChecked }) => (
            <li key={id}>
               <input defaultChecked={defaultChecked} onChange={onChange} type="radio" id={id} name={name} value={id} className="peer hidden" />
               <label
                  htmlFor={id}
                  className="flex w-full cursor-pointer items-center justify-center bg-slate-50 py-4 hover:bg-slate-100 peer-checked:bg-slate-300"
               >
                  {label}
               </label>
            </li>
         ))}
      </ul>
   );
};

export default RadioButton;
