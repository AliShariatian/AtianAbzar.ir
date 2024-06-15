"use client";

import { FC } from "react";
import NextTopLoader from "nextjs-toploader";
import { useTheme } from "next-themes";

const PageLoadingProgressBar: FC = (): JSX.Element => {
   const { theme } = useTheme();

   return <NextTopLoader color={theme == "dark" ? "#4372df" : "#0f172a"} shadow={false} height={3} showSpinner={false} />;
};

export default PageLoadingProgressBar;
