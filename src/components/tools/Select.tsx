import cn from "@/utils/cn";
import { FC } from "react";

type TProps = {
   labels: string[];
   className?: string;
};

const Select: FC<TProps> = ({ labels, className }): JSX.Element => {
   return (
      <select className={cn("userHandle text-lg outline-none", className)}>
         {labels.map((item) => (
            <option key={item} value={item}>
               {item}
            </option>
         ))}
      </select>
   );
};

export default Select;
