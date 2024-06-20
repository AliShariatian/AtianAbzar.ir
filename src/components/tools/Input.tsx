"use client";

import { ChangeEvent, FC } from "react";
import cn from "@/utils/cn";

export type TInput = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type TProps = {
   id: string;
   label: string;
   placeholder: string;
   value: string;
   unit?: string;
   min?: number;
   className?: string;
   type?: "text" | "textArea";
   inputMode?: "search" | "text" | "email" | "tel" | "url" | "decimal" | "none" | "numeric";
   isRtl?: boolean;
   isComma?: boolean;
   isFocus?: boolean;
   isPersianNumber?: boolean;
   onChange: (ev: TInput) => void;
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
   type = "text",
   isRtl = false,
   isComma = true,
   isFocus = false,
   isPersianNumber = true,
   inputMode = "decimal",
}): JSX.Element => {
   const inputValue = isRtl ? value : isComma ? Number(value).toLocaleString() : value;
   const inputClassName = `${isRtl ? "text-wrap text-right" : "truncate text-left"} 
                           ${isPersianNumber === false ? "font-sans" : null} 
                           w-full bg-transparent outline-none`;

   return (
      <label htmlFor={id} className={cn("userHandle border-2 border-transparent has-[:focus]:border-slate-400", className)}>
         <span className="mb-auto ml-3 flex w-fit items-center whitespace-nowrap font-semibold">{label}:</span>

         {type === "text" ? (
            <input
               id={id}
               dir={isRtl ? "rtl" : "ltr"}
               type="text"
               inputMode={inputMode}
               autoFocus={isFocus}
               placeholder={placeholder}
               min={min}
               value={inputValue}
               onChange={onChange}
               className={inputClassName}
            />
         ) : (
            <div className="w-full">
               <textarea
                  id={id}
                  dir={isRtl ? "rtl" : "ltr"}
                  inputMode={inputMode}
                  value={inputValue}
                  onChange={onChange}
                  autoFocus={isFocus}
                  placeholder={placeholder}
                  className={`${inputClassName} resize-y placeholder:font-dana`}
                  rows={3}
               />
            </div>
         )}

         {unit && <div className="flex items-center whitespace-nowrap text-left text-sm">{unit}</div>}
      </label>
   );
};

export default Input;
