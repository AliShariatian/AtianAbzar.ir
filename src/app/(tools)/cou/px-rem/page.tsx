import type { Metadata } from "next";
import { FC } from "react";
import { metaTitle } from "@/utils/persianTexts";
// COMPONENT
import { Inputs } from "./Inputs";
import { ToolPageContainer } from "@/components";

export const metadata: Metadata = {
   title: `${metaTitle} | تبدیل Px به Rem و برعکس`,
   description: "تبدیل px به rem | تبدیل rem به px",
};

const PxRem: FC = (): JSX.Element => {
   const rightSide = <Inputs />;
   const leftSide = "";

   return <ToolPageContainer leftSide={leftSide} rightSide={rightSide} />;
};

export default PxRem;
