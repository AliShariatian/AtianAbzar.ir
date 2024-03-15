export type categoriesType = {
   title: string;
   slug: "general" | "engineering" | "finance" | "health" | "sports";
};


export const categories: categoriesType[] = [
   { title: "عمومی", slug: "general" },
   { title: "مهندسی", slug: "engineering" },
   { title: "مالی", slug: "finance" },
   { title: "ورزشی", slug: "sports" },
   { title: "سلامتی", slug: "health" },
];

