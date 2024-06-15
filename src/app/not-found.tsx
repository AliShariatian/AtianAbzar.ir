// TYPE
import { FC } from "react";
// UTIL
import { warning404Text } from "@/public/data/persianTexts";
// COMPONENT
import Link from "next/link";
// ---------------------------------

const NotFound404Page: FC = (): JSX.Element => {
   return (
      <main className="mt-20 flex flex-col items-center justify-center gap-10 xl:mt-9">
         <span className="animate-pulse font-dana text-9xl font-bold text-red-600 drop-shadow-[0_0_55px_rgba(255,0,0,0.2)]">404</span>
         <div className="flex flex-col items-center gap-7">
            <p className="text-lg">{warning404Text}</p>
            <Link
               href="/"
               className="rounded-xl bg-green-500 px-9 py-2 text-slate-100 outline -outline-offset-4 outline-green-500 transition-[outline-offset] hover:outline-offset-4 dark:bg-green-600 dark:outline-green-600"
            >
               بازگشت
            </Link>
         </div>
      </main>
   );
};

export default NotFound404Page;
