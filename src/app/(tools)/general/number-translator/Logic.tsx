"use client";

import { FC, useState } from "react";
import { Input } from "@/components";
import { TInput } from "@/components/tools/Input";
import { digitsEnToFa, digitsFaToEn } from "@persian-tools/persian-tools";

const Logic: FC = (): JSX.Element => {
   const [persianTextInputValue, setPersianTextInputValue] = useState<string>("");
   const [englishTextInputValue, setEnglishTextInputValue] = useState<string>("");

   const persianChangeHandler = (ev: TInput) => {
      const persianValue: string = ev.target.value;

      setPersianTextInputValue(persianValue);
      setEnglishTextInputValue(digitsFaToEn(persianValue));
   };

   const englishChangeHandler = (ev: TInput) => {
      const englishValue: string = ev.target.value;

      setEnglishTextInputValue(englishValue);
      setPersianTextInputValue(digitsEnToFa(englishValue));
   };

   return (
      <>
         {/* Persian */}
         <Input
            id="persian"
            type="textArea"
            inputMode="text"
            isFocus
            isComma={false}
            label="اعداد فارسی"
            onChange={persianChangeHandler}
            placeholder="عدد فارسی وارد کنید"
            value={persianTextInputValue}
         />

         {/* English */}
         <Input
            id="english"
            type="textArea"
            inputMode="text"
            isComma={false}
            isPersianNumber={false}
            label="اعداد انگلیسی"
            onChange={englishChangeHandler}
            placeholder="عدد انگلیسی وارد کنید"
            value={englishTextInputValue}
         />
      </>
   );
};

export default Logic;
