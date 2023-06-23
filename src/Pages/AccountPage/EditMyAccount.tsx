import React from "react";
import { PageTitle, PageSectionTitle, Template } from "UI";
import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";
import ProfileImage from "Assets/images/account/profile-image.png";
import { RiDeleteBin6Line } from "react-icons/ri";

export const EditMyAccount: React.FC = () => {
  return (
    <Template>
      <div className="relative md:pt-5 pt-[10px] md:pb-[320px] pb-[250px]">
        <div className="relative sm:pt-[45px] pt-[25px]">
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
          <div className="xm:w-[870px] w-full px-5 mx-auto">
            <PageTitle title="Edit my account" />
            <div className="mt-[60px]">
              <PageSectionTitle title="Profile picture" />
              <div className="mt-15 relative flex">
                <div className="relative">
                  <img src={ProfileImage} alt="profileimage" />
                  <div className="absolute bottom-0 -right-2">
                    <button className="bg-gray-300 rounded-20 p-2">
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-30"></div>
          </div>
        </div>
      </div>
    </Template>
  );
};
