import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | مترجم کد مورس`,
   description: "تبدیل کد مورس | محاسبه کد مورس | کد مورس | کد مورس همستر | مترجم کد مورس | تبدیل کننده کد مورس | مورس | morse code | morse code translator",
};

const PxRem: FC = (): JSX.Element => {
   const topSide = <Logic />;
   const bottomSide = "";

   return <ToolPageContainer bottomSide={bottomSide} topSide={topSide} />;
};

export default PxRem;
