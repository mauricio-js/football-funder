import React from "react";
import FilterIcon from "Assets/images/explore/filter-icon.svg";

type FilterBarProps = {
  isShowFilterModal: () => void;
};

export const Filter: React.FC<FilterBarProps> = ({ isShowFilterModal }) => {
  return (
    <div className="relative">
      <button
        className="w-[150px] h-[50px] rounded-10 py-[10px] px-[15px] flex justify-between items-center border-[1px] border-gray-100"
        onClick={isShowFilterModal}
      >
        Filter & Sort
        <img src={FilterIcon} alt="filter icon" />
      </button>
    </div>
  );
};
