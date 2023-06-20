import React from "react";
import { useNavigate } from "react-router";
import {
  // ADSISTING_URL,
  // HOME_URL,
  EXPLORE_URL,
  // CROWDFUNDINGLIST_URL,
  HOWITWORKS_URL,
  // ORGANISATIONFUNDRAISER_URL,
  // ORGANISATIONINDIVIDUAL_URL,
  // ORGANISATIONLISTING_URL,
} from "Lib";
import { CarouselCard, SlideBar, Join, SummaryCard, Template } from "UI";
import {
  AdvertisingCardData,
  CarouselCardData,
  MobileAdvertisingCardData,
  FundraisingCardData,
  MobileFundraisingCardData,
  SponsorshipData,
  MobileSponsorshipData,
} from "Config";
import HomeBack from "Assets/images/home/home-back.png";
import VideoBackMask from "Assets/images/home/video-back-mask.png";
import VideoPlayImg from "Assets/images/home/video-play.svg";
import PlayerIcon from "Assets/images/home/icon-player.svg";
import JoinBackImg from "Assets/images/home/joinnow-back.png";
import MobileHomeBack from "Assets/images/home/m-home-back.png";
import MobileVideoBackMask from "Assets/images/home/m-video-back-mask.png";
import MobileVideoPlayImg from "Assets/images/home/mobile-video-play.png";
import MobileJoinBackImg from "Assets/images/home/mobile-joinnow-back.png";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Template title="Home">
      <div className="relative bg-green-70">
        <div className="max-ns:hidden pb-[150px] max-ns:pb-[55px]">
          <div className="relative">
            <div
              className="absolute bg-cover bg-no-repeat bg-top w-full 
              h-[1935px] max-lg:h-[2423px] max-2xs:h-[2387px] rounded-b-3xl  overflow-hidden"
              style={{
                backgroundImage: `url(${HomeBack})`,
              }}
            ></div>
            <div className="relative">
              <div className="px-5">
                <div className="py-[100px]"></div>
                <div className="lg:w-[1000px] mx-auto w-full">
                  <div className="w-[571px] max-sm:w-full max-lg:mx-auto">
                    <div
                      className="max-sm:text-center font-semibold text-[38px] max-2xs:text-[30px] 
                    leading-[52px] max-2xs:leading-[40px] text-white max-sm:px-5"
                    >
                      Raise funds with our fundraising, advertising and
                      sponsorship engine.
                    </div>
                    <div
                      className="
                      w-full mt-30
                      flex max-sm:justify-center gap-[10px]
                      font-semibold text-base max-vs:text-sm
                      "
                    >
                      <button
                        className="
                      w-[150px] max-ns:w-[calc(50%-45px)] h-[50px]
                      bg-white rounded-10
                      "
                        onClick={() => {
                          navigate(EXPLORE_URL);
                        }}
                      >
                        Explore
                      </button>
                      <button
                        className="
                      w-[150px] max-ns:w-[calc(50%-45px)] h-[50px]
                      bg-green-10 rounded-10
                      "
                        onClick={() => {
                          navigate(HOWITWORKS_URL);
                        }}
                      >
                        How it works
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[150px] mx-auto px-[10px]">
                <SummaryCard
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
                    <SlideBar
                      data={CarouselCardData}
                      carouselContent={CarouselCard}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-32">
                <div className="px-5">
                  <SummaryCard
                    value={AdvertisingCardData}
                    title="Advertising"
                    textColor="text-black"
                  />
                </div>
              </div>
              <div className="mt-40 mx-auto px-5 pb-5">
                <SummaryCard
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
                  <div className="bl:w-[1000px] bl:px-3 md:px-10 w-full px-5 mx-auto">
                    <div className="text-white font-semibold text-[32px] leading-[43px] px-2">
                      Explore Football Funder
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative mt-30 mx-auto rounded-20 overflow-hidden">
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
              <div className="mt-[150px] px-5 ">
                <Join image={JoinBackImg} />
              </div>
            </div>
            <div className="absolute bottom-[-180px] bg-green-70 py-[20px] w-full z-[-10]"></div>
          </div>
        </div>
        <div className="ns:hidden pb-[55px]">
          <div className="relative">
            <div className="absolute w-full rounded-b-3xl z-20">
              <img
                src={MobileHomeBack}
                className="h-[2311px] max-[407px]:h-[2350px] max-[348px]:h-[2389px] object-cover rounded-b-[30px]"
                alt="mobile-home-back"
              />
            </div>
            <div className="relative">
              <div className="relative pt-[180px]  px-5 z-20">
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
                      w-full mt-30
                      flex justify-center gap-[10px]
                      font-semibold text-base max-vs:text-sm
                      "
                    >
                      <button
                        className="
                      w-[calc(50%-45px)] h-[50px]
                      bg-white rounded-10
                      "
                        onClick={() => {
                          navigate(EXPLORE_URL);
                        }}
                      >
                        Explore
                      </button>
                      <button
                        className="
                      w-[calc(50%-45px)] h-[50px]
                      bg-green-10 rounded-10
                      "
                        onClick={() => {
                          navigate(HOWITWORKS_URL);
                        }}
                      >
                        How it works
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[172px] mx-auto px-[10px] z-20">
                <SummaryCard
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
                    <SlideBar
                      data={CarouselCardData}
                      carouselContent={CarouselCard}
                    />
                  </div>
                </div>
              </div>
              <div className="relative px-5 mt-10 z-20">
                <SummaryCard
                  value={MobileAdvertisingCardData}
                  title="Advertising"
                  textColor="text-black"
                />
              </div>
              <div className="pt-[130px] mx-auto px-5 pb-5 mt-[10px] bg-white rounded-br-20">
                <SummaryCard
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
                  <div className="w-full px-5 mx-auto">
                    <div className="text-white font-semibold text-[32px] leading-[43px] px-2">
                      Explore Football Funder
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative mt-30 mx-auto rounded-20 overflow-hidden">
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
              <div className="mt-[150px] px-5 max-[417px]:mt-[200px]">
                <Join image={MobileJoinBackImg} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[-30px] bg-green-70 py-[20px] w-full z-[-10]"></div>
        </div>
      </div>
    </Template>
  );
};
