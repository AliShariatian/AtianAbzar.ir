"use client";

import { FC, useState } from "react";
import { Input, ResultLine, Output } from "@/components";
import { wordsToNumber } from "@persian-tools/persian-tools";

const Logic: FC = (): JSX.Element => {
   const [lettersInputValue, setLettersInputValue] = useState<string>("صد و بیست");
   const [numbers, setNumbers] = useState<string | number>("120");

   const numberToLetterHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const number: string = ev.target.value;

      setLettersInputValue(number);
      setNumbers(wordsToNumber(number, { addCommas: true, fuzzy: true }));
   };

   return (
      <>
         {/* Number */}
         <Input id="number" isRtl label={"حروف"} onChange={numberToLetterHandler} placeholder={"حروف را وارد کنید"} value={lettersInputValue} />

         <ResultLine />

         {/* Outputs */}
         <Output value={numbers} description="عدد" />
      </>
   );
};

export default Logic;
