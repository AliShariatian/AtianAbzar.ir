"use client";

import { ChangeEvent, FC, FocusEvent, useEffect, useState } from "react";
import useDebounce from "@/hook/useDebounce";
import Link from "next/link";
import cn from "@/utils/cn";

// Data
import { tools, TTools } from "@/public/data/tools/tools";

const OPEN_RESULT_BOX_MIN_CHARACTER_LENGTH = 2;

const SearchBox: FC = (): JSX.Element => {
   const [searchInputValue, setSearchInputValue] = useState<string>("");
   const [searchResult, setSearchResult] = useState<TTools | null>(null);

   const [isOpenResultBox, setIsOpenResultBox] = useState<boolean>(false);

   const debouncedSearchValue = useDebounce({ value: searchInputValue, minValueLimit: OPEN_RESULT_BOX_MIN_CHARACTER_LENGTH }) as string;

   // onChange
   const searchInputChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
      setSearchInputValue(ev.target.value);
   };

   useEffect(() => {
      setSearchResult(tools.filter(({ title }) => (debouncedSearchValue === "" ? null : title.includes(debouncedSearchValue))));
      setIsOpenResultBox(searchResult?.length ? true : false);
   }, [debouncedSearchValue, searchResult?.length]);

   return (
      <>
         {/* Break Screen */}
         {isOpenResultBox && <div onClick={() => setIsOpenResultBox(false)} className="fixed left-0 top-0 z-30 h-svh w-svw bg-slate-400 opacity-40" />}

         {/* Search */}
         <div className="relative z-40 w-96">
            <div className={cn("userHandle", "h-11 items-center border-2 border-slate-200 py-0 shadow-none transition-shadow hover:shadow max-xl:hidden")}>
               {/* Search Input */}
               <input
                  value={searchInputValue}
                  onClick={() => setIsOpenResultBox(true)}
                  onChange={searchInputChangeHandler}
                  type="search"
                  placeholder="جستجوی ابزارها..."
                  maxLength={30}
                  className="size-full bg-transparent outline-none"
               />
            </div>

            {/* Result */}
            {isOpenResultBox && searchInputValue.length > OPEN_RESULT_BOX_MIN_CHARACTER_LENGTH ? (
               <ul
                  dir="ltr"
                  className="absolute left-0 top-12 max-h-48 min-h-12 w-full overflow-x-hidden overflow-y-scroll rounded-xl border border-slate-200 bg-slate-50 py-1 text-right shadow *:w-full *:border-b-2 *:border-slate-200 *:px-7 *:py-3 *:transition-colors last:*:border-none hover:*:bg-slate-100"
               >
                  {searchResult?.map(({ title, slug }, index) => (
                     <li key={index}>
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
            ) : null}
         </div>
      </>
   );
};

export default SearchBox;
