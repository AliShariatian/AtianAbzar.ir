import { FC } from "react";
import NextTopLoader from "nextjs-toploader";

const PageLoadingProgressBar: FC = (): JSX.Element => {
   return <NextTopLoader color="#0f172a" shadow={false} height={3} showSpinner={false} />;
};

export default PageLoadingProgressBar;
