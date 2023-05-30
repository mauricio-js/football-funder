import React from "react";
import { MdSearch } from "react-icons/md";

export const SearchBar: React.FC = () => {
  return (
    <div className="relative">
      <input
        type="text"
        id="simple-search"
        className="w-full rounded-lg px-[15px] py-[10px] border-2 border-gray-100
            text-black font-medium text-[16px] focus:outline-none
            placeholder:text-[16px] placeholder:leading-[22px] placeholder:font-medium placeholder:text-green-70"
        placeholder="Searh..."
        autoComplete="off"
        required
      />
      <button className="absolute right-[15px] top-[16px] ml-2 rounded-lg">
        <div className="text-[16px]">
          <MdSearch />
        </div>
      </button>
    </div>
  );
};
