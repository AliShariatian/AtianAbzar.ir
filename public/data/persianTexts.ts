// Metadata
export const metaTitle: string = "آتیان ابزار" as const;

// Navbar
export type TNavbarItems = {
   slug: string;
   title: string;
   className: string;
};

export const navbarItems: TNavbarItems[] = [
   { slug: "/", title: "آتـیـان ابـزار", className: "font-morabba xl:text-2xl text-3xl" },
   { slug: "", title: "", className: "" },
   { slug: "/#categories", title: "دسته‌بندی‌ها", className: "" },
   { slug: "/#tools", title: "لیست ابزارها", className: "" },
] as const;

// Home page
export const HomePageTexts: {
   toolBox: string;
   description: string;
} = {
   toolBox: "آتــیــان ابــزار",
   description: "مجموعه ابزارهای محاسباتی روزمره",
} as const;

// 404 NotFound Page
export const warning404Text: string = "اشتباه اومدی، این صفحه وجود نداره!" as const;

export const appVersionNumberInFooter: string = "1.4.3" as const;
