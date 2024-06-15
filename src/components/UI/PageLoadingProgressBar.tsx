import { FC } from "react";
import NextTopLoader from "nextjs-toploader";

const PageLoadingProgressBar: FC = (): JSX.Element => {
   return <NextTopLoader color="#3667d8" shadow={false} height={4} showSpinner={false} />;
};

export default PageLoadingProgressBar;
