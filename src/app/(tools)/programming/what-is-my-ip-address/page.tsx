import { FC } from "react";
import type { Metadata } from "next";
import { metaTitle } from "@/public/data/persianTexts";
// COMPONENT
import { ToolPageContainer } from "@/components";
import Logic from "./Logic";

export const metadata: Metadata = {
   title: `${metaTitle} | آدرس آی پی من`,
   description: "آدرس ip | آدرس آی پی | ای پی | آی پی | ایپی | ip | آدرس آی پی من",
};

const PersianUrlRepair: FC = (): JSX.Element => {
   const topSide = <Logic />;
   const bottomSide = "";

   return <ToolPageContainer bottomSide={bottomSide} topSide={topSide} />;
};

export default PersianUrlRepair;
