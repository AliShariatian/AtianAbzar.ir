import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | تشخیص آنلاین کد ملی`,
   description: "صحت سنجی کد ملی | درست بودن کد ملی | کد ملی | شهر کد ملی | کد ملی برای کدام شهر است | استعلام کد ملی",
};

const IdentificationOfCodeMelli: FC = (): JSX.Element => {
   const topSide = <Logic />;
   const bottomSide = "";

   return <ToolPageContainer bottomSide={bottomSide} topSide={topSide} />;
};

export default IdentificationOfCodeMelli;
