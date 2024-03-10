import { FC } from "react";

type PropsType = {
   id: string;
   min?: number;
   value: string;
   label: string;
   placeholder: string;
   onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<PropsType> = ({ id, label, onChange, placeholder, value, min = 0 }): JSX.Element => {
   return (
      <div className="flex w-full flex-row justify-between gap-2 rounded-xl bg-slate-50 px-8 py-4 shadow">
         <label htmlFor={id} className="flex items-center text-lg">
            {label}
         </label>
         <input
            dir="ltr"
            id={id}
            type="number"
            placeholder={placeholder}
            min={min}
            value={value}
            onChange={onChange}
            className="input-arrow-hide w-4/5 bg-transparent text-left font-medium outline-none placeholder:text-lg"
         />
      </div>
   );
};

export default Input;
