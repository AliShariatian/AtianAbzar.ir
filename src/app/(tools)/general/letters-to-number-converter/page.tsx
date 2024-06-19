import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | تبدیل آنلاین حروف به عدد`,
   description: "تبدیل آنلاین حروف به عدد | تبدیل حروف فارسی به عدد | حروف به عدد",
};

const PxRem: FC = (): JSX.Element => {
   const topSide = <Logic />;
   const bottomSide = "";

   return <ToolPageContainer bottomSide={bottomSide} topSide={topSide} />;
};

export default PxRem;
