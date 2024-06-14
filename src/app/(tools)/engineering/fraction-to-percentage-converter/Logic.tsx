"use client";

import { FC, useEffect, useState } from "react";
import { valueValidation } from "@/utils/numberValidation";
import { Input, ResultLine, Output } from "@/components";

const Logic: FC = (): JSX.Element => {
   const [numerator, setNumerator] = useState<string>("750");
   const [denominator, setDenominator] = useState<string>("20");

   const [percentageResult, setPercentageResult] = useState<number>(0);

   const numeratorLabel: string = "صورت کسر" as const;
   const denominatorLabel: string = "مخرج کسر" as const;
   const percentageResultLabel: string = "مقدار درصد" as const;

   const numeratorChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setNumerator(valueValidation(ev.target.value));
   };

   const denominatorChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setDenominator(valueValidation(ev.target.value));
   };

   useEffect(() => {
      setPercentageResult((Number(numerator) / Number(denominator)) * 100);
   }, [denominator, numerator]);

   return (
      <>
         {/* The numerator */}
         <Input isFocus id="numerator" label={numeratorLabel} onChange={numeratorChangeHandler} placeholder={numeratorLabel} value={numerator} />

         {/* Denominator */}
         <Input id="denominator" label={denominatorLabel} onChange={denominatorChangeHandler} placeholder={denominatorLabel} value={denominator} />

         <ResultLine />

         {/* Outputs */}
         <Output value={percentageResult} description={percentageResultLabel} unit="%" />
      </>
   );
};

export default Logic;
