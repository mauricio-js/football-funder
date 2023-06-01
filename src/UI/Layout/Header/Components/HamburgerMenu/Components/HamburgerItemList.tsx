import React from "react";
import { SocialSiteLink, HamburgerItem, HamburgerSubMenuItem } from "UI";
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
} from "Config";

export const HamburgerItemList = () => {
  return (
    <>
      <div className="flex flex-col divide-y divide-solid divide-green-30">
        <HamburgerItem Item={homeButtonData} />
        <HamburgerItem Item={exploreButtonData} />
        <HamburgerSubMenuItem List={fundraisingButtonData} />
        <HamburgerSubMenuItem List={advertisingButtonData} />
        <HamburgerSubMenuItem List={sponsorshipButtonData} />
        <HamburgerItem Item={feeButtonData} />
        <HamburgerItem Item={faqButtonData} />
        <HamburgerItem Item={aboutButtonData} />
        <HamburgerItem Item={supprotButtonData} />
        <div className="px-[10px] py-[20px]">
          <SocialSiteLink />
        </div>
      </div>
    </>
  );
};
