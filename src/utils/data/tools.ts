export type ToolsType = {
   slug: string;
   title: string;
   category: "conversion-of-units" | "math" | "finance" | "health" | "sports" | null;
};

// conversion of unit => cof

export const tools: ToolsType[] = [
   { title: "تبدیل واحد رِم (Rem) به پیکسل (Px) و برعکس", slug: "conversion-of-units/px-rem", category: "conversion-of-units" },
   { title: "بزودی...", slug: "/", category: null },
];
