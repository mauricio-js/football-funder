import React, { useState } from "react";
import {
  Accordion,
  Button,
  CheckBoxList,
  Input,
  RadioButtonList,
  Search,
} from "UI";
import { FilterSearchData } from "Config";
import {
  MileDistanceInputFormData,
  OrganisationFilterData,
  PostcodeDistanceInputFormData,
  SortByData,
  StatusFilterData,
  TypeFilterData,
} from "Config/exploreConfig";
import { IoMdClose } from "react-icons/io";

type FilterMenuProps = {
  isShowFilterModal: () => void;
};

export const FilterMenu: React.FC<FilterMenuProps> = ({
  isShowFilterModal,
}) => {
  const [sortBy, setSortby] = useState<string>("promoted");
  const [organisations, setOrganisations] = useState<string[]>(["all"]);
  const [type, setType] = useState<string[]>(["all"]);
  const [status, setStatus] = useState<string[]>(["all"]);
  const [mile, setMile] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");

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
      <div className="max-h-[500px] overfl overflow-y-scroll">
        <div className="mt-30">
          <Search data={FilterSearchData} />
        </div>
        <div className="">
          <div className="mt-[10px] px-[10px] flex flex-col divide-y divide-solid divide-gray-300">
            <Accordion title="Sort By">
              <RadioButtonList
                options={SortByData}
                currentValue={sortBy}
                onSelect={setSortby}
              />
            </Accordion>
            <Accordion title="Type">
              <CheckBoxList
                options={TypeFilterData}
                selectedValues={type}
                setValues={setType}
              />
            </Accordion>
            <Accordion title="Organisation">
              <CheckBoxList
                options={OrganisationFilterData}
                selectedValues={organisations}
                setValues={setOrganisations}
              />
            </Accordion>
            <Accordion title="Status">
              <CheckBoxList
                options={StatusFilterData}
                selectedValues={status}
                setValues={setStatus}
              />
            </Accordion>
            <Accordion title="Distance">
              <div className="w-[180px] flex gap-[10px]">
                <Input
                  data={MileDistanceInputFormData}
                  setValue={setMile}
                  defaultValue={mile}
                />
                <Input
                  data={PostcodeDistanceInputFormData}
                  setValue={setPostCode}
                  defaultValue={postCode}
                />
              </div>
            </Accordion>
          </div>
        </div>
        <div className="px-[10px] flex justify-between max-md:flex-col-reverse gap-y-[30px]">
          <button className="text-[14px] leading-[20px] font-medium underline max-md:text-start">
            Clear All Filters
          </button>
          <Button
            backgroundColor="bg-green-10"
            height="h-[50px]"
            width="w-[390px] max-md:w-full"
            textColor="text-black"
            textSize="generalText"
            text=" Apply filters"
          />
        </div>
      </div>
    </div>
  );
};
