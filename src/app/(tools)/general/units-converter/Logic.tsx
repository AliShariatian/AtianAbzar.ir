"use client";

// 1 Rem === 16 Px

import { FC, useState } from "react";
import { valueValidation } from "@/utils/numberValidation";
import { Input, Select, ResultLine } from "@/components";
import { labels } from "./selectLabels";
import { TInput } from "@/components/tools/Input";

const Logic: FC = (): JSX.Element => {
   const [px, setPx] = useState<string>("16");
   const [rem, setRem] = useState<string>("1");

   const pxChangeHandler = (ev: TInput) => {
      const pxValue: string = valueValidation(ev.target.value);
      const newRem: string = (Number(pxValue) / 16).toString();

      setPx(pxValue);
      setRem(newRem);
   };

   const remChangeHandler = (ev: TInput) => {
      const remValue: string = valueValidation(ev.target.value);
      const newPx: string = (Number(remValue) * 16).toString();

      setRem(remValue);
      setPx(newPx);
   };

   return (
      <>
         {/* User select */}
         <Select labels={labels} />

         <ResultLine />

         {/* REM */}
         <Input id="rem" isFocus label="Rem" onChange={remChangeHandler} placeholder="Rem" value={rem} />

         {/* PX */}
         <Input id="px" label="Px" onChange={pxChangeHandler} placeholder="Px" value={px} />
      </>
   );
};

export default Logic;
