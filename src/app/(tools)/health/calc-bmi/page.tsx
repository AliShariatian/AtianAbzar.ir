import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | محاسبه bmi`,
   description: "محاسبه bmi | bmi | محاسبه شاخص توده بدنی | شاخص توده بدنی",
};

const CalcBMI: FC = (): JSX.Element => {
   const rightSide = <Logic />;
   const leftSide = "";

   return <ToolPageContainer leftSide={leftSide} rightSide={rightSide} />;
};

export default CalcBMI;