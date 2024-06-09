import { FC } from "react";
import { appVersionNumberInFooter } from "@/public/data/persianTexts";
import cn from "@/utils/cn";

type TProps = {
   className?: string;
};

const VersionNumber: FC<TProps> = ({ className }): JSX.Element => {
   return <span className={cn("", className)}>نسخه {appVersionNumberInFooter}</span>;
};

export default VersionNumber;
