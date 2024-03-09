"use client";

import { FC } from "react";

// COMPONENT
import Link from "next/link";

const Footer: FC = (): JSX.Element => {
   return (
      <nav className="z-40 flex w-full justify-center pb-5 pt-72">
         <div className="flex items-center justify-between xl:w-10/12">
            <p className="w-full text-center">
               طراحی و توسعه توسط&nbsp;
               <Link href="https://shariatian.ir" target="_blank" className="font-bold hover:underline">
                  علی شریعتیان
               </Link>
            </p>
         </div>
      </nav>
   );
};

export default Footer;
