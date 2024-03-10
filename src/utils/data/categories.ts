export type categoriesType = {
   title: string;
   slug: "conversion-of-units" | "math" | "finance" | "health" | "sports";
};

export const categories: categoriesType[] = [
   { title: "ریاضی", slug: "math" },
   { title: "مالی", slug: "finance" },
   { title: "تبدیل واحد", slug: "conversion-of-units" },
   { title: "ورزشی", slug: "sports" },
   { title: "سلامتی", slug: "health" },
];
