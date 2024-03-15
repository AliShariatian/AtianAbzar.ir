"use client";

import { FC } from "react";
import { navbarItems, navbarItemsType } from "@/public/data/persianTexts";

// COMPONENT
import Link from "next/link";

const Navbar: FC = (): JSX.Element => {
   const ClickForScrollHandler = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView();
      }
   };

   return (
      <nav className="fixed right-0 top-0 z-40 flex h-16 w-full justify-center bg-slate-100 shadow">
         <div className="container flex w-full items-center justify-between">
            <ul className="flex justify-center gap-2 max-xl:w-full xl:gap-4">
               {navbarItems.map((item: navbarItemsType, index: number) => {
                  {
                     if (index === 1) {
                        return <div key={index} className={`${item.className} mx-2 my-auto h-6 w-0 border-l border-slate-800/30 p-0`} />;
                     }

                     return (
                        <Link onClick={() => ClickForScrollHandler(item.slug)} href={item.slug} key={index} className={`${item.className} p-2 font-extrabold`}>
                           <li>{item.title}</li>
                        </Link>
                     );
                  }
               })}
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
