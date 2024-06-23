import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";

// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} |  محاسبه آنلاین bmi`,
   description: "محاسبه bmi | bmi | محاسبه آنلاین شاخص توده بدنی | شاخص توده بدنی",
};

const CalcBMI: FC = (): JSX.Element => {
   const topSide = <Logic />;
   const bottomSide = "";

   return <ToolPageContainer bottomSide={bottomSide} topSide={topSide} />;
};

export default CalcBMI;
