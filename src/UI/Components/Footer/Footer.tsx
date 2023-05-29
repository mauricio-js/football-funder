import React from "react";
import SelectLanguage from "UI/Components/SelectLanguage/SelectLanguage";
import SocialSiteLink from "./SocialSiteLink";
import { guideList } from "./footerConfig";
import FooterLogoImage from "Assets/images/svg/logo/footer-logo.svg";

export const Footer: React.FC = () => {
  return (
    <div
      className="
    bg-green-40 p-[60px] 
      max-sm:px-[20px] max-sm:py-[30px] 
      max-md:rounded-t-[30px]
      "
    >
      <div className="grid grid-cols-11 gap-x-1 gap-y-[60px] max-lg:gap-y-[30px] text-white">
        <div className="col-span-2 max-md:col-span-11">
          <img src={FooterLogoImage} alt="footer-logo" />
        </div>
        <div className="col-span-8 max-lg:col-span-11 flex items-center">
          <div
            className="flex flex-row max-lg:flex-col max-lg:gap-[10px] 
            gap-[30px] text-[14px] font-medium leading-[25px] text-white"
          >
            {guideList.map((item, index) => {
              return (
                <div key={index} onClick={item.handleClick}>
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-7 max-lg:col-span-11">
          <div className="flex flex-row items-center gap-8 max-lg:flex-col max-lg:items-start">
            <div
              className="flex flex-row gap-x-[30px] gap-y-[5px] 
              max-lg:flex-col text-[13px] font-medium leading-[25px] text-white"
            >
              <div className="flex gap-x-[30px] max-2xs:flex-col">
                <div>© 2023 Football Funder - All Rights Reserved</div>
                <div>Operated by Aquariux Limited</div>
              </div>
              <SelectLanguage />
            </div>
          </div>
        </div>
        <div className="col-span-4 flex flex-row justify-end max-lg:col-span-11 max-lg:justify-start">
          <SocialSiteLink />
        </div>
      </div>
    </div>
  );
};
