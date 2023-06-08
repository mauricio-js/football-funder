import React, { useState } from "react";
import classNames from "classnames";
import { ExploreDropdown, Filter, FilterMenu } from "Pages";
import { Card, Search, Template } from "UI";
import { CrowdFundList, ExploreDropdownData, ExploreSearchData } from "Config";
import Line from "Assets/images/explore/explore-divide.svg";
import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";
import { TbLayoutList, TbLayoutGrid } from "react-icons/tb";

export const CrowdFundingList: React.FC = () => {
  const [openFilterForm, setOpenFilterForm] = useState<boolean>(false);
  const [region, setRegion] = useState<string>(ExploreDropdownData[0].name);
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
            <FilterMenu isShowFilterModal={() => setOpenFilterForm(false)} />
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
              <div className="z-30 fixed  bl:hidden top-[500px] w-full ">
                <button
                  className=" w-[150px] h-[50px] mx-auto  justify-center flex items-center shadow-xl  rounded-20 bg-white "
                  onClick={() => setHorizonalLayout(!horizontalLayout)}
                >
                  {horizontalLayout ? (
                    <div className="flex justify-center items-center gap-8">
                      List view
                      <TbLayoutList />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center gap-8">
                      Grid view
                      <TbLayoutGrid />
                    </div>
                  )}
                </button>
              </div>
              <div className="flex justify-between max-xm:flex-col max-xm:gap-y-5">
                <div className="flex max-xs:flex-col max-xs:items-start gap-x-15 items-center">
                  <div className="text-[32px] leading-[40px] font-semibold">
                    Crowdfunding
                  </div>
                  <div className="max-xs:hidden">
                    <img src={Line} alt="divide" />
                  </div>
                  <div>
                    <ExploreDropdown
                      setButtonName={setRegion}
                      buttonName={region}
                    />
                  </div>
                </div>
                <div className="relative flex max-xs:flex-col gap-x-[10px] max-xm:gap-[70px]">
                  <button
                    className="z-30 max-bl:hidden w-[50px] border-[1px] border-gray-200 rounded-10 flex justify-center items-center"
                    onClick={() => setHorizonalLayout(!horizontalLayout)}
                  >
                    {horizontalLayout ? <TbLayoutGrid /> : <TbLayoutList />}
                  </button>
                  <div className="w-[150px]">
                    <Filter
                      isShowFilterModal={() => {
                        setOpenFilterForm(true);
                      }}
                    />
                  </div>
                  <div className="relative flex flex-col xs:w-[250px] w-[390px] max-ns:w-full">
                    <Search data={ExploreSearchData} />
                    <div className="absolute top-[-30px] w-full ns:hidden text-center">
                      120 results
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xs:mt-[65px] mt-30 max-ns max-bl:w-[700px] max-md:w-full mx-auto">
              <div className="flex flex-wrap max-bl:justify-between max-md:justify-center gap-x-5 gap-y-30 mx-auto">
                {CrowdFundList.map((item, index) => {
                  return <Card key={index} cardData={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
