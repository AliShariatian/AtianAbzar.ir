import { FC, memo } from "react";
import { TCategories } from "@/public/data/tools/categories";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";

import downArrowLineIcon from "@/public/img/down-arrow-line.svg";

const homeLabel: string = "صفحه اصلی" as const;

type TProps = {
   category: TCategories | undefined;
   title: string | undefined;
};

const Breadcrumb: FC<TProps> = ({ title, category }): JSX.Element => {
   const separator = <Image src={downArrowLineIcon} height={9} width={9} alt="arrow" className="mx-0 size-[0.7rem] rotate-90 opacity-30 xl:mx-2" />;

   return (
      <Breadcrumbs separator={separator} className="!mb-9 !mt-5 font-semibold *:!font-dana">
         <Link href="/" title={homeLabel} className="!text-dark opacity-60 transition-colors hover:underline hover:opacity-100">
            {homeLabel}
         </Link>

         <Link title={category?.title} href={`/${category?.slug}`} className="!text-dark opacity-60 transition-colors hover:underline hover:opacity-100">
            {category?.title}
         </Link>

         <span className="!text-dark cursor-default opacity-60 transition-opacity hover:opacity-100">{title}</span>
      </Breadcrumbs>
   );
};

export default memo(Breadcrumb);
