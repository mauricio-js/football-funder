import React, { useState } from "react";
import classNames from "classnames";
import { Filter, FilterMenu, ListingPageDropdown } from "UI";
import { HorizontalCard, VerticalCard, Search, Template } from "UI";
import { ListingPageDropdownData, ListingPageSearchData } from "Config";
import { CardType } from "types";
import Line from "Assets/images/explore/explore-divide.svg";
import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";
import { TbLayoutList, TbLayoutGrid } from "react-icons/tb";

interface ListingPageProps {
  ListingData: CardType[];
  title: string;
  typeFilter: boolean;
}

export const ListingPage: React.FC<ListingPageProps> = ({
  ListingData,
  title,
  typeFilter,
}) => {
  const [openFilterForm, setOpenFilterForm] = useState<boolean>(false);
  const [region, setRegion] = useState<string>(ListingPageDropdownData[0].name);
  const [horizontalLayout, setHorizonalLayout] = useState<boolean>(false);

  return (
    <Template>
      <div className="relative md:pt-5 pt-[10px] md:pb-[150px] pb-[50px]">
        <div
          className={classNames(
            "fixed top-0 z-50 w-full h-full bg-black bg-opacity-30 flex justify-center items-start",
            openFilterForm ? "block" : "hidden"
          )}
        >
          <div className="mt-[60px]">
            <FilterMenu
              isShowFilterModal={() => setOpenFilterForm(false)}
              typeItem={typeFilter}
            />
          </div>
        </div>
        <div className="relative pt-[45px]">
          <div className="absolute w-full top-0">
            <img
              src={ExploreMask}
              alt="explore back mask"
              className="object-cover w-full max-ns:hidden"
            />
            <img
              src={MobileExploreMask}
              alt="explore back mask"
              className="object-cover w-full ns:hidden"
            />
          </div>
          <div className="bl:w-[1000px] w-full max-bl:px-5 mx-auto">
            <div className="relative">
              <div className="z-30 fixed bl:hidden top-[320px] w-full ">
                {/* <button
                  className=" w-[150px] h-[50px] mx-auto border-[1px] border-gray-300  justify-center flex items-center shadow-xl  rounded-20 bg-white "
                  onClick={() => setHorizonalLayout(!horizontalLayout)}
                >
                  {horizontalLayout ? (
                    <div className="flex justify-center items-center gap-8">
                      Grid view
                      <TbLayoutList />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center gap-8">
                      List view
                      <TbLayoutGrid />
                    </div>
                  )}
                </button> */}
                {/* <button
                  className="
                  w-[70px] h-[70px] border-[1px] mx-auto border-gray-300
                   shadow-md shadow-slate-300  rounded-10 bg-white flex justify-center items-center"
                  onClick={() => setHorizonalLayout(!horizontalLayout)}
                >
                  {horizontalLayout ? (
                    <TbLayoutList size={30} />
                  ) : (
                    <TbLayoutGrid size={30} />
                  )}
                </button> */}
              </div>
              <div className="flex justify-between max-xm:flex-col max-xm:gap-y-5">
                <div className="flex max-xs:flex-col max-xs:items-start gap-x-15 items-center">
                  <div className="text-[32px] leading-[40px] font-semibold">
                    {title}
                  </div>
                  <div className="max-xs:hidden">
                    <img src={Line} alt="divide" />
                  </div>
                  <div>
                    <ListingPageDropdown
                      setButtonName={setRegion}
                      buttonName={region}
                    />
                  </div>
                </div>
                <div className="relative flex max-xs:flex-col gap-x-2.5 max-xm:gap-[70px]">
                  <div className="flex max-xm:flex-row-reverse max-xs:justify-end gap-2.5">
                    <button
                      className="z-30  w-[50px] border-[1px] border-gray-200 rounded-10 flex justify-center items-center"
                      onClick={() => setHorizonalLayout(!horizontalLayout)}
                    >
                      {horizontalLayout ? <TbLayoutList /> : <TbLayoutGrid />}
                    </button>
                    <div className="w-[150px]">
                      <Filter
                        isShowFilterModal={() => {
                          setOpenFilterForm(true);
                        }}
                      />
                    </div>
                  </div>
                  <div className="relative flex flex-col xs:w-[250px] w-[390px] max-ns:w-full">
                    <Search data={ListingPageSearchData} />
                    <div className="absolute top-[-30px] w-full ns:hidden text-center">
                      120 results
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xs:mt-[65px] mt-30 max-md:w-full mx-auto">
              {horizontalLayout ? (
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-xs:grid-cols-2 gap-x-5 max-2xs:gap-x-2.5 gap-y-30 ">
                  {ListingData.map((item, index) => {
                    return <HorizontalCard key={index} cardData={item} />;
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-y-5">
                  {ListingData.map((item, index) => {
                    return <VerticalCard key={index} cardData={item} />;
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
