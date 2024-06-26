"use client";

import { FC, useEffect, useState } from "react";
import { valueValidation } from "@/utils/numberValidation";
import { Input, Output, ResultLine } from "@/components";
import { TInput } from "@/components/tools/Input";

const Logic: FC = (): JSX.Element => {
   const [weight, setWeight] = useState<string>("60");
   const [height, setHeight] = useState<string>("170");
   const [result, setResult] = useState<{ value: number; color: string; description: string }>({ value: 0, color: "", description: "" });

   const weightLabel: string = "وزن" as const;
   const weightUnit: string = "کیلوگرم" as const;

   const heightLabel: string = "قد" as const;
   const heightUnit: string = "سانتی‌متر" as const;

   const resultLabel: string = "BMI" as const;

   const weightChangeHandler = (ev: TInput) => {
      setWeight(valueValidation(ev.target.value));
   };

   const heightChangeHandler = (ev: TInput) => {
      setHeight(valueValidation(ev.target.value));
   };

   useEffect(() => {
      const resultValue: number = Number((Number(weight) / (Number(height) / 100) ** 2).toFixed(2));

      switch (true) {
         case resultValue < 18.5:
            setResult({ value: resultValue, color: "ring-pink-500", description: "کمبود وزن دارید" });
            break;

         case 18.5 <= resultValue && resultValue < 25:
            setResult({ value: resultValue, color: "ring-green-500", description: "وزن مناسب دارید" });
            break;

         case 25 <= resultValue && resultValue < 30:
            setResult({ value: resultValue, color: "ring-fuchsia-500", description: "اضافه وزن دارید" });
            break;

         case 30 <= resultValue && resultValue < 35:
            setResult({ value: resultValue, color: "ring-amber-500", description: "چاق هستید" });
            break;

         case 35 <= resultValue:
            setResult({ value: resultValue, color: "ring-red-500", description: "چاقی شدید دارید" });
            break;
      }
   }, [weight, height]);

   return (
      <>
         {/* Weight */}
         <Input id="weight" isFocus label={weightLabel} unit={weightUnit} onChange={weightChangeHandler} placeholder={weightLabel} value={weight} />

         {/* Height */}
         <Input id="height" label={heightLabel} unit={heightUnit} onChange={heightChangeHandler} placeholder={heightLabel} value={height} />

         <ResultLine />

         {/* Output */}
         <Output value={result.value} unit={resultLabel} borderColor={result.color} description={result.description} />
      </>
   );
};

export default Logic;
