export type TCategories = {
   title: string;
   slug: "general" | "engineering" | "finance" | "health" | "sports"| "programming";
};


export const categories: TCategories[] = [
   { title: "عمومی", slug: "general" },
   { title: "مهندسی", slug: "engineering" },
   { title: "مالی", slug: "finance" },
   { title: "ورزشی", slug: "sports" },
   { title: "سلامتی", slug: "health" },
   { title: "برنامه‌نویسی", slug: "programming" },
];

