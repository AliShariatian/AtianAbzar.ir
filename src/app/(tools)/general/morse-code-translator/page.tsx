import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | مترجم آنلاین کد مورس`,
   description: "تبدیل کد مورس | محاسبه آنلاین کد مورس | کد مورس | کد مورس همستر | مترجم آنلاین کد مورس | تبدیل آنلاین کننده کد مورس | مورس | morse code | morse code translator",
};

const MorseCodeTranslator: FC = (): JSX.Element => {
   const topSide = <Logic />;
   const bottomSide = "";

   return <ToolPageContainer bottomSide={bottomSide} topSide={topSide} />;
};

export default MorseCodeTranslator;
