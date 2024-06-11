import { CSSProperties, FC } from "react";
import Link from "next/link";
import cn from "@/utils/cn";

type TProps = {
   title: string;
   slug: string;
   className?: string;
   onClick?: () => void;
};

const VitrineButton: FC<TProps> = ({ title, slug, className, onClick }): JSX.Element => {
   const hoverScaleValue = { "--hover-scale-value": 1.04 } as CSSProperties;

   return (
      <Link
         href={slug}
         onClick={onClick}
         style={{ ...hoverScaleValue }}
         className={`${cn("hover-scale rounded-lg bg-slate-200 p-6 shadow !transition-all hover:shadow-md", className)}`}
      >
         <h3 className="line-clamp-1 text-center font-bold">{title}</h3>
      </Link>
   );
};

export default VitrineButton;
