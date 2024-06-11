import { ChangeEvent } from "react";

export type TRadioButtonProps = {
   props: {
      id: string;
      label: string;
      name: string;
      defaultChecked:boolean
      onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
   }[];
};