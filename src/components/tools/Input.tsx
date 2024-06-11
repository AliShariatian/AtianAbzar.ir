import { ChangeEvent, FC } from "react";
import cn from "@/utils/cn";

type TProps = {
   id: string;
   label: string;
   placeholder: string;
   value: string;
   unit?: string;
   min?: number;
   className?: string;
   isRtl?: boolean;
   isComma?: boolean;
   isFocus?: boolean;
   onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<TProps> = ({
   id,
   label,
   onChange,
   placeholder,
   value,
   min = 0,
   className,
   unit,
   isRtl = false,
   isComma = true,
   isFocus = false,
}): JSX.Element => {
   return (
      <div className={cn("userHandle", className)}>
         <label htmlFor={id} className="ml-6 flex w-fit items-center whitespace-nowrap font-semibold">
            {label}:
         </label>

         <input
            dir={isRtl ? "rtl" : "ltr"}
            id={id}
            type="text"
            autoFocus={isFocus}
            placeholder={placeholder}
            min={min}
            value={isRtl ? value : isComma ? Number(value).toLocaleString() : value}
            onChange={onChange}
            className={`${isRtl ? "text-wrap text-right" : "truncate text-left"} w-full bg-transparent outline-none`}
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
