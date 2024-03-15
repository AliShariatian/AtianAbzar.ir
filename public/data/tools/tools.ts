import { categoriesType } from "./categories";

type toolsType = {
   title: string;
   category: categoriesType["slug"];
   slug: string;
};

// ---------------------------------------------------------------------------------------------------------
// Data
let general: toolsType[] = [{ title: "تبدیل واحد", slug: "conversion-of-units", category: "general" }];
let engineering: toolsType[] = [{ title: "محاسبه مساحت", slug: "area-calculation", category: "engineering" }];
let sport: toolsType[] = [{ title: "محاسبه شاخص توده بدنی (BMI)", slug: "bmi-calculation", category: "sports" }];
let finance: toolsType[] = [{ title: "محاسبه شاخص توده بدنی (BMI)", slug: "calc-bmi", category: "finance" }];
let health: toolsType[] = [{ title: "محاسبه شاخص توده بدنی (BMI)", slug: "calc-bmi", category: "health" }];

// ---------------------------------------------------------------------------------------------------------
// Add category to slug
general = general.map((item) => ({ ...item, slug: `general/${item.slug}` }));
engineering = engineering.map((item) => ({ ...item, slug: `engineering/${item.slug}` }));
sport = sport.map((item) => ({ ...item, slug: `sports/${item.slug}` }));
finance = finance.map((item) => ({ ...item, slug: `finance/${item.slug}` }));
health = health.map((item) => ({ ...item, slug: `health/${item.slug}` }));

//Export All Data
export const tools: toolsType[] = [...general, ...engineering, ...sport, ...finance, ...health];
