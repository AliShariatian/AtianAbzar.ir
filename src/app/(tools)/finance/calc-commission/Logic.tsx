"use client";

import { FC, memo, useEffect, useState } from "react";
import { valueValidation } from "@/utils/numberValidation";
import { Input, Space, Output } from "@/components";
import { TResultInitialValue } from "./type";

const resultInitialValue: TResultInitialValue = {
   commissionPrice: { value: 0, description: "مبلغ کمیسیون", unit: "تومان" },
   salesPricePlusCommission: { value: 0, description: "قیمت فروش + کمیسیون", unit: "تومان" },
   salesPriceMinusCommission: { value: 0, description: "قیمت فروش - کمیسیون", unit: "تومان" },
};

const Logic: FC = (): JSX.Element => {
   const [salesPrice, setSalesPrice] = useState<string>("25000");
   const [commissionPercentage, setCommissionPercentage] = useState<string>("35");
   const [result, setResult] = useState<TResultInitialValue>(resultInitialValue);

   const salesPriceLabel: string = "قیمت فروش" as const;
   const salesPriceUnit: string = "تومان" as const;

   const commissionPercentageLabel: string = "کمیسیون" as const;
   const commissionPercentageUnit: string = "درصد" as const;

   const salesPriceChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setSalesPrice(valueValidation(ev.target.value));
   };

   const commissionPercentageChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setCommissionPercentage(valueValidation(ev.target.value));
   };

   useEffect(() => {
      setResult((prev) => ({
         commissionPrice: { ...prev.commissionPrice, value: (Number(salesPrice) * Number(commissionPercentage)) / 100 },
         salesPricePlusCommission: { ...prev.salesPricePlusCommission, value: Number(salesPrice) + prev.commissionPrice.value },
         salesPriceMinusCommission: { ...prev.salesPriceMinusCommission, value: Number(salesPrice) - prev.commissionPrice.value },
      }));
   }, [commissionPercentage, salesPrice]);

   return (
      <>
         {/* Sales Price */}
         <Input
            id="salesPrice"
            label={salesPriceLabel}
            unit={salesPriceUnit}
            onChange={salesPriceChangeHandler}
            placeholder={salesPriceLabel}
            value={salesPrice}
         />

         {/* Commission Percentage */}
         <Input
            id="commissionPercentage"
            label={commissionPercentageLabel}
            unit={commissionPercentageUnit}
            onChange={commissionPercentageChangeHandler}
            placeholder={commissionPercentageLabel}
            value={commissionPercentage}
         />

         <Space />

         {/* Outputs */}
         <Output value={result.commissionPrice.value} description={result.commissionPrice.description} unit={result.commissionPrice.unit} />
         <Output
            value={result.salesPricePlusCommission.value}
            description={result.salesPricePlusCommission.description}
            unit={result.salesPricePlusCommission.unit}
         />
         <Output
            value={result.salesPriceMinusCommission.value}
            description={result.salesPriceMinusCommission.description}
            unit={result.salesPriceMinusCommission.unit}
         />
      </>
   );
};

export default memo(Logic);
