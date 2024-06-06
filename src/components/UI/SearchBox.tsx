import { FC } from "react";

const SearchBox: FC = (): JSX.Element => {
   return (
      <div className="userHandle h-11 w-96 py-0 transition-shadow hover:shadow-md max-xl:hidden">
         <input type="search" placeholder="جستجوی ابزارها..." maxLength={30} className="size-full bg-transparent outline-none" />
      </div>
   );
};

export default SearchBox;
