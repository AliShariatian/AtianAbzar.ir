import { FC } from "react";

type TProps = {
   value: string | number;
   unit?: string;

   description?: string;
   borderColor?: string;
};

const Output: FC<TProps> = ({ value, description, borderColor, unit }): JSX.Element => {
   return (
      <div className={`${borderColor} ${borderColor ? "ring-4" : null} userHandle`}>
         <div className="flex w-full flex-col-reverse gap-2 *:w-full xl:flex-row-reverse xl:gap-0">
            {/* Result */}
            <div className="flex flex-row-reverse">
               {unit && <label className="mr-4 flex w-7 items-center whitespace-nowrap text-right text-sm">{unit}</label>}

               <div dir="ltr" className="my-auto overflow-hidden truncate text-left font-medium xl:w-56">
                  {value.toLocaleString()}
               </div>
            </div>

            {/* Description */}
            {description && <span className="text-lg">{description}</span>}
         </div>
      </div>
   );
};

export default Output;
