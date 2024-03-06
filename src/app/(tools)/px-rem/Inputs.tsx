"use client";

// 1 Rem === 16 Px

import { FC, useState } from "react";
import { valueValidation } from "./valueValidation";

export const Inputs: FC = (): JSX.Element => {
   const [px, setPx] = useState<string>("16");
   const [rem, setRem] = useState<string>("1");

   const pxChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const pxValue: string = valueValidation(ev.target.value);
      const newRem: string = (Number(pxValue) / 16).toString();

      setPx(pxValue);
      setRem(newRem);
   };

   const remChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const remValue: string = valueValidation(ev.target.value);
      const newPx: string = (Number(remValue) * 16).toString();

      setRem(remValue);
      setPx(newPx);
   };

   return (
      <div className="flex gap-0.5">
         {/* REM */}
         <div className="flex flex-col gap-2">
            <label htmlFor="px" className="mx-auto">
               Rem
            </label>
            <input
               id="px"
               type="number"
               placeholder="Rem"
               min={0}
               max={1000}
               value={rem}
               onChange={remChangeHandler}
               className="input-arrow-hide w-28 rounded-l-xl bg-slate-50 py-5 text-center shadow-md outline-none xl:w-44"
            />
         </div>

         {/* PX */}
         <div className="flex flex-col gap-2">
            <label htmlFor="px" className="mx-auto">
               Px
            </label>
            <input
               id="px"
               type="number"
               placeholder="Px"
               min={0}
               max={1000}
               value={px}
               onChange={pxChangeHandler}
               className="input-arrow-hide w-28 rounded-r-xl bg-slate-50 py-5 text-center shadow-md outline-none xl:w-44"
            />
         </div>
      </div>
   );
};
