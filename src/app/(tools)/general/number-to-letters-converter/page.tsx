import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | تبدیل آنلاین عدد به حروف`,
   description: "تبدیل آنلاین عدد به حروف | تبدیل آنلاین عدد به حروف فارسی | عدد به حروف",
};

const NumberToLettersConverter: FC = (): JSX.Element => {
   const topSide = <Logic />;
   const bottomSide = "";

   return <ToolPageContainer bottomSide={bottomSide} topSide={topSide} />;
};

export default NumberToLettersConverter;
