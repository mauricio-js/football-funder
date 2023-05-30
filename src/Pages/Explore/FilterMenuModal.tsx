import React from "react";
import { SortForm } from "./SortForm";
import { SearchBar } from "./SearchBar";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";

type FilterMenuModalProps = {
  isShowFilterModal: () => void;
};

export const FilterMenuModal: React.FC<FilterMenuModalProps> = ({
  isShowFilterModal,
}) => {
  return (
    <div className="w-[645px] h-[734px] bg-white rounded-10">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <div className="text-[21px] leading-[28px] font-semibold text-green-80">
            Filters
          </div>
          <div className="text-[24px]">
            <IoMdClose />
          </div>
        </div>
        <div className="mt-[30px]">
          <SearchBar />
        </div>
        <div className="mt-[10px] px-[10px]">
          <div className="flex justify-between items-center">
            <div className="text-[18px] leading-6 font-semibold text-green-70">
              Sort by
            </div>
            <div className="text-[24px]">
              <IoIosArrowDown />
            </div>
          </div>
          <div>
            <SortForm />
          </div>
        </div>
      </div>
    </div>
  );
};
