"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { navbarItems, navbarItemsType } from "@/utils/persianTexts";
import { socials } from "@/utils/social";

// COMPONENT
import Link from "next/link";
import { Social } from "@/components";

const Navbar: FC = (): JSX.Element => {
   const currentPath = usePathname();

   const ClickForScrollHandler = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView();
      }
   };

   return (
      <nav className="fixed right-0 top-0 z-40 flex h-16 w-full justify-center bg-slate-100 shadow">
         <div className="flex items-center justify-between xl:w-10/12">
            <ul className="flex justify-center gap-2 max-xl:w-full xl:gap-4">
               {navbarItems.map((item: navbarItemsType, index: number) => {
                  {
                     if (index === 1) {
                        return <div key={index} className="mx-2 my-auto h-6 w-0 border-l border-slate-800/30 p-0" />;
                     }

                     return (
                        <Link
                           onClick={() => ClickForScrollHandler(item.slug)}
                           href={item.slug}
                           key={index}
                           className={`${currentPath === item.slug ? "!opacity-100" : ""} p-2 font-extrabold opacity-60 transition-opacity hover:opacity-100`}
                        >
                           <li>{item.title}</li>
                        </Link>
                     );
                  }
               })}
            </ul>

            {/* Social links */}
            <div className="hidden flex-row-reverse items-baseline gap-5 opacity-95 xl:flex">
               <Social data={socials} scale={24} />
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
