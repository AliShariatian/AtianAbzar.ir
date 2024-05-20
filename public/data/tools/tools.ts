import { TCategories } from "./categories";

type TTools = {
   title: string;
   category: TCategories["slug"];
   slug: string;
};

// ---------------------------------------------------------------------------------------------------------
// Data
let general: TTools[] = [{ title: "تبدیل واحد", slug: "conversion-of-units", category: "general" }];
let engineering: TTools[] = [{ title: "محاسبه مساحت", slug: "area-calculation", category: "engineering" }];
let sport: TTools[] = [{ title: "تست اسپورت", slug: "test-sport", category: "sports" }];
let finance: TTools[] = [{ title: "تست فایننس", slug: "test-finance", category: "finance" }];
let health: TTools[] = [{ title: "محاسبه شاخص توده بدنی (BMI)", slug: "calc-bmi", category: "health" }];

// ---------------------------------------------------------------------------------------------------------
// Add category to slug
general = general.map((item) => ({ ...item, slug: `general/${item.slug}` }));
engineering = engineering.map((item) => ({ ...item, slug: `engineering/${item.slug}` }));
sport = sport.map((item) => ({ ...item, slug: `sports/${item.slug}` }));
finance = finance.map((item) => ({ ...item, slug: `finance/${item.slug}` }));
health = health.map((item) => ({ ...item, slug: `health/${item.slug}` }));

//Export All Data
export const tools: TTools[] = [...general, ...engineering, ...sport, ...finance, ...health];
