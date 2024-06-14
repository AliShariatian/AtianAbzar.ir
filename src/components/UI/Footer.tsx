"use client";

import { FC } from "react";
import { social } from "@/public/img/social";

// COMPONENT
import Link from "next/link";
import { VersionNumber } from "@/components";
import Image from "next/image";

const Footer: FC = (): JSX.Element => {
   return (
      <nav className="z-40 flex w-full justify-center pb-7 pt-72">
         <div className="flex items-center justify-between *:rounded-lg *:border *:border-slate-300 *:bg-slate-50 *:px-3 *:py-1 sm:w-11/12">
            {/* Social icons */}
            <div className="flex items-center gap-3 *:size-6">
               {social.map(({ href, imageSrc, title }) => (
                  <a href={href} key={href} target="_blank" title={title}>
                     <Image src={imageSrc} alt={title} width={25} height={25} />
                  </a>
               ))}
            </div>

            <VersionNumber className="cursor-default max-sm:hidden" />
         </div>
      </nav>
   );
};

export default Footer;
