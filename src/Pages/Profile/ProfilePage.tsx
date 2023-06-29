import React from "react";

import {
  BuyerCard,
  VerticalCardLabel,
  Template,
  VerticalCard,
  Button,
} from "UI";

import {
  FactItem,
  Gallery,
  // Gradient,
  ProfileImagePanel,
  ProfileNameSection,
  SocialIcons,
} from "./Components";

import {
  AdsListData,
  CrowdFundListData,
  ProfileLocationLabelData,
  ProfileClubLabelData,
  SponsorshipListData,
} from "Config";

import ClubImage from "Assets/images/profile/club-image.png";
import ClubLogo from "Assets/images/profile/club-logo.png";
import SmallCardImg1 from "Assets/images/explore/card-b.png";
import SmallCardImg2 from "Assets/images/explore/card-c.png";

export const ProfilePage = () => {
  return (
    <Template>
      <div className="relative sm:pt-30 pb-[150px] sm:pb-[100px] bg-green-70">
        <div className="flex flex-col items-center">
          <ProfileImagePanel backImage={ClubImage} logo={ClubLogo} />
          <div className="flex flex-col items-center w-full px-5">
            <div className="mt-[80px]">
              <ProfileNameSection name="Coxhoe Athletic FC" />
            </div>
            <div className="mt-30 text-sm text-white">
              Coxhoe Athletic FC - Varius habitasse semper convallis mi. <br />
              Mi adipiscing mauris pharetra congue lorem nisl felis risus.
            </div>
            <div className="mt-30 flex gap-2.5">
              <VerticalCardLabel cardLabelData={ProfileLocationLabelData} />
              <VerticalCardLabel cardLabelData={ProfileClubLabelData} />
            </div>
            <div className="mt-30">
              <SocialIcons />
            </div>
          </div>
          {/* <div className="mt-[60px] w-full">
            <Gradient />
          </div> */}
          <div className="mm:w-[800px] max-mm:px-5">
            <div className="mt-[100px]">
              <div className="profileSectionTitle">Fundraisers</div>
              <div className="mt-30">
                <VerticalCard
                  cardData={CrowdFundListData[0]}
                  profileCard={true}
                />
              </div>
              <div className="mt-30 flex md:flex-row flex-col items-center gap-5">
                <div className="md:w-1/2">
                  <BuyerCard cost="50 % funded" image={SmallCardImg1} />
                </div>
                <div className="md:w-1/2">
                  <BuyerCard cost="50 % funded" image={SmallCardImg2} />
                </div>
              </div>
            </div>
            <div className="mt-[100px]">
              <div className="profileSectionTitle">Advertising</div>
              <div className="mt-30">
                <VerticalCard cardData={AdsListData[0]} profileCard={true} />
              </div>
              <div className="mt-30 flex md:flex-row flex-col items-center gap-5">
                <div className="md:w-1/2">
                  <BuyerCard cost="50 % funded" image={SmallCardImg1} />
                </div>
                <div className="md:w-1/2">
                  <BuyerCard cost="50 % funded" image={SmallCardImg2} />
                </div>
              </div>
            </div>
            <div className="mt-[100px]">
              <div className="profileSectionTitle">Sponsorship</div>
              <div className="mt-30">
                <VerticalCard
                  cardData={SponsorshipListData[0]}
                  profileCard={true}
                />
              </div>
              <div className="mt-30 flex md:flex-row flex-col items-center gap-5">
                <div className="md:w-1/2">
                  <BuyerCard cost="50 % funded" image={SmallCardImg1} />
                </div>
                <div className="md:w-1/2">
                  <BuyerCard cost="50 % funded" image={SmallCardImg2} />
                </div>
              </div>
            </div>
            <div className="mt-[60px]">
              <div className="profileSectionTitle">Facts</div>
              <div className="mt-30 flex md:flex-row md:justify-between flex-col gap-y-5">
                <FactItem title="Since" value="2004" />
                <FactItem title="Trophies" value="12" />
                <FactItem title="Capacity" value="1000" />
                <FactItem title="Average attendance" value="669" />
                <FactItem title="Average player age" value="26" />
              </div>
            </div>
            <div className="mt-[60px]">
              <div className="profileSectionTitle">Gallery</div>
              <div className="mt-30">
                <Gallery />
              </div>
            </div>
            <div className="mt-[60px]">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Visit club site"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-10 h-12 w-full bg-green-70 -z-10"></div>
        <style>
          {`
            
            `}
        </style>
      </div>
    </Template>
  );
};
