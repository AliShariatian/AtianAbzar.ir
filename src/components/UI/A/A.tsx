// Custom Link Component

import { FC } from "react";
import { Props } from "./A.type";
import Link from "next/link";

const A: FC<Props> = ({ children, href, className, title, target, scrollAfterClick = false }): JSX.Element => {
   return (
      <Link href={href} title={title} scroll={scrollAfterClick} className={className} target={target}>
         {children}
      </Link>
   );
};

export default A;
