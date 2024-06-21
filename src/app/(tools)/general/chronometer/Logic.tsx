"use client";

import { FC, useCallback } from "react";
import { useState, useEffect } from "react";
import { GroupButtons } from "@/components";
import { TGroupButtonsProps } from "@/components/tools/GroupButtons/type";
import { resultHandler } from "./time";

const Logic: FC = (): JSX.Element => {
   const [time, setTime] = useState<number>(0);
   const [isRunning, setIsRunning] = useState<boolean>(false);
   const [recordList, setRecordList] = useState<{ millisecond: string; second: string; minute: string }[]>([]);
   const [difference, setDifference] = useState<{ millisecond: string; second: string; minute: string }[]>([]);

   const { millisecond, minute, second } = resultHandler(time);

   useEffect(() => {
      let interval: ReturnType<typeof setInterval>;

      if (isRunning) {
         interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
         }, 10);
      }

      return () => clearInterval(interval);
   }, [isRunning]);

   const resetHandler = () => {
      setIsRunning(false);
      setRecordList([]);
      setTime(0);
   };

   const runHandler = useCallback(() => {
      isRunning ? setIsRunning(false) : setIsRunning(true);
   }, [isRunning]);

   const addToRecordHandler = useCallback(() => {
      setRecordList((prev) => [...prev, { millisecond, second, minute }]);
      // setDifference((prev) => [...prev, `${recordList} : ${second} : ${minute}`]);
   }, [millisecond, minute, second]);

   // key press handling
   useEffect(() => {
      const spaceKeyDownHandler = (ev: { code: string; preventDefault: () => void }): void => {
         if (ev.code === "Space") {
            ev.preventDefault();
            runHandler();
         }

         if (ev.code === "Escape") {
            ev.preventDefault();
            resetHandler();
         }

         if (ev.code === "Enter") {
            ev.preventDefault();
            addToRecordHandler();
         }
      };

      document.addEventListener("keydown", spaceKeyDownHandler);

      return () => document.removeEventListener("keydown", spaceKeyDownHandler);
   }, [addToRecordHandler, runHandler]);

   const radioButtonItems: TGroupButtonsProps = {
      props: [
         {
            label: `${isRunning ? "توقف" : Number(millisecond) === 0 && Number(second) === 0 && Number(minute) === 0 ? "شروع" : "ادامه"}`,
            onClick: runHandler,
         },
         {
            label: "ثبت",
            onClick: addToRecordHandler,
         },
         {
            label: "از نو",
            onClick: resetHandler,
         },
      ],
   };

   return (
      <>
         <div className="mx-auto mb-16 mt-9 flex items-center justify-center gap-5 rounded-xl text-5xl font-bold *:w-14 *:text-center">
            <span>{millisecond}</span>:<span>{second}</span>:<span>{minute}</span>
         </div>

         <GroupButtons {...radioButtonItems} />

         {!!recordList.length && (
            <div className="mt-12 flex w-full justify-between">
               {/* Record List */}
               <div className="flex w-1/2 flex-col xl:w-1/3">
                  <span className="text-center text-lg opacity-80">زمان‌های ثبت شده</span>
                  <ul className="mt-9 flex flex-col gap-3 *:w-full">
                     {recordList.map(({ millisecond, minute, second }, index) => (
                        <li key={index} className="flex items-center justify-between gap-4">
                           <span className="text-center">{index + 1}.</span>
                           <span className="text-left">
                              {millisecond} : {minute} : {second}
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Difference value */}
               {!!difference.length && (
                  <div className="flex w-1/2 flex-col xl:w-1/3">
                     <span className="text-center text-lg opacity-80">اختلاف با رکورد قبلی</span>
                     <ul className="mt-9 flex flex-col gap-3 *:w-full">
                        {difference.map(({ millisecond, minute, second }, index) => (
                           <li key={index} className="flex items-center justify-between gap-4">
                              <span className="text-left">
                                 {millisecond} : {minute} : {second}
                              </span>
                           </li>
                        ))}
                     </ul>
                  </div>
               )}
            </div>
         )}
      </>
   );
};

export default Logic;
