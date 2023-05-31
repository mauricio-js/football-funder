import React from "react";
import { SortForm } from "./SortForm";
import { TypeForm } from "./TypeForm";
import { OrganisationForm } from "./OrganisationForm";
import { DistanceForm } from "./DistanceForm";
import { StatusForm } from "./StatusForm";
import { SearchBar } from "./SearchBar";
import { IoMdClose } from "react-icons/io";

type FilterMenuModalProps = {
  isShowFilterModal: () => void;
};

export const FilterMenuModal: React.FC<FilterMenuModalProps> = ({
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
        <SearchBar />
      </div>
      <div className="max-h-[550px] overflow-y-scroll">
        <div className="mt-[10px] px-[10px] flex flex-col divide-y divide-solid divide-gray-300">
          <SortForm />
          <TypeForm />
          <OrganisationForm />
          <StatusForm />
          <DistanceForm />
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
