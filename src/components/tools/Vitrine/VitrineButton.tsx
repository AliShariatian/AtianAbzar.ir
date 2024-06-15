"use client";

import { CSSProperties, FC } from "react";
import Link from "next/link";
import cn from "@/utils/cn";
import Image from "next/image";

type TProps = {
   title: string;
   slug: string;
   className?: string;
   icon?: string | undefined;
   onClick?: () => void;
};

const VitrineButton: FC<TProps> = ({ title, slug, className, icon, onClick }): JSX.Element => {
   const hoverScaleValue = { "--hover-scale-value": 1.04 } as CSSProperties;

   return (
      <Link
         href={slug}
         onClick={onClick}
         style={{ ...hoverScaleValue }}
         title={title}
         className={`${cn("hover-scale flex items-center justify-center gap-2 rounded-lg bg-slate-200 p-6 shadow !transition-all hover:shadow-md dark:bg-slate-800 dark:hover:shadow-2xl", className)}`}
      >
         <h3 className="line-clamp-1 text-center font-bold">{title}</h3>
         {icon && <Image src={icon} width={20} height={20} alt={title} className="size-5 dark:invert" />}
      </Link>
   );
};

export default VitrineButton;
