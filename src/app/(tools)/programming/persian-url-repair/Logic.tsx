"use client";

import { FC, useState } from "react";
import { Input, ResultLine, Output } from "@/components";
import { URLfix } from "@persian-tools/persian-tools";

const Logic: FC = (): JSX.Element => {
   const [urlInputValue, setUrlInputValue] = useState<string>("");
   const [urlResult, setUrlResult] = useState<string | undefined>("");

   const urlFixerHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const number: string = ev.target.value;

      setUrlInputValue(number);
      setUrlResult(URLfix(number));
   };

   return (
      <>
         {/* Number */}
         <Input id="url" isFocus label={"URL"} isComma={false} onChange={urlFixerHandler} placeholder={"لینک شامل حروف فارسی را وارد کنید"} value={urlInputValue} />

         <ResultLine />

         {/* Outputs */}
         <Output value={urlResult} description="URL ترمیم شده" />
      </>
   );
};

export default Logic;
