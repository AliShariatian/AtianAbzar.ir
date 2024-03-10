import { FC } from "react";
// ICON
import arrowDownIcon from "../../../../public/img/arrow-down.svg";
// DATA
import { tools } from "@/utils/data/tools";
import { categories } from "@/utils/data/categories";
// COMPONENT
import VitrineButton from "./VitrineButton";
import Image from "next/image";

type PropsType = {
   id: "tools" | "categories";
   title: string;
};

const Vitrine: FC<PropsType> = ({ title, id }): JSX.Element => {
   const data = id === "tools" ? tools : categories;

   return (
      <section className="mt-52 flex justify-center">
         <div id={id} className="flex w-11/12 flex-col justify-center">
            {/* Title */}
            <div className="mx-auto flex flex-col items-center">
               <h2 className="text-2xl font-bold xl:text-3xl">{title}</h2>
               <Image src={arrowDownIcon} width={30} height={30} alt="arrow down" className="mt-6 animate-bounce opacity-80" />
            </div>

            {/* Tools list */}
            <div className={`${id === "tools" ? "xl:grid-cols-4" : "xl:grid-cols-5"} grid w-full grid-cols-1 gap-4 px-5 py-9 xl:grid-cols-4 xl:p-12`}>
               {data.map((item) => (
                  <VitrineButton key={item.slug} {...item} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Vitrine;
