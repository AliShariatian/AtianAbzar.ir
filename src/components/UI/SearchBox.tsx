import { FC } from "react";

const SearchBox: FC = (): JSX.Element => {
   return (
      <div className="userHandle h-11 !w-96 border-2 border-slate-200 !py-0 !shadow-none transition-shadow hover:shadow max-xl:hidden">
         <input type="search" placeholder="جستجوی ابزارها..." maxLength={30} className="size-full bg-transparent outline-none" />
      </div>
   );
};

export default SearchBox;
