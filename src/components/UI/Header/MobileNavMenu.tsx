"use client";

import { FC } from "react";
import { navbarItems } from "@/public/data/persianTexts";
import closeIcon from "@/public/img/close.svg";

import Link from "next/link";
import Image from "next/image";
import { VersionNumber } from "@/components";

type TProps = {
   onClose: () => void;
   isClose: boolean;
};

const MobileNavMenu: FC<TProps> = ({ onClose, isClose }): JSX.Element => {
   return (
      <div
         className={`${isClose ? "left-full" : "left-0"} fixed top-0 z-[999] flex h-full w-full flex-col justify-between bg-slate-100 shadow-lg transition-[left] duration-300 xl:hidden`}
      >
         <Image onClick={onClose} src={closeIcon} alt="close" width={20} height={20} className="absolute left-9 top-9 size-5" />

         <nav className="mt-9 p-14">
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

         <div className="mb-9 flex flex-col items-center justify-center gap-5">
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
