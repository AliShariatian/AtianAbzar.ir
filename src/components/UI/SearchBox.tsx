"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import useDebounce from "@/hook/useDebounce";
import Link from "next/link";
import cn from "@/utils/cn";

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
         {/* Break Screen */}
         {isOpenResultBox && <div onClick={() => setIsOpenResultBox(false)} className="fixed left-0 top-0 z-30 h-svh w-svw bg-slate-400 opacity-40" />}

         {/* Search */}
         <div className={cn("relative z-40", className)}>
            <div className={cn("userHandle", "h-11 items-center border-2 border-slate-200 py-0 shadow-none transition-shadow hover:shadow")}>
               {/* Search Input */}
               <input
                  value={searchInputValue}
                  onClick={() => setIsOpenResultBox(true)}
                  onChange={(ev: ChangeEvent<HTMLInputElement>) => setSearchInputValue(ev.target.value)}
                  type="search"
                  placeholder="جستجوی ابزارها..."
                  maxLength={30}
                  className="size-full bg-transparent outline-none"
               />
            </div>

            {/* Result */}
            {isOpenResultBox && !!searchResult?.length ? (
               <ul className="absolute left-0 top-12 max-h-48 min-h-12 w-full overflow-x-hidden overflow-y-scroll rounded-xl border border-slate-200 bg-slate-50 py-1 shadow *:w-full *:border-b-2 *:border-slate-200 *:px-7 *:py-3 *:transition-colors last:*:border-none hover:*:bg-slate-100 [&>li>a]:line-clamp-1">
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
               <div className="absolute left-0 top-12 flex w-full flex-col items-center justify-center gap-1 rounded-xl bg-slate-50 py-5">
                  <span className="text-lg font-bold">چیزی پیدا نشد!</span>
                  <span className="text-wrap font-light">سعی کن از توی لیست ابزارها هم بگردی...</span>

                  <Link
                     href="/#tools"
                     onClick={() => setIsOpenResultBox(false)}
                     className="mt-5 rounded-xl border-2 bg-slate-200 px-5 py-1 font-medium shadow transition-colors hover:bg-slate-100"
                  >
                     رفتن به لیست ابزارها
                  </Link>
               </div>
            ) : null}
         </div>
      </>
   );
};

export default SearchBox;
