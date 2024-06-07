"use client";

import { FC } from "react";
import { appVersionNumberInFooter } from "@/public/data/persianTexts";

// COMPONENT
import Link from "next/link";

const Footer: FC = (): JSX.Element => {
   return (
      <nav className="z-40 flex w-full justify-center pb-7 pt-72">
         <div className="flex flex-col items-center justify-between gap-y-4 *:cursor-default *:rounded-lg *:border *:border-slate-300 *:bg-slate-50 *:px-3 *:py-1 xl:w-11/12 xl:flex-row">
            <p>
               طراحی و توسعه توسط&nbsp;
               <Link href="https://shariatian.ir" target="_blank" title="رفتن به صفحه سازنده" className="font-bold hover:underline">
                  علی شریعتیان
               </Link>
            </p>

            <span>نسخه {appVersionNumberInFooter}</span>
         </div>
      </nav>
   );
};

export default Footer;
