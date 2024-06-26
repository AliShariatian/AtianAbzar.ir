"use client";

import { FC, useState } from "react";
import { Input, ResultLine, Output } from "@/components";
import { wordsToNumber } from "@persian-tools/persian-tools";
import { TInput } from "@/components/tools/Input";

const Logic: FC = (): JSX.Element => {
   const [lettersInputValue, setLettersInputValue] = useState<string>("صد و بیست");
   const [numbers, setNumbers] = useState<string | number>("120");

   const letterToNumberHandler = (ev: TInput) => {
      const number: string = ev.target.value;

      setLettersInputValue(number);
      setNumbers(wordsToNumber(number, { addCommas: true, fuzzy: true }));
   };

   return (
      <>
         {/* Number */}
         <Input
            id="letter"
            inputMode="text"
            isFocus
            isRtl
            label={"حروف"}
            onChange={letterToNumberHandler}
            placeholder={"حروف را وارد کنید"}
            value={lettersInputValue}
         />

         <ResultLine />

         {/* Outputs */}
         <Output value={numbers} description="عدد" />
      </>
   );
};

export default Logic;
