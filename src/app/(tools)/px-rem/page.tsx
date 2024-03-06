import type { Metadata } from "next";
import { FC } from "react";
import { Inputs } from "./Inputs";
import { metaTitle } from "@/utils/persianTexts";

export const metadata: Metadata = {
   title: `${metaTitle} | تبدیل Px به Rem و برعکس`,
   description: "تبدیل px به rem | تبدیل rem به px",
};

const PxRem: FC = (): JSX.Element => {
   return (
      <main className="mx-auto flex w-11/12 flex-col gap-5 rounded-xl border-2 border-dashed bg-slate-100 px-5 py-12 xl:p-12">
         <h1 className="w-full text-2xl font-bold">
            تبدیل <span className="font-jetBrains">Rem</span> به <span className="font-jetBrains">Px</span> و برعکس
         </h1>

         {/* INPUTS */}
         <section dir="ltr" className="mb-28 mt-9 flex w-full justify-center font-jetBrains text-2xl">
            <Inputs />
         </section>
      </main>
   );
};

export default PxRem;
