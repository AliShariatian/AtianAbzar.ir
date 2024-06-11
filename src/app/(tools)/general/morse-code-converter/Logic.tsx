// @ts-nocheck
"use client";

import { ChangeEvent, FC, useState } from "react";
import { TRadioButtonProps } from "@/components/tools/RadioButton/type";
import { Input, RadioButton } from "@/components";
import morse from "morse-decoder";

const Logic: FC = (): JSX.Element => {
   const [normalTextInputValue, setNormalTextInputValue] = useState<string>("");
   const [morseInputValue, setMorseInputValue] = useState<string>("");

   const [isFarsi, setIsFarsi] = useState<boolean>(false);

   const textChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const textValue: string = ev.target.value;
      const newMorse: string = morse.encode(textValue, { priority: isFarsi ? 9 : 1 });

      setNormalTextInputValue(textValue);
      setMorseInputValue(newMorse);
   };

   const morseChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const morseValue: string = ev.target.value;
      const newText: string = morse.decode(morseValue, { priority: isFarsi ? 9 : 1 });

      setMorseInputValue(morseValue);
      setNormalTextInputValue(newText);
   };

   const radioButtonChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
      ev.target.value === "farsi" ? setIsFarsi(true) : setIsFarsi(false);
   };

   const radioButtonItems: TRadioButtonProps = {
      props: [
         { id: "farsi", label: "فارسی", name: "language", defaultChecked: false, onChange: radioButtonChangeHandler },
         { id: "english", label: "انگلیسی", name: "language", defaultChecked: true, onChange: radioButtonChangeHandler },
      ],
   };

   return (
      <>
         <RadioButton {...radioButtonItems} />

         {/* Text */}
         <Input
            id="text"
            isFocus
            isRtl={isFarsi}
            isComma={false}
            label="متن"
            onChange={textChangeHandler}
            placeholder="متن را وارد کنید"
            value={normalTextInputValue}
         />

         {/* Morse */}
         <Input
            id="morse"
            isRtl={isFarsi}
            isComma={false}
            label="کد مورس"
            onChange={morseChangeHandler}
            placeholder="یا کد مورس را وارد کنید"
            value={morseInputValue}
         />
      </>
   );
};

export default Logic;
