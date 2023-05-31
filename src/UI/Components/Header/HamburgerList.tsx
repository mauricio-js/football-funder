import React from "react";
import SocialSiteLink from "../Footer/SocialSiteLink";
import { HamburgerItem } from "./HamburgerItem";
import { HamburgerListItem } from "./HamburgerListItem";
import {
  homeButtonData,
  exploreButtonData,
  advertisingButtonData,
  sponsorshipButtonData,
  fundraisingButtonData,
  feeButtonData,
  faqButtonData,
  aboutButtonData,
  supprotButtonData,
} from "./headerConfig";

export const HamburgerList = () => {
  return (
    <>
      <div className="flex flex-col divide-y divide-solid divide-green-30">
        <HamburgerItem Item={homeButtonData} />
        <HamburgerItem Item={exploreButtonData} />
        <HamburgerListItem List={fundraisingButtonData} />
        <HamburgerListItem List={advertisingButtonData} />
        <HamburgerListItem List={sponsorshipButtonData} />
        <HamburgerItem Item={feeButtonData} />
        <HamburgerItem Item={faqButtonData} />
        <HamburgerItem Item={aboutButtonData} />
        <HamburgerItem Item={supprotButtonData} />
        {/* {HamburgerListData.map((item, index) => (
          <div key={index}>
            <div className="px-[10px] py-[20px]">
              <button className="text-white leading-[24px] font-medium text-[18px]">
                {item.title}
              </button>
              {item.children ? (
                <div className="mt-[20px] flex flex-col gap-[20px]">
                  {item.children.map((element, index) => (
                    <div key={index}>
                      <button className="text-green-10 font-medium text-[16px] leading-[22px]">
                        {element.title}
                      </button>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))} */}
        <div className="px-[10px] py-[20px]">
          <SocialSiteLink />
        </div>
      </div>
    </>
  );
};
