import { FC, useEffect, useState } from "react";

type TProps = {
   value: string;
   delay?: number;
   minValueLimit: number;
};

const useDebounce: FC<TProps> = ({ value, delay = 500, minValueLimit = 0 }): [string, boolean] => {
   const [debouncedValue, setDebouncedValue] = useState<string>(value);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      const handler = setTimeout(() => {
         if (value.length > minValueLimit) {
            setDebouncedValue(value);
            setIsLoading(false);
         } else {
            setIsLoading(true);
         }
      }, delay);

      return () => {
         clearTimeout(handler);
      };
   }, [value, delay, minValueLimit]);

   return [debouncedValue, isLoading];
};

export default useDebounce;
