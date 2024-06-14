"use client";

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
   inputMode?: "search" | "text" | "email" | "tel" | "url" | "decimal" | "none" | "numeric";
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
   inputMode = "decimal",
}): JSX.Element => {
   return (
      <label htmlFor={id} className={cn("userHandle border-2 border-transparent has-[:focus]:border-slate-400", className)}>
         <div className="ml-6 flex w-fit items-center whitespace-nowrap font-semibold">{label}:</div>

         <input
            dir={isRtl ? "rtl" : "ltr"}
            id={id}
            type="text"
            inputMode={inputMode}
            autoFocus={isFocus}
            placeholder={placeholder}
            min={min}
            value={isRtl ? value : isComma ? Number(value).toLocaleString() : value}
            onChange={onChange}
            className={`${isRtl ? "text-wrap text-right" : "truncate text-left"} w-full bg-transparent outline-none`}
         />

         {unit && <div className="flex items-center whitespace-nowrap text-left text-sm">{unit}</div>}
      </label>
   );
};

export default Input;
