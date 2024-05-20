import { FC } from "react";

type TProps = {
   value: string | number;
   description?: string;
   borderColor?: string;
};

const Output: FC<TProps> = ({ value, description, borderColor }): JSX.Element => {
   return (
      <div className={`${borderColor} userHandle flex-row-reverse font-medium ring-4`}>
         <div className="text-left">{value}</div>
         {description && <span className="text-lg">{description}</span>}
      </div>
   );
};

export default Output;
