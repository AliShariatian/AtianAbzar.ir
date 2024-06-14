"use client";

import { FC, useEffect, useState } from "react";
import { valueValidation } from "@/utils/numberValidation";
import { Input, ResultLine, Output } from "@/components";

const Logic: FC = (): JSX.Element => {
   const [percentage, setPercentage] = useState<string>("10");
   const [fromValue, setFromValue] = useState<string>("500");

   const [percentageResult, setPercentageResult] = useState<number>(0);

   const percentageLabel: string = "درصد مورد نظر" as const;
   const fromValueLabel: string = "از مقدار" as const;
   const resultLabel: string = "می‌شود" as const;

   const percentageChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setPercentage(valueValidation(ev.target.value));
   };

   const fromValueChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setFromValue(valueValidation(ev.target.value));
   };

   useEffect(() => {
      setPercentageResult((Number(fromValue) * Number(percentage)) / 100);
   }, [fromValue, percentage]);

   return (
      <>
         {/* Percentage */}
         <Input isFocus id="percentage" unit="%" label={percentageLabel} onChange={percentageChangeHandler} placeholder={percentageLabel} value={percentage} />

         {/* From Value */}
         <Input id="fromValue" label={fromValueLabel} onChange={fromValueChangeHandler} placeholder={fromValueLabel} value={fromValue} />

         <ResultLine />

         {/* Outputs */}
         <Output value={percentageResult} description={resultLabel} />
      </>
   );
};

export default Logic;
