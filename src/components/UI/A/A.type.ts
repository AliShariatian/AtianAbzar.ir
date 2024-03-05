export type Props = {
   href: string;
   children: React.ReactNode | string;
   className?: string;
   title?: string;
   scrollAfterClick?: boolean;
   target?: "_blank" | "_parent" | "_self" | "_top";
};
