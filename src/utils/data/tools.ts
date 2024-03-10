import { categoriesType } from "./categories";

type toolsType = {
   title: string;
   category: categoriesType["slug"];
   slug: `${categoriesType["slug"]}/${string}`;
};

export const tools: toolsType[] = [
   // Conversion Of Units
   { title: "تبدیل واحد رِم (Rem) به پیکسل (Px) و برعکس", slug: "conversion-of-units/px-rem", category: "conversion-of-units" },

   // Math
   { title: "محاسبه مساحت مربع", slug: "math/square-area", category: "math" },
   { title: "محاسبه مساحت مثلث", slug: "math/triangle-area", category: "math" },

   // Sports
   { title: "محاسبه شاخص توده بدنی (BMI)", slug: "sports/calc-bmi", category: "sports" },

   // Finance

   // Health
];
