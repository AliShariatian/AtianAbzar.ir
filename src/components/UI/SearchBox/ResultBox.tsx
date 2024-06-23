import { FC } from "react";
import Link from "next/link";
import { TTools } from "@/public/data/tools/tools";
import { replaceToolTitle } from "@/utils/replaceToolTitle";

type TProps = {
   isOpenResultBox: boolean;
   isLoading: boolean;
   searchResult: TTools | null;
   setSearchInputValue: (value: string) => void;
   setIsOpenResultBox: (value: boolean) => void;
};

const ResultBox: FC<TProps> = ({ isOpenResultBox, searchResult, isLoading, setIsOpenResultBox, setSearchInputValue }): JSX.Element => {
   return (
      <>
         {isOpenResultBox && !!searchResult?.length ? (
            // Result list
            <ul className="absolute left-0 top-12 max-h-48 min-h-12 w-full overflow-x-hidden overflow-y-scroll rounded-xl border border-slate-200 bg-slate-50 shadow *:w-full *:border-b-2 *:border-slate-200 *:transition-colors last:*:border-none hover:*:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:*:border-slate-800 dark:hover:*:bg-slate-950 [&>li>a]:line-clamp-1 [&>li>a]:size-full [&>li>a]:px-7 [&>li>a]:py-3">
               {searchResult?.map(({ title, slug }, index) => (
                  <li key={index}>
                     <Link
                        href={`/${slug}`}
                        title={title}
                        onClick={() => {
                           setSearchInputValue("");
                           setIsOpenResultBox(false);
                        }}
                     >
                        {replaceToolTitle(title)}
                     </Link>
                  </li>
               ))}
            </ul>
         ) : isOpenResultBox && !isLoading ? (
            // Not found
            <div className="absolute left-0 top-12 flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-5 py-8 dark:border-slate-700 dark:bg-slate-900">
               <span className="text-lg font-bold">اوه! چیزی پیدا نشد</span>
               <span className="text-wrap text-center font-light">سعی کن از توی لیست ابزارها هم بگردی...</span>

               <Link
                  href="/#tools"
                  onClick={() => setIsOpenResultBox(false)}
                  className="mt-9 rounded-xl border-2 bg-slate-200 px-5 py-1 font-medium shadow transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:hover:bg-slate-800"
               >
                  رفتن به لیست ابزارها
               </Link>
            </div>
         ) : null}
      </>
   );
};

export default ResultBox;
