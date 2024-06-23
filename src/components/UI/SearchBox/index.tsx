"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import useDebounce from "@/hook/useDebounce";

// Utils
import cn from "@/utils/cn";
import { replaceToolTitle } from "@/utils/replaceToolTitle";

// Components
import Image from "next/image";

// Image
import searchIcon from "@/public/img/search.svg";

// Data
import { tools, TTools } from "@/public/data/tools/tools";
import ResultBox from "./ResultBox";

type TProps = {
   className?: string;
};

const SearchBox: FC<TProps> = ({ className }): JSX.Element => {
   const [searchInputValue, setSearchInputValue] = useState<string>("");
   const [searchResult, setSearchResult] = useState<TTools | null>(null);
   const [isOpenResultBox, setIsOpenResultBox] = useState<boolean>(false);

   const [debouncedSearchValue, isLoading] = useDebounce({ value: searchInputValue, minValueLimit: 2 }) as [string, boolean];

   useEffect(() => {
      setSearchResult(
         tools.filter(({ title }) => {
            return debouncedSearchValue.trim() === "" ? null : replaceToolTitle(title).includes(replaceToolTitle(debouncedSearchValue));
         }),
      );
   }, [debouncedSearchValue]);

   return (
      <>
         {/* Backdrop Screen */}
         {isOpenResultBox && (
            <div
               onClick={() => setIsOpenResultBox(false)}
               className="fixed left-0 top-0 z-30 h-svh w-svw bg-slate-800 opacity-40 dark:bg-slate-950 dark:opacity-80"
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
            <ResultBox
               isLoading={isLoading}
               isOpenResultBox={isOpenResultBox}
               searchResult={searchResult}
               setIsOpenResultBox={setIsOpenResultBox}
               setSearchInputValue={setSearchInputValue}
            />
         </label>
      </>
   );
};

export default SearchBox;
