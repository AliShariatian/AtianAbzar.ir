import { FC } from "react";

const ResultLine: FC = (): JSX.Element => {
   return (
      <div className="my-2 flex w-full items-center justify-between">
         <hr className="w-1/2 border border-gray-400" />
         <span className="mx-5 text-lg text-gray-500">نتیجه</span>
         <hr className="w-1/2 border border-gray-400" />
      </div>
   );
};

export default ResultLine;
