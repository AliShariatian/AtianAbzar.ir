import { FC, ReactNode } from "react";

const ResultLine: FC = (): JSX.Element => {
   const line: ReactNode = <hr className="w-1/2 border border-gray-400 dark:border-gray-600" />;

   return (
      <div className="my-2 flex w-full items-center justify-between">
         {line}
         <span className="mx-5 text-lg text-gray-500">نتیجه</span>
         {line}
      </div>
   );
};

export default ResultLine;
