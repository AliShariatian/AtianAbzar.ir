import { TCategories } from "./categories";

export type TTools = {
   title: string;
   slug: string;
   category?: TCategories["slug"];
}[];

// ---------------------------------------------------------------------------------------------------------
// Data
let general: TTools = [
   { title: "تبدیل آنلاین عدد به حروف", slug: "number-to-letters-converter" },
   { title: "تبدیل آنلاین حروف به عدد", slug: "letters-to-number-converter" },
   { title: "مترجم آنلاین کد مورس", slug: "morse-code-translator" },
   { title: "تبدیل آنلاین اعداد فارسی و انگلیسی", slug: "number-translator" },
   { title: "کرنومتر آنلاین", slug: "chronometer" },

   // { title: "تشخیص کد ملی", slug: "identification-of-code-melli" }, // Have bug
   // { title: "تبدیل واحد", slug: "units-converter" }
];

let engineering: TTools = [
   { title: "تبدیل آنلاین کسر به درصد", slug: "fraction-to-percentage-converter" },
   { title: "محاسبه آنلاین درصد از مقدار", slug: "calc-percentage" },
];

let sports: TTools = [{ title: "بزودی", slug: "#" }];

let finance: TTools = [
   { title: "محاسبه آنلاین درصد تخفیف", slug: "calc-percentage-discount" },
   { title: "محاسبه آنلاین کمیسیون", slug: "calc-commission" },
];

let health: TTools = [{ title: "محاسبه آنلاین شاخص توده بدنی (BMI)", slug: "calc-bmi" }];

let programming: TTools = [{ title: "ترمیم آنلاین لینک (URL) فارسی", slug: "persian-url-repair" }];

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
