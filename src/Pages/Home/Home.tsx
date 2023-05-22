import React from "react";
import { Header, DropdownMenuCard, Footer } from "UI/Components";

import TopImg from "Assets/images/desktop-logo-back-image.png";
import FundraiseCardImage from "Assets/images/fundraise.png";
import ContributeCardImage from "Assets/images/convtribute.png";

type CardData = {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
  buttonName: string;
};

const FundraiseCardData: CardData = {
  id: 1,
  title: "Fundraise",
  description:
    "Stand out from the crowd and raise funds on a dedicated football platform.",
  backgroundImage: FundraiseCardImage,
  buttonName: "Start Now",
};

const ContributeCardData: CardData = {
  id: 1,
  title: "Contribute",
  description:
    "Whether here for a cause you support, or just browsing, you can start donating below.",
  backgroundImage: ContributeCardImage,
  buttonName: "Explore",
};

export function Home() {
  return (
    <div className="bg-green-70">
      {/* part-landing page sign in background */}
      <div
        className="bg-cover bg-no-repeat bg-center h-[536px]"
        style={{
          backgroundImage: `url(${TopImg})`,
        }}
      >
        <Header />
        <div className="w-full mx-auto xl:w-[1000px]">
          <div className="mt-[130px] mb-[89px]">
            <div className="w-[571px] max-sm:w-[390px] max-xl:mx-auto">
              <div className="max-xl:text-center font-semibold text-[38px] max-sm:text-[32px] leading-[52px] max-sm:leading-[40px] text-white">
                Raise funds with our fundraising, advertising and sponsorship
                engine.
              </div>
              <div className="max-xl:justify-center flex flex-row  gap-[10px] mt-[30px]">
                <button className="w-[150px] h-[50px] bg-white rounded-10 font-semibold text-base">
                  Explore
                </button>
                <button className="w-[150px] h-[50px] bg-green-10 rounded-10 font-semibold text-base">
                  How it works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[490px] xl:w-[1000px] max-xs:w-full mt-[60px] mx-auto">
        {/* Part - Fundraising */}
        <div className="font-semibold text-3xl text-white max-2xs:w-[390px] max-2xs:mx-auto">
          Fundrasing
        </div>
        <div className="mt-[20px] xl:flex xl:justify-between">
          <div className="max-xl:my-[20px]">
            <DropdownMenuCard Value={FundraiseCardData} />
          </div>
          <DropdownMenuCard Value={ContributeCardData} />
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
