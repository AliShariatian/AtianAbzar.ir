import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | تبدیل آنلاین کسر به درصد`,
   description: "کسر به درصد | محاسبه آنلاین کسر به درصد | ماشین حساب کسر به درصد",
};

const FractionToPercentageConverter: FC = (): JSX.Element => {
   const topSide = <Logic />;
   const bottomSide = "";

   return <ToolPageContainer bottomSide={bottomSide} topSide={topSide} />;
};

export default FractionToPercentageConverter;
