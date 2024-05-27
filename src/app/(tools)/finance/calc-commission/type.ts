type TResultInitialValueItem = {
   description: string;
   unit: string;
};

export type TResultInitialValue = {
   commissionPrice: TResultInitialValueItem;
   salesPricePlusCommission: TResultInitialValueItem;
   salesPriceMinusCommission: TResultInitialValueItem;
};
