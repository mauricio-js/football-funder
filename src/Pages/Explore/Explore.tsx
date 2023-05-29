import React, { useState } from "react";
import { Header, HamburgerMenu, Footer } from "UI/Components";
import { ExploreDropdown } from "./ExploreDropDown";
import { FilterBar } from "./FiterBar";
import { SearchBar } from "./SearchBar";
import { Card } from "./Card";
import { ExploreCardData } from "./exploreConfig";
import ExploreMask from "Assets/images/svg/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/svg/explore/m-explore-mask.svg";
import Line from "Assets/images/svg/explore/explore-divide.svg";

export const Explore: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  return (
    <div className="relative">
      {!openMobileMenu && (
        <div>
          <Header
            isShowMobielMenu={() => {
              setOpenMobileMenu(true);
            }}
          />
        </div>
      )}
      <div className="absolute top-[90px] w-full">
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
      <div className="mt-[60px] bl:w-[1000px] w-full max-bl:px-[20px] mx-auto">
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
                <FilterBar />
              </div>
              <div className="relative flex flex-col xs:w-[250px] w-[390px] max-ns:w-full">
                <SearchBar />
                <div className="absolute top-[-30px] w-full ns:hidden text-center">
                  120 results
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xs:mt-[65px] mt-[30px] max-bl:w-[700px] max-md:w-full mx-auto">
          <div className="flex flex-wrap max-bl:justify-between max-md:justify-center gap-x-[20px] gap-y-[30px] mx-auto content-stretch">
            {ExploreCardData.map((item, index) => {
              return <Card key={index} cardData={item} />;
            })}
          </div>
        </div>
      </div>
      {openMobileMenu && (
        <HamburgerMenu
          isShowMobielMenu={() => {
            setOpenMobileMenu(false);
          }}
        />
      )}
      <div className="ns:mt-[150px] mt-[46px]">
        <Footer />
      </div>
    </div>
  );
};
