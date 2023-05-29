import React, { useState } from "react";
import { Header, DropdownMenuCard, Footer } from "UI/Components";
import { HamburgerMenu } from "UI/Components/Header/HamburgerMenu";
import { SlideBar } from "./SlideBar";
import {
  AdvertisingCardData,
  MobileAdvertisingCardData,
  FundraisingCardData,
  MobileFundraisingCardData,
  SponsorshipData,
  MobileSponsorshipData,
} from "./homeConfig";

import HomeBack from "Assets/images/home/home-back.png";
import VideoBackMask from "Assets/images/home/video-back-mask.png";
import VideoPlayImg from "Assets/images/svg/homepage/video-play.svg";
import PlayerIcon from "Assets/images/svg/homepage/icon-player.svg";
import JoinBackImg from "Assets/images/svg/homepage/joinnow-back.svg";
import MobileHomeBack from "Assets/images/home/m-home-back.png";
import MobileVideoBackMask from "Assets/images/home/m-video-back-mask.png";
import MobileVideoPlayImg from "Assets/images/svg/homepage/mobile-video-play.svg";
import MobileJoinBackImg from "Assets/images/svg/homepage/mobile-joinnow-back.svg";

export const Home: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  return (
    <div className="bg-green-70">
      <div className="max-ns:hidden">
        {!openMobileMenu && (
          <div className="relative">
            <div
              className="absolute bg-cover bg-no-repeat bg-top w-full 
              h-[1935px] max-lg:h-[2423px] max-2xs:h-[2387px] rounded-b-3xl  overflow-hidden"
              style={{
                backgroundImage: `url(${HomeBack})`,
              }}
            ></div>
            <div className="relative">
              <Header
                isShowMobielMenu={() => {
                  setOpenMobileMenu(true);
                }}
              />
              <div className="mt-[130px] px-[20px]">
                <div className="lg:w-[1000px] mx-auto w-full">
                  <div className="w-[571px] max-sm:w-full max-lg:mx-auto">
                    <div
                      className="max-sm:text-center font-semibold text-[38px] max-2xs:text-[30px] 
                    leading-[52px] max-2xs:leading-[40px] text-white max-sm:px-[20px]"
                    >
                      Raise funds with our fundraising, advertising and
                      sponsorship engine.
                    </div>
                    <div
                      className="
                      w-full mt-[30px]
                      flex max-sm:justify-center gap-[10px]
                      font-semibold text-base max-vs:text-sm
                      "
                    >
                      <button
                        className="
                      w-[150px] max-ns:w-[calc(50%-45px)] h-[50px]
                      bg-white rounded-10
                      "
                      >
                        Explore
                      </button>
                      <button
                        className="
                      w-[150px] max-ns:w-[calc(50%-45px)] h-[50px]
                      bg-green-10 rounded-10
                      "
                      >
                        How it works
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[150px] mx-auto px-[10px]">
                <DropdownMenuCard
                  value={FundraisingCardData}
                  title="Fundraising"
                  textColor="text-white"
                />
              </div>
              <div className="mt-[100px]">
                <div className="bl:w-[1100px] w-full mx-auto px-5">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-[32px] leading-[43px] ">
                      Featured
                    </div>
                    <div className="font-semibold text-[14px] leading-[19px] ">
                      View all
                    </div>
                  </div>
                  <div className="mt-5 mx-auto">
                    <SlideBar />
                  </div>
                </div>
              </div>
              <div className="mt-32">
                <div className="px-[20px]">
                  <DropdownMenuCard
                    value={AdvertisingCardData}
                    title="Advertising"
                    textColor="text-black"
                  />
                </div>
              </div>
              <div className="mt-40 mx-auto px-[20px] pb-[20px]">
                <DropdownMenuCard
                  value={SponsorshipData}
                  title="Sponsorship"
                  textColor="text-white"
                />
              </div>
              <div className="mt-20">
                <div
                  className="bg-cover bg-no-repeat bg-top h-[442px] max-md:h-[230px]"
                  style={{
                    backgroundImage: `url(${VideoBackMask})`,
                  }}
                >
                  <div className="bl:w-[1000px] bl:px-3 md:px-10 w-full px-[20px] mx-auto">
                    <div className="text-white font-semibold text-[32px] leading-[43px] px-2">
                      Explore Football Funder
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative mt-[30px] mx-auto rounded-20 overflow-hidden">
                        <img
                          src={VideoPlayImg}
                          alt="video-player"
                          className="max-sm:h-[250px] w-full object-cover"
                        />
                        <div className="absolute top-0 w-full h-full flex justify-center items-center">
                          <img src={PlayerIcon} alt="player-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[150px]">
                <div className="bl:w-[1000px] bl:px-3 md:px-10 w-full px-[20px] mx-auto">
                  <div className="relative rounded-20 overflow-hidden">
                    <img
                      src={JoinBackImg}
                      alt="join us"
                      className="h-[300px] w-full object-cover"
                    />
                    <div className="absolute top-0 w-full h-full px-5 py-[32px]">
                      <div className="flex flex-col items-center h-full justify-between max-sm:justify-around">
                        <div className="font-semibold text-[50px] leading-[60px] text-green-70">
                          Join now!
                        </div>
                        <div
                          className="flex flex-col gap-[10px] text-green-70 
                            text-[14px] leading-[20px] text-center xs:w-[440px] w-full max-sm"
                        >
                          <div>
                            Explore our tools to crowdfund, sell advertising and
                            agree sponsorship for your organisation.
                          </div>
                          <div className="max-sm:hidden">
                            Whether a club, supporters' trust, league or
                            individual - our platform will support your
                            commercial goals.
                          </div>
                        </div>
                        <div className="flex justify-center gap-5">
                          <button
                            className="w-[150px] h-[50px] 
                              text-[16px] leading-[22px] font-semibold bg-white rounded-10"
                          >
                            Sign in
                          </button>
                          <button
                            className="w-[150px] h-[50px] text-[16px] leading-[22px]
                              font-semibold bg-green-70 text-white rounded-10"
                          >
                            Sign up
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[150px]">
                <Footer />
              </div>
            </div>
          </div>
        )}
        {openMobileMenu && (
          <HamburgerMenu
            isShowMobielMenu={() => {
              setOpenMobileMenu(false);
            }}
          />
        )}
      </div>
      <div className="ns:hidden">
        {!openMobileMenu && (
          <div className="relative">
            <div className="absolute w-full rounded-b-3xl z-20">
              <img
                src={MobileHomeBack}
                className="h-[2311px] max-[407px]:h-[2350px] max-[348px]:h-[2389px] object-cover rounded-b-[30px]"
                alt="mobile-home-back"
              />
            </div>
            <div className="relative">
              <Header
                isShowMobielMenu={() => {
                  setOpenMobileMenu(true);
                }}
              />
              <div className="relative mt-[172px] px-[20px] z-20">
                <div className="lg:w-[1000px] mx-auto w-full ">
                  <div className="w-[571px] max-sm:w-full max-lg:mx-auto z-20">
                    <div
                      className="max-sm:text-center font-semibold text-[30px] 
                    leading-[40px] text-white px-[10px]"
                    >
                      Raise funds with our fundraising, advertising and
                      sponsorship engine.
                    </div>
                    <div
                      className="
                      w-full mt-[30px]
                      flex justify-center gap-[10px]
                      font-semibold text-base max-vs:text-sm
                      "
                    >
                      <button
                        className="
                      w-[calc(50%-45px)] h-[50px]
                      bg-white rounded-10
                      "
                      >
                        Explore
                      </button>
                      <button
                        className="
                      w-[calc(50%-45px)] h-[50px]
                      bg-green-10 rounded-10
                      "
                      >
                        How it works
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[172px] mx-auto px-[10px] z-20">
                <DropdownMenuCard
                  value={MobileFundraisingCardData}
                  title="Fundraising"
                  textColor="text-white"
                />
              </div>
              <div className="relative mt-[40px] z-20">
                <div className="w-full mx-auto">
                  <div className="px-5">
                    <div className="flex justify-between items-center">
                      <div className="font-semibold text-[32px] leading-[43px] ">
                        Featured
                      </div>
                      <div className="font-semibold text-[14px] leading-[19px] ">
                        View all
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 mx-auto">
                    <SlideBar />
                  </div>
                </div>
              </div>
              <div className="relative px-[20px] mt-10 z-20">
                <DropdownMenuCard
                  value={MobileAdvertisingCardData}
                  title="Advertising"
                  textColor="text-black"
                />
              </div>
              <div className="pt-[70px] mx-auto px-[20px] pb-[20px] mt-[10px] bg-white rounded-br-20">
                <DropdownMenuCard
                  value={MobileSponsorshipData}
                  title="Sponsorship"
                  textColor="text-black"
                />
              </div>
              <div className="mt-20">
                <div
                  className="bg-cover bg-no-repeat bg-top h-[230px]"
                  style={{
                    backgroundImage: `url(${MobileVideoBackMask})`,
                  }}
                >
                  <div className="w-full px-[20px] mx-auto">
                    <div className="text-white font-semibold text-[32px] leading-[43px] px-2">
                      Explore Football Funder
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative mt-[30px] mx-auto rounded-20 overflow-hidden">
                        <img
                          src={MobileVideoPlayImg}
                          alt="video-player"
                          className="h-[250px] w-full object-cover"
                        />
                        <div className="absolute top-0 w-full h-full flex justify-center items-center">
                          <img src={PlayerIcon} alt="player-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[150px] max-[417px]:mt-[200px]">
                <div className="w-full px-[20px] h-[250px] mx-auto">
                  <div className=" relative">
                    <img
                      src={MobileJoinBackImg}
                      alt="join us"
                      className="h-[250px] w-full object-fit"
                    />
                    <div className="absolute top-0 w-full h-[250px] px-5">
                      <div className="flex flex-col items-center h-full py-[32px] justify-around">
                        <div className="font-semibold text-[50px] leading-[60px] text-green-70">
                          Join now!
                        </div>
                        <div
                          className="flex flex-col gap-[10px] text-green-70 
                        text-[14px] leading-[20px] font-medium text-center w-full"
                        >
                          <div>
                            Explore our tools to crowdfund, sell advertising and
                            agree sponsorship for your organisation.
                          </div>
                          <div className="max-sm:hidden">
                            Whether a club, supporters' trust, league or
                            individual - our platform will support your
                            commercial goals.
                          </div>
                        </div>
                        <div className="flex justify-center gap-5 max-vs:gap-[10px]">
                          <button
                            className="w-[120px] max-vs:w-[100px] h-[40px] 
                            text-[14px] leading-[20px] font-semibold bg-white rounded-10"
                          >
                            Sign in
                          </button>
                          <button
                            className="w-[120px] max-vs:w-[100px] h-[40px] text-[14px] 
                          font-semibold bg-green-70 text-white rounded-10"
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[55px]">
                <Footer />
              </div>
            </div>
          </div>
        )}
        {openMobileMenu && (
          <HamburgerMenu
            isShowMobielMenu={() => {
              setOpenMobileMenu(false);
            }}
          />
        )}
      </div>
    </div>
  );
};
