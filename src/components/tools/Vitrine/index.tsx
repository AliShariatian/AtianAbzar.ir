import { FC } from "react";
// ICON
import arrowDownIcon from "../../../../public/img/arrow-down.svg";
// COMPONENT
import Image from "next/image";
import { VitrineButton } from "@/components";
// DATA
import { tools } from "@/utils/data/tools";
import { categories } from "@/utils/data/categories";

type PropsType = {
   id: "tools" | "categories";
   title: string;
};

const Vitrine: FC<PropsType> = ({ title, id }): JSX.Element => {
   const data = id === "tools" ? tools : categories;

   return (
      <section className="mt-52 flex justify-center">
         <div id={id} className="flex w-full flex-col justify-center">
            {/* Title */}
            <div className="mx-auto flex flex-col items-center">
               <h2 className="text-2xl font-bold xl:text-3xl">{title}</h2>
               <Image src={arrowDownIcon} width={30} height={30} alt="arrow down" className="mt-5 animate-bounce opacity-80" />
            </div>

            {/* vitrine list */}
            <div className={`${id === "tools" ? "xl:grid-cols-4" : "xl:grid-cols-5"} vitrineList`}>
               {data.map((item) => (
                  <VitrineButton key={item.slug} {...item} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Vitrine;
