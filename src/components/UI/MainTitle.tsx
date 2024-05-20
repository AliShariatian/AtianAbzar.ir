"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { TiltEffect } from "@/components";

type TProps = {
   title: string | undefined;
   description: string;
};

const MainTitle: FC<TProps> = ({ description, title }): JSX.Element => {
   return (
      <div className="mt-20 flex flex-col items-center justify-center xl:mt-9">
         {/* TITLE */}
         <div className="w-full text-center">
            <div className="relative text-ellipsis text-center">
               <span className="absolute -top-3 right-0 -z-10 w-full select-none font-morabba text-6xl font-bold text-slate-200 opacity-50 xl:-top-9 xl:text-9xl">
                  {title}
               </span>
               <motion.h2
                  drag
                  dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                  dragElastic={0.8}
                  className="mx-auto w-fit cursor-default font-morabba text-5xl font-extrabold xl:text-8xl"
               >
                  <TiltEffect>{title}</TiltEffect>
               </motion.h2>
            </div>

            {/* --- DESCRIPTION --- */}
            <motion.h1
               drag
               dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
               dragElastic={0.8}
               className="mt-9 cursor-default px-5 font-dana text-base font-medium opacity-[0.7] xl:mt-12 xl:px-0 xl:text-lg"
            >
               {description}
            </motion.h1>
         </div>
      </div>
   );
};

export default MainTitle;
