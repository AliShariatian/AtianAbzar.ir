"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

// icons
import sunIcon from "@/public/img/sun.svg";
import moonIcon from "@/public/img/moon.svg";

const DarkModeToggle = () => {
   const { theme, setTheme } = useTheme();

   // toggle click
   const themeToggleClickHandler = () => {
      theme == "dark" ? setTheme("light") : setTheme("dark");
   };

   // icons image
   const iconImage = ({ src, alt }: { src: string; alt: string }): JSX.Element => {
      return <Image src={src} alt={alt} width={25} height={25} className="size-6 dark:opacity-90 dark:invert" />;
   };

   return (
      <button onClick={themeToggleClickHandler}>
         {theme === "light" ? iconImage({ src: moonIcon, alt: "Dark Mode" }) : iconImage({ src: sunIcon, alt: "Light Mode" })}
      </button>
   );
};

export default DarkModeToggle;
