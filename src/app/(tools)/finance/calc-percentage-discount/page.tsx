import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | محاسبه آنلاین درصد تخفیف`,
   description: "محاسبه آنلاین تخفیف | تخفیف | ماشین آنلاین حساب تخفیف",
};

const CalcPercentageDiscount: FC = (): JSX.Element => {
   const topSide = <Logic />;
   const bottomSide = "";

   return <ToolPageContainer bottomSide={bottomSide} topSide={topSide} />;
};

export default CalcPercentageDiscount;
