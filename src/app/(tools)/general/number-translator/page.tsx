import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | تبدیل آنلاین اعداد فارسی به انگلیسی`,
   description: "تبدیل آنلاین اعداد | تبدیل عدد فارسی به انگلیسی | تبدیل اعداد",
};

const NumberTranslator: FC = (): JSX.Element => {
   const topSide = <Logic />;
   const bottomSide = "";

   return <ToolPageContainer bottomSide={bottomSide} topSide={topSide} />;
};

export default NumberTranslator;
