import React, { useState } from "react";
import { Header, DropdownMenuCard, Footer } from "UI/Components";
import { HamburgerMenu } from "UI/Components/Header/HamburgerMenu";
import { SlideBar } from "./SlideBar";
import {
  AdvertisingCardData,
  FundraisingCardData,
  SuponsorshipData,
} from "./homeConfig";

import HomeBack from "Assets/images/home-back.png";
import VideoBackMask from "Assets/images/video-back-mask.png";
import VideoPlayImg from "Assets/images/video-play.png";
import PlayerIcon from "Assets/images/icon-player.png";
import JoinBackImg from "Assets/images/join-now-back.png";

export const Home: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  return (
    <div className="bg-green-70">
      {!openMobileMenu && (
        <div className="relative">
          <div
            className="absolute bg-cover bg-no-repeat bg-top w-full 
              h-[1935px] max-lg:h-[2400px] rounded-b-3xl  overflow-hidden"
            style={{
              backgroundImage: `url(${HomeBack})`,
            }}
          ></div>
          <div className="relative z-10 h-full overflow-auto">
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
              <div className="bl:w-[1000px] md:w-[700px] w-full mx-auto">
                <div className="px-5">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-3xl">Featured</div>
                    <div className="font-semibold text-sm">View all</div>
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
                value={SuponsorshipData}
                title="Suponsorship"
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
                  <div className="text-white font-semibold text-2xl px-2">
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
                    className="h-[250px] w-full object-cover"
                  />
                  <div className="absolute top-0 w-full h-full p-5">
                    <div className="flex flex-col items-center h-full justify-around">
                      <div className="font-semibold text-5xl leading-10 text-green-70">
                        Join now!
                      </div>
                      <div
                        className="flex flex-col gap-[10px] text-green-70 
                        text-sm text-center xs:w-[440px] w-full max-sm"
                      >
                        <div>
                          Explore our tools to crowdfund, sell advertising and
                          agree sponsorship for your organisation.
                        </div>
                        <div className="max-sm:hidden">
                          Whether a club, supporters' trust, league or
                          individual - our platform will support your commercial
                          goals.
                        </div>
                      </div>
                      <div className="flex justify-center gap-5">
                        <button
                          className="ns:px-[50px] px-5 py-[15px] 
                          text-base font-semibold bg-white rounded-10"
                        >
                          Sign in
                        </button>
                        <button
                          className="ns:px-[50px] px-5 py-[15px] text-base 
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
            <div>
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
  );
};
