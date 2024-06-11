import { FC } from "react";

type TProps = {
   value: string | number | boolean | undefined | TypeError;
   unit?: string;
   isRtl?: boolean;
   description?: string;
   borderColor?: string;
};

const Output: FC<TProps> = ({ value, description, borderColor, unit, isRtl = false }): JSX.Element => {
   return (
      <div className={`${borderColor} ${borderColor ? "ring-4" : null} userHandle`}>
         <div className="flex w-full flex-col-reverse gap-2">
            {/* Result */}
            <div className="flex w-full flex-row-reverse">
               {unit && <label className="mr-4 flex w-7 items-center whitespace-nowrap text-right text-sm">{unit}</label>}

               <div dir={isRtl ? "rtl" : "ltr"} className={`${isRtl ? "text-wrap text-right" : "truncate text-left"} my-auto w-full overflow-hidden`}>
                  {isRtl ? (value as string) : value?.toLocaleString()}
               </div>
            </div>

            {/* Description */}
            {description && <span className="ml-6 w-fit text-lg">{description}</span>}
         </div>
      </div>
   );
};

export default Output;
