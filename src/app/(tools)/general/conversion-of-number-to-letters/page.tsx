import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | تبدیل عدد به حروف`,
   description: "تبدیل عدد به حروف | تبدیل عدد به حروف فارسی | عدد به حروف",
};

const PxRem: FC = (): JSX.Element => {
   const rightSide = <Logic />;
   const leftSide = "";

   return <ToolPageContainer leftSide={leftSide} rightSide={rightSide} />;
};

export default PxRem;
