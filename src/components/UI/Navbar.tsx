"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { navbarItems, navbarItemsType } from "@/utils/persianTexts";
import { socials } from "@/utils/social";
// COMPONENT
import { A, Social } from "@/components";

const Navbar: FC = (): JSX.Element => {
   const currentPath = usePathname();

   return (
      <nav className="fixed right-0 top-0 z-40 flex h-16 w-full items-center justify-between bg-slate-100 shadow xl:px-28">
         <ul className="mx-auto flex justify-center gap-2 xl:mx-0 xl:mr-20 xl:gap-4">
            {navbarItems.map((item: navbarItemsType, index: number) => {
               {
                  if (index === 1) {
                     return <div key={index} className="mx-2 my-auto h-6 w-0 border-l border-slate-800/60 p-0 opacity-60" />;
                  }

                  return (
                     <A
                        href={item.slug}
                        key={index}
                        className={`${currentPath === item.slug ? "!opacity-100" : ""} p-2 opacity-60 font-bold transition-opacity hover:opacity-100`}
                     >
                        <li>{item.title}</li>
                     </A>
                  );
               }
            })}
         </ul>

         {/* Social links */}
         <div className="hidden flex-row-reverse items-baseline gap-5 opacity-95 xl:flex">
            <Social data={socials} scale={24} />
         </div>
      </nav>
   );
};

export default Navbar;
