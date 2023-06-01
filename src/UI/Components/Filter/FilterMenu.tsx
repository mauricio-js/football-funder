import React from "react";
import {
  SortFilter,
  TypeFilter,
  OrganisationFilter,
  DistanceFilter,
  StatusForm,
  Search,
} from "UI";
import { FilterSearchData } from "Config";
import { IoMdClose } from "react-icons/io";

type FilterMenuProps = {
  isShowFilterModal: () => void;
};

export const FilterMenu: React.FC<FilterMenuProps> = ({
  isShowFilterModal,
}) => {
  return (
    <div className="md:w-[645px] ns:w-[420px] max-ns:w-[300px] p-5 bg-white rounded-10 z-50">
      <div className="flex justify-between items-center">
        <div className="text-[21px] leading-[28px] font-semibold text-green-80">
          Filters
        </div>
        <div className="text-[24px]">
          <button onClick={isShowFilterModal}>
            <IoMdClose />
          </button>
        </div>
      </div>
      <div className="mt-[30px]">
        <Search data={FilterSearchData} />
      </div>
      <div className="max-h-[550px] overflow-y-scroll">
        <div className="mt-[10px] px-[10px] flex flex-col divide-y divide-solid divide-gray-300">
          <SortFilter />
          <TypeFilter />
          <OrganisationFilter />
          <StatusForm />
          <DistanceFilter />
        </div>
      </div>
      <div className="px-[10px] flex justify-between max-md:flex-col-reverse gap-y-[30px]">
        <button className="text-[14px] leading-[19px] font-medium underline max-md:text-start">
          Clear All Filters
        </button>
        <button className="bg-green-10 text-[16px] leading-[20px] font-semibold h-[50px] w-[390px] max-md:w-full rounded-10">
          Apply filters
        </button>
      </div>
    </div>
  );
};
