import React from "react";
import { SearchIcon } from "Assets/images/svg/button/icon-search";

export const Search: React.FC = () => {
  return (
    <form className="relative flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="w-full">
        <input
          type="text"
          id="simple-search"
          className="block w-full rounded-lg !bg-green-30 py-3 pl-8 
            pr-[35px] text-white font-medium text-[14px] focus:outline-0 "
          placeholder="Search"
          autoComplete="off"
          required
        />
      </div>
      <button
        type="submit"
        className="absolute right-0 ml-2 rounded-lg px-3 py-2 text-sm font-medium text-white"
      >
        <SearchIcon />
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};
