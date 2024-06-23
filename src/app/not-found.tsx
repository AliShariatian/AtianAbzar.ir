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
            <Link href="/" className="btnGreen">
               بازگشت
            </Link>
         </div>
      </main>
   );
};

export default NotFound404Page;
