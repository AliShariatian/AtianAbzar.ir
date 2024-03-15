// TYPE
import { FC } from "react";
// UTIL
import { HomePageTexts } from "@/public/data/persianTexts";
// COMPONENT
import { MainTitle, Vitrine } from "@/components";
// -------------------------------------------

const HomePage: FC = (): JSX.Element => {
   return (
      <div className="container">
         {/* TITLE */}
         <MainTitle title={HomePageTexts.toolBox} description={HomePageTexts.description} />

         {/* Vitrines */}
         <Vitrine title="دسته‌بندی‌ها" id="categories" />
         <Vitrine title="همه‌ی ابزارها" id="tools" />
      </div>
   );
};

export default HomePage;
