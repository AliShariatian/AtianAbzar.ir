"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import cn from "@/utils/cn";
import useDebounce from "@/hook/useDebounce";
import Link from "next/link";
import Image from "next/image";
import searchIcon from "@/public/img/search.svg";

// Data
import { tools, TTools } from "@/public/data/tools/tools";

const OPEN_RESULT_BOX_MIN_CHARACTER_LENGTH = 2;

type TProps = {
   className?: string;
};

const SearchBox: FC<TProps> = ({ className }): JSX.Element => {
   const [searchInputValue, setSearchInputValue] = useState<string>("");
   const [searchResult, setSearchResult] = useState<TTools | null>(null);
   const [isOpenResultBox, setIsOpenResultBox] = useState<boolean>(false);

   const [debouncedSearchValue, isLoading] = useDebounce({ value: searchInputValue, minValueLimit: OPEN_RESULT_BOX_MIN_CHARACTER_LENGTH }) as [string, boolean];

   useEffect(() => {
      setSearchResult(tools.filter(({ title }) => (debouncedSearchValue === "" ? null : title.includes(debouncedSearchValue))));
   }, [debouncedSearchValue]);

   return (
      <>
         {/* Backdrop Screen */}
         {isOpenResultBox && (
            <div
               onClick={() => setIsOpenResultBox(false)}
               className="fixed left-0 top-0 z-30 h-svh w-svw bg-slate-400 opacity-40 dark:bg-slate-950 dark:opacity-80"
            />
         )}

         {/* Search */}
         <label htmlFor="searchInput" className={cn("relative z-40", className)}>
            <div
               className={cn(
                  "userHandle",
                  "h-11 items-center border-2 border-slate-200 px-4 py-0 shadow-none transition-shadow hover:shadow dark:border-slate-700",
               )}
            >
               {/* Search Icon */}
               <Image
                  src={searchIcon}
                  onClick={() => {
                     setIsOpenResultBox(true);
                  }}
                  alt="Search Icon"
                  width={20}
                  height={20}
                  className="ml-2 size-5 cursor-pointer opacity-40 dark:opacity-30 dark:invert"
               />
               {/* Search Input */}
               <input
                  id="searchInput"
                  value={searchInputValue}
                  onClick={() => setIsOpenResultBox(true)}
                  onChange={(ev: ChangeEvent<HTMLInputElement>) => setSearchInputValue(ev.target.value)}
                  type="search"
                  placeholder="جستجوی ابزارها..."
                  maxLength={30}
                  className="size-full bg-transparent outline-none dark:placeholder:text-slate-500"
               />
            </div>

            {/* Result */}
            {isOpenResultBox && !!searchResult?.length ? (
               <ul className="absolute left-0 top-12 max-h-48 min-h-12 w-full overflow-x-hidden overflow-y-scroll rounded-xl border border-slate-200 bg-slate-50 py-1 shadow *:w-full *:border-b-2 *:border-slate-200 *:px-7 *:py-3 *:transition-colors last:*:border-none hover:*:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:*:border-slate-800 dark:hover:*:bg-slate-950 [&>li>a]:line-clamp-1">
                  {searchResult?.map(({ title, slug }, index) => (
                     <li className="" key={index}>
                        <Link
                           href={`/${slug}`}
                           onClick={() => {
                              setSearchInputValue("");
                              setIsOpenResultBox(false);
                           }}
                        >
                           {title}
                        </Link>
                     </li>
                  ))}
               </ul>
            ) : isOpenResultBox && !isLoading ? (
               <div className="absolute left-0 top-12 flex w-full flex-col items-center justify-center gap-1 rounded-xl bg-slate-50 p-5 dark:bg-slate-900">
                  <span className="text-lg font-bold">اوه! چیزی پیدا نشد</span>
                  <span className="text-wrap text-center font-light">سعی کن از توی لیست ابزارها هم بگردی...</span>

                  <Link
                     href="/#tools"
                     onClick={() => setIsOpenResultBox(false)}
                     className="mt-5 rounded-xl border-2 bg-slate-200 px-5 py-1 font-medium shadow transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:hover:bg-slate-800"
                  >
                     رفتن به لیست ابزارها
                  </Link>
               </div>
            ) : null}
         </label>
      </>
   );
};

export default SearchBox;
