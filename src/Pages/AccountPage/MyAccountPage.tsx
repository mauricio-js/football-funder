import React, { useState } from "react";
import {
  Accordion,
  MyTab,
  PageTitle,
  PageSectionTitle,
  VerticalCardLabel,
  Template,
} from "UI";
import {
  AccountPageTabButtonNameData,
  AccountClubTypeCardLabelData,
  AccountLocationCardLabelData,
} from "Config";
import { MyTabsDataType } from "types";
import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";
import AccountImage from "Assets/images/account/account-image.png";
import { HiOutlinePencil } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import classNames from "classnames";
import { TabButton } from "./Components";

export const MyAccountPage: React.FC = () => {
  const [active, setActive] = useState<string>("myProfile");

  function handleScroll(): void {
    const div = document.querySelector("#sticky-tab");
    if (div) {
      const rect = div.getBoundingClientRect();
      if (rect.top === 74) {
        div.classList.add("bg-white", "shadow-lg", "shadow-slate-500");
      } else {
        div.classList.remove("bg-white", "shadow-lg", "shadow-slate-500");
      }
    }
  }
  window.addEventListener("scroll", handleScroll);

  const FundraisingTab: MyTabsDataType[] = [
    {
      content: <div>123</div>,
      number: 1,
      tabName: "Fundraise",
    },
    {
      content: <div>123</div>,
      number: 0,
      tabName: "Contribute",
    },
  ];
  const AdvertisingTab: MyTabsDataType[] = [
    {
      content: (
        <div className="introText">
          You haven’t listed any advertising spaces to sell yet. If you are
          looking to buy advertising space instead,{" "}
          <span className="text-green-70 font-semibold underline underline-offset-2">
            {" "}
            you can explore live opportunities here.
          </span>
        </div>
      ),
      number: 0,
      tabName: "Sell",
    },
    {
      content: (
        <div className="introText">
          You haven’t bought any advertising spaces yet.{" "}
          <span className="text-green-70 font-semibold underline underline-offset-2">
            Explore live opportunities here
          </span>
          , or if you are looking to sell advertising space, you can list your
          opportunities{" "}
          <span className="text-green-70 font-semibold underline underline-offset-2">
            here
          </span>
          .
        </div>
      ),
      number: 0,
      tabName: "Buy",
    },
  ];
  const SponsorshipTab: MyTabsDataType[] = [
    {
      content: (
        <div className="introText">
          You haven’t listed any advertising spaces to sell yet. If you are
          looking to buy advertising space instead,{" "}
          <span className="text-green-70 font-semibold underline underline-offset-2">
            {" "}
            you can explore live opportunities here.
          </span>
        </div>
      ),
      number: 0,
      tabName: "Sell",
    },
    {
      content: (
        <div className="introText">
          You haven’t bought any advertising spaces yet.{" "}
          <span className="text-green-70 font-semibold underline underline-offset-2">
            Explore live opportunities here
          </span>
          , or if you are looking to sell advertising space, you can list your
          opportunities{" "}
          <span className="text-green-70 font-semibold underline underline-offset-2">
            here
          </span>
          .
        </div>
      ),
      number: 0,
      tabName: "Buy",
    },
  ];
  return (
    <Template>
      <div className="relative md:pt-5 pt-[10px] md:pb-[200px] pb-[150px]">
        <div className="relative sm:pt-[45px] pt-[25px]">
          <div className="absolute w-full top-0 z-10">
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
          <div className="relative w-[1000px] max-lg:w-full px-5 mx-auto z-20">
            <PageTitle title="Donate to this fundraiser" />
            <div className="mt-30 flex vs:flex-row flex-col gap-15 ">
              <div className="flex">
                <img src={AccountImage} alt="accuntimage" />
              </div>
              <div className="flex ns:gap-30 gap-15">
                <div className="flex flex-col gap-2.5">
                  <div className="flex item-center gap-15">
                    <div className="text-[18px] leading-6 text-green-70 font-semibold">
                      Coxhoe Athletic FC
                    </div>
                    <button className="flex justify-center items-center">
                      <HiOutlinePencil />
                    </button>
                  </div>
                  <div className="flex gap-2.5">
                    <VerticalCardLabel
                      cardLabelData={AccountLocationCardLabelData}
                    />
                    <VerticalCardLabel
                      cardLabelData={AccountClubTypeCardLabelData}
                    />
                  </div>
                </div>
                <button className="text-2xl">
                  <BsThreeDots />
                </button>
              </div>
            </div>
          </div>
          <div className="relative mt-30 z-20">
            <div className="w-full">
              <div
                id="sticky-tab"
                className={classNames(
                  "sticky-tab w-full h-[60px] sticky top-[74px] z-50",
                  "overflow-scroll"
                )}
              >
                <div className="h-full lg:w-[1000px] flex items-center gap-5 px-5 mx-auto">
                  {AccountPageTabButtonNameData.map((item, key) => {
                    return (
                      <div key={key}>
                        <TabButton
                          handleClick={() => setActive(item.value)}
                          name={item.name}
                          selectedBtnName={active}
                          value={item.value}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-[1000px] max-lg:w-full px-5 mx-auto">
                {active === "fundraising" && (
                  <div className="mt-30">
                    <PageSectionTitle
                      intro="Coxhoe Athletic FC - Varius habitasse semper convallis mi. Mi adipiscing mauris pharetra congue lorem nisl felis risus."
                      title="About"
                    />
                    <div className="xs:w-[500px]">
                      <div className="mt-14 ">
                        <Accordion title="Fundraising">
                          <div className="mt-30">
                            <MyTab tabData={FundraisingTab} />
                          </div>
                        </Accordion>
                      </div>
                      <div className="mt-30">
                        <Accordion title="Advertising">
                          <div className="mt-5">
                            <MyTab tabData={AdvertisingTab} />
                          </div>
                        </Accordion>
                      </div>
                      <div className="mt-30">
                        <Accordion title="Sponsorship">
                          <div className="mt-5">
                            <MyTab tabData={SponsorshipTab} />
                          </div>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
