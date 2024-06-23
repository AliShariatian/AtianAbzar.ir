"use client";

import { FC, useEffect, useState } from "react";
import { Output } from "@/components";
import { TIpData } from "./type";

const errorText: string = "خطا در دریافت اطلاعات!" as const;

const Logic: FC = (): JSX.Element => {
   const [ipData, setIpData] = useState<TIpData | null>(null);
   const [error, setError] = useState<string | null>(null);

   const getIpData = () => {
      fetch("http://api.ipify.org/?format=json")
         .then((response) => response.json())
         .then((data) => {
            setError(null);
            return fetch(`http://ip-api.com/json/${data.ip}`);
         })
         .then((response) => response.json())
         .then((data) => {
            setError(null);
            setIpData(data);
         })
         .catch((_) => {
            setError(errorText);
         });
   };

   useEffect(() => {
      getIpData();
   }, []);

   return (
      <>
         {/* Outputs */}

         {error ? (
            <div className="flex w-full flex-col items-center justify-center gap-9 rounded-xl p-5">
               <span className="text-red-500 xl:text-3xl">{error}</span>
               <button onClick={getIpData} className="btnGreen">
                  تلاش مجدد
               </button>
            </div>
         ) : (
            <>
               <Output value={ipData?.query} description="آی‌پی دستگاه" isPersianNumber={false} />
               <Output value={ipData?.timezone} description="منطقه زمانی" />
               <Output value={ipData?.country} description="کشور" />
               <Output value={ipData?.city} description="شهر" />
               <Output value={ipData?.isp} description="سرویس دهنده" />
               <Output value={ipData?.as} description="سامانه خودگردان" isPersianNumber={false} />
            </>
         )}
      </>
   );
};

export default Logic;
