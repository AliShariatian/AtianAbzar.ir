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
         {/* Description */}
         {description && <span className="mb-auto ml-6 w-fit text-nowrap font-semibold">{description}:</span>}
         <div className="flex w-full flex-row-reverse overflow-hidden">
            {/* Unit */}
            {unit && <label className="mr-2 flex items-center whitespace-nowrap text-right text-sm">{unit}</label>}

            {/* Result */}
            <div dir={isRtl ? "rtl" : "ltr"} className={`${isRtl ? "text-right" : "text-left"} my-auto select-all bg-transparent`}>
               {isRtl ? (value as string) : value?.toLocaleString()}
            </div>
         </div>
      </div>
   );
};

export default Output;
