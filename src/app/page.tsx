"use client";

// TYPE
import { FC } from "react";
// UTIL
import { HomePageTexts } from "@/utils/data/persianTexts";
// COMPONENT
import { motion } from "framer-motion";
import { TiltEffect, ToolsPanel } from "@/components";
// -------------------------------------------

const HomePage: FC = (): JSX.Element => {
   return (
      <>
         <div className="mt-20 flex flex-col items-center justify-center xl:mt-9">
            {/* MAIN */}
            <main className="w-full text-center">
               <div className="relative text-ellipsis text-center">
                  <span className="absolute -top-3 right-0 -z-10 w-full select-none font-morabba text-6xl font-bold text-slate-200 opacity-50 xl:-top-9 xl:text-9xl">
                     {HomePageTexts.toolBox}
                  </span>
                  <motion.h2
                     drag
                     dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                     dragElastic={0.8}
                     className="mx-auto w-fit cursor-default font-morabba text-5xl font-extrabold xl:text-8xl"
                  >
                     <TiltEffect>{HomePageTexts.toolBox}</TiltEffect>
                  </motion.h2>
               </div>
               <motion.h1
                  drag
                  dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                  dragElastic={0.8}
                  className="mt-9 cursor-default px-5 font-dana text-base font-medium opacity-[0.7] xl:mt-12 xl:px-0 xl:text-lg"
               >
                  {HomePageTexts.description}
               </motion.h1>
            </main>
         </div>

         {/* ToolsPanel */}
         <section className="mt-52 flex justify-center">
            <ToolsPanel />
         </section>
      </>
   );
};

export default HomePage;
