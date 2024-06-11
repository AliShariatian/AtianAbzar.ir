"use client";

import { FC, useState } from "react";
import { Input, ResultLine, Output } from "@/components";
import { verifyIranianNationalId, getPlaceByIranNationalId } from "@persian-tools/persian-tools";

const Logic: FC = (): JSX.Element => {
   const [codeInputValue, setCodeInputValue] = useState<string>("");
   const [codeResult, setCodeResult] = useState<string>("هنوز عددی وارد نکردید");

   const numberToLetterHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const number: string = ev.target.value;

      setCodeInputValue(number);

      const result = verifyIranianNationalId(number)
         ? `عددی که وارد کردید کد ملی است و شهر آن ${getPlaceByIranNationalId(number)?.city} از استان ${getPlaceByIranNationalId(number)?.province} می‌باشد.`
         : "عددی که وارد کردید کد ملی نیست!";
      setCodeResult(result);
   };

   return (
      <>
         {/* Number */}
         <Input id="number" label={"کد ملی"} isComma={false} onChange={numberToLetterHandler} placeholder={"کد ملی را وارد کنید"} value={codeInputValue} />

         <ResultLine />

         {/* Outputs */}
         <Output value={codeResult} isRtl />
      </>
   );
};

export default Logic;
