import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | محاسبه آنلاین کمیسیون`,
   description: "محاسبه آنلاین کمیسیون | کمیسیون | ماشین حساب کمیسیون",
};

const CalcCommission: FC = (): JSX.Element => {
   const topSide = <Logic />;
   const bottomSide = "";

   return <ToolPageContainer bottomSide={bottomSide} topSide={topSide} />;
};

export default CalcCommission;
