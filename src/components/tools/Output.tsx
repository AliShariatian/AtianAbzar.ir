import { FC } from "react";

type TProps = {
   value: string | number;
   unit?: string;

   description?: string;
   borderColor?: string;
};

const Output: FC<TProps> = ({ value, description, borderColor, unit }): JSX.Element => {
   return (
      <div className={`${borderColor} ${borderColor ? "ring-4" : null} userHandle flex-row-reverse font-medium`}>
         <div className="flex flex-row-reverse">
            {unit && <label className="mr-4 flex w-7 items-center whitespace-nowrap text-right text-sm">{unit}</label>}
            <div className="text-left">{value.toLocaleString()}</div>
         </div>

         {description && <span className="text-lg">{description}</span>}
      </div>
   );
};

export default Output;
