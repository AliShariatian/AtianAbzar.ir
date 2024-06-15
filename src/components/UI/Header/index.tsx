"use client";

import { FC, useCallback, useState } from "react";
import hamburgerMenuIcon from "@/public/img/hamburgerMenu.svg";
import { navbarItems, TNavbarItems } from "@/public/data/persianTexts";
import ThemeToggle from "@/hook/ThemeToggle";

// COMPONENT
import Link from "next/link";
import Image from "next/image";
import { MobileNavMenu, SearchBox } from "@/components";

const Navbar: FC = (): JSX.Element => {
   const [isMobileNavMenuClose, setIsMobileNavMenuClose] = useState<boolean>(true);

   // onClick
   const toggleMobileNavMenuHandler = useCallback(() => {
      setIsMobileNavMenuClose((prev) => !prev);
   }, []);

   return (
      <nav className="fixed right-0 top-0 z-40 flex h-16 w-full justify-center bg-slate-100 shadow dark:bg-slate-900 dark:shadow-slate-800">
         {/* Hamburger Menu Items for Mobile */}
         <MobileNavMenu onClose={toggleMobileNavMenuHandler} isClose={isMobileNavMenuClose} />

         <div className="container flex w-full items-center justify-between gap-4 xl:gap-5">
            {/* Hamburger Menu Icon for Mobile */}
            <Image
               onClick={toggleMobileNavMenuHandler}
               src={hamburgerMenuIcon}
               alt="Mobile Menu"
               width={20}
               height={20}
               className="size-5 mb-1 cursor-pointer dark:opacity-90 dark:invert xl:hidden"
            />

            {/* Navbar Menu for Desktop */}
            <ul className="flex items-center justify-center gap-2 max-xl:hidden xl:gap-4">
               {navbarItems.map((item: TNavbarItems, index: number) => {
                  {
                     if (index === 1) {
                        return (
                           <div key={index} className={`${item.className} mx-2 my-auto h-6 w-0 border-l border-slate-800/30 p-0 dark:border-slate-200/60`} />
                        );
                     }

                     return (
                        <Link href={item.slug} key={index} className={`${item.className} whitespace-nowrap p-2 font-extrabold`}>
                           <li>{item.title}</li>
                        </Link>
                     );
                  }
               })}
            </ul>

            {/* Search Box */}
            <SearchBox className="flex-grow xl:mr-auto xl:w-96 xl:flex-grow-0" />

            {/* Theme Toggle Button */}
            <ThemeToggle />
         </div>
      </nav>
   );
};

export default Navbar;
