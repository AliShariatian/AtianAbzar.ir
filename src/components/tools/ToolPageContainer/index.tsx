import { FC } from "react";
import ToolInfo from "./ToolInfo";

type TProps = {
   topSide: React.ReactNode;
   bottomSide: React.ReactNode;
};

const ToolPageContainer: FC<TProps> = ({ topSide, bottomSide }): JSX.Element => {
   return (
      <main className="container -mt-10 flex w-full flex-col items-start gap-5 *:w-full xl:-mt-5 xl:w-1/2">
         {/* Top side */}
         <div>
            <ToolInfo topSide={topSide} />
         </div>

         {/* Bottom side */}
         <div>{bottomSide}</div>
      </main>
   );
};

export default ToolPageContainer;
