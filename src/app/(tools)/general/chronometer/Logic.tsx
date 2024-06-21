"use client";

import { ChangeEvent, FC } from "react";
import { useState, useEffect } from "react";
import { RadioButton } from "@/components";
import { TRadioButtonProps } from "@/components/tools/RadioButton/type";

const Logic: FC = (): JSX.Element => {
   const [time, setTime] = useState(0);
   const [isRunning, setIsRunning] = useState(false);

   useEffect(() => {
      let interval: ReturnType<typeof setInterval>;

      if (isRunning) {
         interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
         }, 10);
      }

      return () => clearInterval(interval);
   }, [isRunning]);

   const radioButtonChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
      switch (ev.target.value) {
         case "start":
            setIsRunning(true);
            break;

         case "stop":
            setIsRunning(false);
            break;

         case "reset":
            setIsRunning(false);
            setTime(0);
            break;
      }
   };

   const resultHandler = (): { millisecond: string; second: string; minute: string } => {
      const minute = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
      const second = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
      const millisecond = ("0" + ((time / 10) % 100)).slice(-2);

      return { millisecond, second, minute };
   };

   const radioButtonItems: TRadioButtonProps = {
      props: [
         {
            id: "start",
            label: `${Number(resultHandler().millisecond) === 0 && Number(resultHandler().second) === 0 && Number(resultHandler().minute) === 0 ? "شروع" : "ادامه"}`,
            name: "stopwatch",
            defaultChecked: false,
            onChange: radioButtonChangeHandler,
         },
         { id: "stop", label: "توقف", name: "stopwatch", defaultChecked: false, onChange: radioButtonChangeHandler },
         { id: "reset", label: "شروع مجدد", name: "stopwatch", defaultChecked: false, onChange: radioButtonChangeHandler },
      ],
   };

   return (
      <>
         <div className="mx-auto mb-16 mt-9 flex items-center justify-center gap-5 rounded-xl text-5xl font-bold *:w-14 *:text-center">
            <span>{resultHandler().millisecond}</span>:<span>{resultHandler().second}</span>:<span>{resultHandler().minute}</span>
         </div>

         <RadioButton {...radioButtonItems} />
      </>
   );
};

export default Logic;
