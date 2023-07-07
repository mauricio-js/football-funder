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
  typeItem: boolean;
};

export const FilterMenu: React.FC<FilterMenuProps> = ({
  isShowFilterModal,
  typeItem,
}) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (name: string, value: string) => {
    setFormValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };
  const [sortBy, setSortby] = useState<string>("promoted");

  const [organisations, setOrganisations] = useState<string[]>(["all"]);

  const [type, setType] = useState<string[]>(["all"]);

  const [status, setStatus] = useState<string[]>(["all"]);

  return (
    <form>
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
                <div className="mt-4">
                  <RadioButtonList
                    options={SortByData}
                    currentValue={sortBy}
                    onSelect={setSortby}
                    classes="flex flex-col gap-5"
                    textStyle="text-base"
                    checkboxStyle={false}
                  />
                </div>
              </Accordion>
              {typeItem && (
                <Accordion title="Type">
                  <CheckBoxList
                    options={TypeFilterData}
                    selectedValues={type}
                    setValues={setType}
                  />
                </Accordion>
              )}
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
                <div className="mt-5 flex gap-[10px]">
                  <div className="w-[180px]">
                    <Input
                      data={MileDistanceInputFormData}
                      name="mile_distance"
                      onChange={handleInputChange}
                      value={formValues.mile_distance}
                    />
                  </div>
                  <div className="w-[180px]">
                    <Input
                      data={PostcodeDistanceInputFormData}
                      name="postcode_distance"
                      onChange={handleInputChange}
                      value={formValues.postcode_distance}
                    />
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
          <div className="px-[10px] flex justify-between max-md:flex-col-reverse gap-y-30">
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
    </form>
  );
};
