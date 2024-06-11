import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | تشخیص کد ملی`,
   description: "صحت سنجی کد ملی | درست بودن کد ملی | کد ملی | شهر کد ملی | کد ملی برای کدام شهر است | استعلام کد ملی",
};

const PxRem: FC = (): JSX.Element => {
   const rightSide = <Logic />;
   const leftSide = "";

   return <ToolPageContainer leftSide={leftSide} rightSide={rightSide} />;
};

export default PxRem;