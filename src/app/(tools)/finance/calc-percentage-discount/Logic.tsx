"use client";

import { FC, useEffect, useState } from "react";
import { valueValidation } from "@/utils/numberValidation";
import { Input, ResultLine, Output } from "@/components";
import { TInput } from "@/components/tools/Input";

const resultText = {
   finalPrice: { description: "مبلغی که باید پرداخت کنید", unit: "تومان" },
   profitPrice: { description: "سود شما", unit: "تومان" },
};

const Logic: FC = (): JSX.Element => {
   const [mainPrice, setMainPrice] = useState<string>("10000");
   const [discountPercentage, setDiscountPercentage] = useState<string>("60");

   const [finalPrice, setFinalPrice] = useState<number>(0);
   const [profitPrice, setProfitPrice] = useState<number>(0);

   const salesPriceLabel: string = "قیمت اصلی" as const;
   const salesPriceUnit: string = "تومان" as const;

   const discountPriceLabel: string = "مقدار تخفیف" as const;
   const discountPercentageUnit: string = "درصد" as const;

   const salesPriceChangeHandler = (ev: TInput) => {
      setMainPrice(valueValidation(ev.target.value));
   };

   const commissionPercentageChangeHandler = (ev: TInput) => {
      setDiscountPercentage(valueValidation(ev.target.value));
   };

   useEffect(() => {
      setFinalPrice(Number(mainPrice) - (Number(mainPrice) * Number(discountPercentage)) / 100);
      setProfitPrice((Number(mainPrice) * Number(discountPercentage)) / 100);
   }, [discountPercentage, finalPrice, mainPrice]);

   return (
      <>
         {/* Main Price */}
         <Input
            isFocus
            id="mainPrice"
            label={salesPriceLabel}
            unit={salesPriceUnit}
            onChange={salesPriceChangeHandler}
            placeholder={salesPriceLabel}
            value={mainPrice}
         />

         {/* Discount Percentage */}
         <Input
            id="discountPercentage"
            label={discountPriceLabel}
            unit={discountPercentageUnit}
            onChange={commissionPercentageChangeHandler}
            placeholder={discountPriceLabel}
            value={discountPercentage}
         />

         <ResultLine />

         {/* Outputs */}
         <Output value={finalPrice} description={resultText.finalPrice.description} unit={resultText.finalPrice.unit} />
         <Output value={profitPrice} description={resultText.profitPrice.description} unit={resultText.profitPrice.unit} />
      </>
   );
};

export default Logic;
