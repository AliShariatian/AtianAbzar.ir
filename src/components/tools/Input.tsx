import cn from "@/utils/cn";
import { FC } from "react";

type TProps = {
   id: string;
   label: string;
   placeholder: string;
   value: string;
   unit?: string;
   min?: number;
   className?: string;
   onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<TProps> = ({ id, label, onChange, placeholder, value, min = 0, className, unit }): JSX.Element => {
   return (
      <div className={cn("userHandle", className)}>
         <label htmlFor={id} className="flex items-center whitespace-nowrap text-lg">
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
            className="input-arrow-hide w-3/5 bg-transparent text-left outline-none placeholder:text-lg xl:w-9/12"
         />

         {unit && (
            <label htmlFor={id} className="flex items-center whitespace-nowrap text-left text-sm">
               {unit}
            </label>
         )}
      </div>
   );
};

export default Input;
