import { TCategories } from "./categories";

export type TTools = {
   title: string;
   slug: string;
   category?: TCategories["slug"];
}[];

// ---------------------------------------------------------------------------------------------------------
// Data
let general: TTools = [
   { title: "تبدیل عدد به حروف", slug: "conversion-of-number-to-letters" },
   { title: "تبدیل حروف به عدد", slug: "conversion-of-letters-to-number" },
   // { title: "تشخیص کد ملی", slug: "identification-of-code-melli" }, // Have bug
   // { title: "تبدیل واحد", slug: "conversion-of-units" }
];

let engineering: TTools = [{ title: "بزودی", slug: "#" }];

let sports: TTools = [{ title: "بزودی", slug: "#" }];

let finance: TTools = [
   { title: "محاسبه درصد تخفیف", slug: "calc-percentage-discount" },
   { title: "محاسبه کمیسیون", slug: "calc-commission" },
];

let health: TTools = [{ title: "محاسبه شاخص توده بدنی (BMI)", slug: "calc-bmi" }];

let programming: TTools = [{ title: "بزودی", slug: "#" }];

// ---------------------------------------------------------------------------------------------------------
// Add category, and Add category to slug
general = general.map((item) => ({ ...item, category: "general", slug: `general/${item.slug}` }));
engineering = engineering.map((item) => ({ ...item, category: "engineering", slug: `engineering/${item.slug}` }));
sports = sports.map((item) => ({ ...item, category: "sports", slug: `sports/${item.slug}` }));
finance = finance.map((item) => ({ ...item, category: "finance", slug: `finance/${item.slug}` }));
health = health.map((item) => ({ ...item, category: "health", slug: `health/${item.slug}` }));
programming = programming.map((item) => ({ ...item, category: "programming", slug: `programming/${item.slug}` }));

//Export All Data
export const tools: TTools = [...general, ...engineering, ...sports, ...finance, ...health, ...programming];
