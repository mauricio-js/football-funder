import React from "react";

import { Template } from "UI";

import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";

export const ListingApproval: React.FC = () => {
  return (
    <Template>
      <div className="relative xs:pt-5 pt-[10px] xs:pb-[150px] pb-[100px]">
        <div className="relative ">
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
          <div className="relative z-10">
            <div className="px-6">
              <div className="titleText">Listing approvals</div>
              <div className="mt-5 introText">
                Approve or deny listings to go live on the site
              </div>
            </div>
            <div className="mt-30 w-full overflow-y-scroll scrollbar-hidden">
              <div className="w-[1440px] h-10 bg-gray-10"></div>
            </div>
          </div>
        </div>
        <style>
          {`
            .scrollbar-hidden::-webkit-scrollbar {
                display: none;
              }
          `}
        </style>
      </div>
    </Template>
  );
};
