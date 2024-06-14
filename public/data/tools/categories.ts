import publicIcon from "@/public/img/categories/public.svg";
import engineeringIcon from "@/public/img/categories/engineering.svg";
import financeIcon from "@/public/img/categories/finance.svg";
import sportIcon from "@/public/img/categories/sport.svg";
import healthIcon from "@/public/img/categories/health.svg";
import programmingIcon from "@/public/img/categories/programming.svg";

export type TCategories = {
   title: string;
   imageSrc: string;
   slug: "general" | "engineering" | "finance" | "health" | "sports" | "programming";
};

export const categories: TCategories[] = [
   { title: "عمومی", slug: "general", imageSrc: publicIcon },
   { title: "مهندسی", slug: "engineering", imageSrc: engineeringIcon },
   { title: "مالی", slug: "finance", imageSrc: financeIcon },
   { title: "ورزشی", slug: "sports", imageSrc: sportIcon },
   { title: "سلامتی", slug: "health", imageSrc: healthIcon },
   { title: "برنامه‌نویسی", slug: "programming", imageSrc: programmingIcon },
];
