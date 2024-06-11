"use client";

import { FC } from "react";
import { navbarItems } from "@/public/data/persianTexts";
import closeIcon from "@/public/img/close.svg";
import { tools, TTools } from "@/public/data/tools/tools";

// Components
import Link from "next/link";
import Image from "next/image";
import { VersionNumber, VitrineButton } from "@/components";
import { sampleSize } from "@/utils/arraySampler";

type TProps = {
   onClose: () => void;
   isClose: boolean;
};

const MobileNavMenu: FC<TProps> = ({ onClose, isClose }): JSX.Element => {
   return (
      <div
         className={`${isClose ? "left-full" : "left-0"} fixed top-0 z-[999] flex size-full flex-col justify-between overflow-y-scroll bg-slate-100 shadow-lg transition-[left] duration-300 xl:hidden`}
      >
         <Image onClick={onClose} src={closeIcon} alt="Close Menu" width={20} height={20} className="absolute left-9 top-9 size-5 cursor-pointer" />
         <div className="mt-9 px-16 pt-14">
            <nav>
               <ul className="flex flex-col gap-7 text-xl font-semibold">
                  {navbarItems.map(({ slug, title, className }) => {
                     return slug === "/" ? null : (
                        <li key={title} onClick={onClose}>
                           <Link href={slug} className={className}>
                              {title}
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>

            {/* Random tools list */}
            <div className={"mx-auto mt-7 grid w-full grid-cols-1 gap-2"}>
               <h5 className="mb-4 text-xl font-semibold">بعضی از ابزارها</h5>

               {sampleSize(tools, 3).map((item) => {
                  if (item.title === "بزودی") return null;

                  return <VitrineButton key={item.slug} {...item} slug={`/${item.slug}`} onClick={onClose} />;
               })}
            </div>
         </div>

         <div className="mb-9 mt-16 flex flex-col items-center justify-center gap-5">
            <h2 onClick={onClose} className="font-bold">
               <Link href={navbarItems[0].slug} className={navbarItems[0].className}>
                  {navbarItems[0].title}
               </Link>
            </h2>
            <VersionNumber />
         </div>
      </div>
   );
};

export default MobileNavMenu;
