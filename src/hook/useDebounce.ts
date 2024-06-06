import { FC, useEffect, useState } from "react";

type TProps = {
   value: string;
   delay?: number;
   minValueLimit: number | false;
};

const useDebounce: FC<TProps> = ({ value, delay = 500, minValueLimit }): string => {
   const [debouncedValue, setDebouncedValue] = useState<string>(value);

   useEffect(() => {
      const handler = setTimeout(() => {
         minValueLimit === false ? setDebouncedValue(value) : value.length > minValueLimit ? setDebouncedValue(value) : null;
      }, delay);

      return () => {
         clearTimeout(handler);
      };
   }, [value, delay, minValueLimit]);

   return debouncedValue;
};

export default useDebounce;
