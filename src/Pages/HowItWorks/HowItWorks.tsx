import React from "react";
import { Join, SummaryCard, Template } from "UI";
import {
  AdvertisingCardData,
  MobileAdvertisingCardData,
  FundraisingCardData,
  MobileFundraisingCardData,
  SponsorshipData,
  MobileSponsorshipData,
} from "Config";

import DesktopBackImage from "Assets/images/svg/howItWorks/howDesktopBackImage.svg";
import MobileBackImage from "Assets/images/svg/howItWorks/howMobileBackImage.svg";
import DesktopMask from "Assets/images/svg/howItWorks/desktopMask.svg";
import MobileMask from "Assets/images/svg/howItWorks/mobileMask.svg";
import MobileJoinBackImg from "Assets/images/svg/homepage/mobile-joinnow-back.svg";

export const HowItWorks: React.FC = () => {
  return (
    <Template title="HowItWorks">
      <div className="bg-green-70 relative pb-[120px] max-ns:pb-[60px]">
        <div className="relative">
          <div className="absolute top-[140px] max-xs:top-[90px] w-full ">
            <div
              className="w-[1000px] max-lg:w-full max-lg:text-center max-lg:px-[20px] mx-auto 
                            text-[60px] leading-[60px] font-semibold text-white"
            >
              What is Football Funder?
            </div>
          </div>
          <div className="">
            <img
              src={DesktopBackImage}
              alt="background"
              className="w-full max-ns:hidden object-cover h-[378px]"
            />
            <img
              src={MobileBackImage}
              alt="background"
              className="ns:hidden object-cover h-[378px] w-full"
            />
          </div>
        </div>
        <div className="relative mt-[77px] max-ns:mt-[33px] w-full">
          <div className="absolute w-full">
            <img
              src={DesktopMask}
              alt="desktop mask"
              className="max-ns:hidden object-cover object-top h-[442px] w-full"
            />
            <img
              src={MobileMask}
              alt="desktop mask"
              className="ns:hidden object-cover h-[230px] w-full"
            />
          </div>
          <div className="w-full pt-[23px]">
            <div className="relative w-[1000px] max-lg:w-full  mx-auto">
              <div
                className="w-[610px] max-md:w-full max-lg:px-[20px] 
                  max-md:mx-auto flex flex-col gap-[20px] text-white"
              >
                <div
                  className="text-[32px] max-ns:text-[21px] 
                    max-ns:leading-[28px] leading-[43px] font-semibold"
                >
                  How it works
                </div>
                <div className="text-[16px] leading-[22px] font-medium flex flex-col gap-[20px]">
                  <div>
                    <span>
                      Football Funder is a platform for organisations of any
                      size to maximise <br className="max-md:hidden"></br>
                    </span>
                    <span>the financial revenue of their operations.</span>
                  </div>
                  <div>
                    We’re flying the fundraising flag for footballing
                    organisations at all levels of football across the United
                    Kingdom.
                  </div>
                  <div>
                    The platform offers users three key levers to pull, either
                    for certain needs, or assets that can generate revenue:
                  </div>
                </div>
              </div>
            </div>
            <div className="max-ns:hidden px-[20px]">
              <div className="mt-[100px]">
                <SummaryCard
                  value={FundraisingCardData}
                  title="Fundraising"
                  descritpion="Campaign tooling and promotion for football specific fundraising."
                  textColor="text-white"
                />
              </div>
              <div className="mt-[100px]">
                <SummaryCard
                  value={AdvertisingCardData}
                  title="Advertising"
                  descritpion="Bring opportunities to life and build relationships with sponsors"
                  textColor="text-white"
                />
              </div>
              <div className="mt-[95px]">
                <SummaryCard
                  value={SponsorshipData}
                  title="Sponsorship"
                  descritpion="Bring opportunities to life and build relationships with sponsors"
                  textColor="text-white"
                />
              </div>
              <div className="mt-[100px]">
                <Join image={MobileJoinBackImg} />
              </div>
            </div>
            <div className="ns:hidden">
              <div className="mt-[60px] px-[20px] flex flex-col gap-y-[60px]">
                <SummaryCard
                  value={MobileFundraisingCardData}
                  title="Fundraising"
                  descritpion="Campaign tooling and promotion for football specific fundraising."
                  textColor="text-white"
                />
                <SummaryCard
                  value={MobileAdvertisingCardData}
                  title="Advertising"
                  descritpion="Bring opportunities to life and build relationships with sponsors"
                  textColor="text-white"
                />
                <SummaryCard
                  value={MobileSponsorshipData}
                  title="Sponsorship"
                  descritpion="Bring opportunities to life and build relationships with sponsors"
                  textColor="text-white"
                />
                <Join image={MobileJoinBackImg} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-38px] bg-green-70 p-5 z-[-10] w-full"></div>
      </div>
    </Template>
  );
};
