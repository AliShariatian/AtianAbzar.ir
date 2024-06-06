"use client";

import { FC, useEffect, useState } from "react";
import { valueValidation } from "@/utils/numberValidation";
import { Input, Output, ResultLine } from "@/components";
import { TResultInitialValue } from "./type";

const resultText: TResultInitialValue = {
   commissionPrice: { description: "مبلغ کمیسیون", unit: "تومان" },
   salesPricePlusCommission: { description: "قیمت فروش + کمیسیون", unit: "تومان" },
   salesPriceMinusCommission: { description: "قیمت فروش - کمیسیون", unit: "تومان" },
};

const Logic: FC = (): JSX.Element => {
   const [salesPrice, setSalesPrice] = useState<string>("25000");
   const [commissionPercentage, setCommissionPercentage] = useState<string>("35");

   const [commissionPrice, setCommissionPrice] = useState<number>(0);
   const [salesPricePlusCommission, setSalesPricePlusCommission] = useState<number>(0);
   const [salesPriceMinusCommission, setSalesPriceMinusCommission] = useState<number>(0);

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
      setCommissionPrice((Number(salesPrice) * Number(commissionPercentage)) / 100);
      setSalesPricePlusCommission(Number(salesPrice) + commissionPrice);
      setSalesPriceMinusCommission(Number(salesPrice) - commissionPrice);
   }, [commissionPercentage, commissionPrice, salesPrice]);

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

         <ResultLine />

         {/* Outputs */}
         <Output value={commissionPrice} description={resultText.commissionPrice.description} unit={resultText.commissionPrice.unit} />
         <Output
            value={salesPricePlusCommission}
            description={resultText.salesPricePlusCommission.description}
            unit={resultText.salesPricePlusCommission.unit}
         />
         <Output
            value={salesPriceMinusCommission}
            description={resultText.salesPriceMinusCommission.description}
            unit={resultText.salesPriceMinusCommission.unit}
         />
      </>
   );
};

export default Logic;
