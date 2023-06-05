import React, { useState } from "react";
import classNames from "classnames";
import { Card, Search, Template } from "UI";
import { ExploreDropdown, Filter, FilterMenu } from "Pages";
import { ExploreCardData, ExploreSearchData } from "Config";
import ExploreMask from "Assets/images/svg/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/svg/explore/m-explore-mask.svg";
import Line from "Assets/images/svg/explore/explore-divide.svg";

export const Explore: React.FC = () => {
  const [openFilterForm, setOpenFilterForm] = useState<boolean>(false);
  return (
    <Template title="Explore">
      <div className="relative">
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
        <div className="absolute mt-[20px] w-full">
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
        <div
          className="pt-[60px] mb-[150px] max-ns:mb-[60px] 
              bl:w-[1000px] w-full max-bl:px-[20px] mx-auto"
        >
          <div className="px-[2px]">
            <div className="flex justify-between max-xm:flex-col max-xm:gap-y-[20px]">
              <div className="flex max-xs:flex-col max-xs:items-start gap-x-[15px] items-center">
                <div className="text-[32px] leading-[40px] font-semibold">
                  Explore
                </div>
                <div className="max-xs:hidden">
                  <img src={Line} alt="divide" />
                </div>
                <div>
                  <ExploreDropdown />
                </div>
              </div>
              <div className="flex max-xs:flex-col gap-[60px] max-xm:gap-[70px]">
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
          <div className="xs:mt-[65px] mt-[30px] max-ns max-bl:w-[700px] max-md:w-full mx-auto">
            <div className="flex flex-wrap max-bl:justify-between max-md:justify-center gap-x-[20px] gap-y-[30px] mx-auto">
              {ExploreCardData.map((item, index) => {
                return <Card key={index} cardData={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
