import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | ترمیم آنلاین لینک (URL) فارسی`,
   description: "ترمیم آنلاین لینک فارسی | اصلاح لینک فارسی | ترمیم URL فارسی | اصلاح URL فارسی",
};

const PxRem: FC = (): JSX.Element => {
   const topSide = <Logic />;
   const bottomSide = "";

   return <ToolPageContainer bottomSide={bottomSide} topSide={topSide} />;
};

export default PxRem;
