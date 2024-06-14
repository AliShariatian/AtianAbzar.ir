import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | تبدیل کسر به درصد`,
   description: "کسر به درصد | محاسبه کسر به درصد | ماشین حساب کسر به درصد",
};

const CalcPercentageDiscount: FC = (): JSX.Element => {
   const rightSide = <Logic />;
   const leftSide = "";

   return <ToolPageContainer leftSide={leftSide} rightSide={rightSide} />;
};

export default CalcPercentageDiscount;
