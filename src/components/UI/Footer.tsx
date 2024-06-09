"use client";

import { FC } from "react";

// COMPONENT
import Link from "next/link";
import { VersionNumber } from "@/components";

const Footer: FC = (): JSX.Element => {
   return (
      <nav className="z-40 flex w-full justify-center pb-7 pt-72">
         <div className="flex items-center justify-between gap-y-4 *:cursor-default *:rounded-lg *:border *:border-slate-300 *:bg-slate-50 *:px-3 *:py-1 sm:w-11/12">
            <p>
               طراحی و توسعه توسط&nbsp;
               <Link href="https://shariatian.ir" target="_blank" title="رفتن به صفحه سازنده" className="font-bold hover:underline">
                  علی شریعتیان
               </Link>
            </p>

            <VersionNumber className="max-sm:hidden" />
         </div>
      </nav>
   );
};

export default Footer;
