import { FC } from "react";
// ICON
import arrowDownIcon from "../../../../public/img/arrow-down.svg";
// COMPONENT
import Image from "next/image";
import { VitrineButton } from "@/components";
// DATA
import { tools } from "@/public/data/tools/tools";
import { categories } from "@/public/data/tools/categories";

type TProps = {
   id: "tools" | "categories";
   title: string;
};

const Vitrine: FC<TProps> = ({ title, id }): JSX.Element => {
   const data = id === "tools" ? tools : categories;

   return (
      <section id={id} className="flex justify-center pt-44">
         <div className="flex w-full flex-col justify-center">
            {/* Title */}
            <div className="mx-auto flex flex-col items-center">
               <h2 className="text-2xl font-bold xl:text-3xl">{title}</h2>
               <Image src={arrowDownIcon} width={30} height={30} alt="arrow down" className="mt-5 animate-bounce opacity-80" />
            </div>

            {/* vitrine list */}
            <div
               className={`${id === "tools" ? "grid-cols-1 xl:grid-cols-5" : "mx-auto grid-cols-2 xl:w-8/12 xl:grid-cols-3"} grid w-full gap-4 py-9 xl:py-12`}
            >
               {data.map((item) => {
                  if (item.title === "بزودی") return null;

                  // Get category button icon
                  const icon = categories.find(({ title }) => title === item.title);

                  return <VitrineButton key={item.slug} {...item} icon={icon?.imageSrc} />;
               })}
            </div>
         </div>
      </section>
   );
};

export default Vitrine;
