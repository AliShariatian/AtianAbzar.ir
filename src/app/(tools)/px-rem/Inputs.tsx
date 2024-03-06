"use client";

// 1 Rem === 16 Px

import { FC, useState } from "react";
import { valueValidation } from "./valueValidation";

export const Inputs: FC = (): JSX.Element => {
   const [px, setPx] = useState<number>(16);
   const [rem, setRem] = useState<number>(1);

   const pxChangeHandler = async (ev: React.ChangeEvent<HTMLInputElement>) => {
      const pxValue: number = valueValidation(ev.target.value);
      const newRem: number = pxValue / 16;

      setPx(pxValue);
      setRem(newRem);
   };

   const remChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const remValue: number = valueValidation(ev.target.value);
      const newPx: number = remValue * 16;

      setRem(remValue);
      setPx(newPx);
   };

   return (
      <>
         {" "}
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
               className="input-arrow-hide w-36 rounded-l-xl border-r-2 border-slate-100 py-4 text-center shadow outline-none"
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
               className="input-arrow-hide w-36 rounded-r-xl py-4 text-center shadow outline-none"
            />
         </div>
      </>
   );
};
