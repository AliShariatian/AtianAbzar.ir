"use client";

import { FC, useState } from "react";
import { valueValidation } from "@/utils/numberValidation";
import { Input, ResultLine, Output } from "@/components";
import { numberToWords } from "@persian-tools/persian-tools";

const Logic: FC = (): JSX.Element => {
   const [numberInputValue, setNumberInputValue] = useState<string>("0");

   const [letters, setLetters] = useState<string | TypeError>("صفر");

   const numberToLetterHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const number: string = valueValidation(ev.target.value);

      setNumberInputValue(number);
      setLetters(typeof numberToWords(number) === "object" ? "عدد وارد شده خیلی بزرگ است!" : numberToWords(number));
   };

   return (
      <>
         {/* Number */}
         <Input id="number" label={"عدد"} onChange={numberToLetterHandler} placeholder={"عدد را وارد کنید"} value={numberInputValue} />

         <ResultLine />

         {/* Outputs */}
         <Output value={letters} description="حروف" rtl />
      </>
   );
};

export default Logic;
