import React, { useState } from "react";
import classNames from "classnames";
import {
  // AmountShow,
  CarouselCard,
  CommentList,
  UserList,
  UserCommentList,
  VerticalCardLabel,
  Template,
  Button,
  SlideBar,
} from "UI";
import {
  CrowdFundListData,
  CrowdDetailDateCardLabelData,
  CrowdDetailCommentCardLabelData,
  CrowdDetailClubCardLabelData,
  CrowdDetailLocationCardLabelData,
  UserFundListData,
  UserCommentListData,
} from "Config";
import { BiPound } from "react-icons/bi";
import ListImage from "Assets/images/crowdfunddetails/listImage.png";
import ShareBtnImgOne from "Assets/images/crowdfunddetails/share-btn-one.png";
import ShareBtnImgTwo from "Assets/images/crowdfunddetails/share-btn-two.png";
import ShareBtnImgThree from "Assets/images/crowdfunddetails/share-btn-three.png";
import ShareBtnImgFour from "Assets/images/crowdfunddetails/share-btn-four.png";
import ShareBtnImgFive from "Assets/images/crowdfunddetails/share-btn-five.png";
import FavouriteIcon from "Assets/images/svg/button/favourite-button.svg";
import ShareIcon from "Assets/images/svg/button/share-button.svg";

interface CrowdFundDetailsPropsType {
  pending: boolean;
}

export const CrowdFundDetails: React.FC<CrowdFundDetailsPropsType> = ({
  pending,
}) => {
  const [crowdFundAmount, setCrowdFundAmount] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [Amount, setAmount] = useState<number>(0);
  const handleSelectValue = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCrowdFundAmount(parseFloat(e.currentTarget.value));
    // console.log("Amount", e.currentTarget.value, crowdFundAmount);
  };

  const handleOnChange = () => {
    setAmount(crowdFundAmount);
  };

  return (
    <Template>
      <div className="pt-[60px] max-md:pt-0 md:pb-[150px] pb-[40px] bl:w-[1080px] w-full mx-auto">
        <div className="flex gap-30 items-center max-bl:hidden">
          <div className="relative rounded-20 overflow-hidden">
            <img src={ListImage} alt="listimage" />
            <div className="absolute top-0 w-full xs:px-5 px-2.5 py-5  flex justify-between">
              <div
                className={classNames(
                  "py-[5px]  rounded-10 ns:text-[14px] text-[12px] leading-[20px]  ns:px-[10px] px-2 font-medium",
                  pending
                    ? "bg-green-70 text-white"
                    : "bg-green-10 text-green-70"
                )}
              >
                {pending ? "Pending" : "Live"}
              </div>
              <div className="flex gap-[10px]">
                <button className="rounded-10">
                  <img src={FavouriteIcon} alt="favourite" />
                </button>
                <button className="rounded-10">
                  <img src={ShareIcon} alt="share" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative h-[10px] w-full rounded-10 bg-gray-200">
              <div className="absolute top-0 h-[10px] w-[calc(50%)] bg-green-50 rounded-10"></div>
            </div>
            <div className="mt-15 flex justify-between">
              <div className="buttonText text-green-70">50% of goal funded</div>
              <div className="buttonText text-green-70">
                £50,000 of £100,000
              </div>
            </div>
            <div className="mt-[5px] smallIntroText">120 Supporters</div>
            <div className="mt-30 flex gap-2.5">
              <VerticalCardLabel cardLabelData={CrowdDetailDateCardLabelData} />
              <VerticalCardLabel
                cardLabelData={CrowdDetailCommentCardLabelData}
              />
            </div>
            <div className="mt-5">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                text="Donate"
                textColor="text-green-70"
                textSize="buttonText"
                width="w-full"
                disabled={pending}
              />
            </div>
            <div className="mt-5 valueText">
              Share
              <div className="mt-2.5 flex gap-2.5">
                <button>
                  <img src={ShareBtnImgOne} alt="firstbtn" />
                </button>
                <button>
                  <img src={ShareBtnImgTwo} alt="secondbtn" />
                </button>
                <button>
                  <img src={ShareBtnImgThree} alt="threebtn" />
                </button>
                <button>
                  <img src={ShareBtnImgFour} alt="fourbtn" />
                </button>
                <button>
                  <img src={ShareBtnImgFive} alt="fivebtn" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[650px] w-full max-bl:mx-auto">
          <div className="relative md:rounded-20 md:overflow-hidden ">
            <img src={ListImage} alt="listimage" className="w-full bl:hidden" />
            <div className="absolute top-0 w-full xs:px-5 px-2.5 py-5  flex justify-between">
              <div
                className={classNames(
                  "py-[5px]  rounded-10 ns:text-[14px] text-[12px] leading-[20px]  ns:px-[10px] px-2 font-medium",
                  pending
                    ? "bg-green-70 text-white"
                    : "bg-green-10 text-green-70"
                )}
              >
                {pending ? "Pending" : "Live"}
              </div>
              <div className="flex gap-[10px]">
                <button className="rounded-10">
                  <img src={FavouriteIcon} alt="favourite" />
                </button>
                <button className="rounded-10">
                  <img src={ShareIcon} alt="share" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[670px] w-full px-5 max-bl:mx-auto">
          <div className="mt-5 valueText">
            Fundraiser
            <div className="mt-2.5 flex max-vs:flex-col gap-2.5">
              <VerticalCardLabel cardLabelData={CrowdDetailClubCardLabelData} />
              <VerticalCardLabel
                cardLabelData={CrowdDetailLocationCardLabelData}
              />
            </div>
          </div>
          <div className="mt-30 stepLabelTitle">
            Running a crowdfunding campaign for my football club
            <div className="mt-4 introText">
              The subheader for running a crowdfunding campaign for my football
              club goes here and there’s three lines of copy available to
              describe it. The subheader for running a crowdfunding campaign for
              my football club goes here and there’s three lines of copy
              available to describe it.
            </div>
          </div>
          <div className="mt-15 bl:hidden">
            <div className="relative h-[10px] w-full rounded-10 bg-gray-200">
              <div className="absolute top-0 h-[10px] w-[calc(50%)] bg-green-50 rounded-10"></div>
            </div>
            <div className="mt-15 flex justify-between">
              <div className="buttonText text-green-70">50% of goal funded</div>
              <div className="buttonText text-green-70">
                £50,000 of £100,000
              </div>
            </div>
            <div className="mt-[5px] smallIntroText">120 Supporters</div>
            <div className="mt-30 flex flex-row max-vs:flex-col gap-2.5">
              <VerticalCardLabel cardLabelData={CrowdDetailDateCardLabelData} />
              <VerticalCardLabel
                cardLabelData={CrowdDetailCommentCardLabelData}
              />
            </div>
            <div className="mt-5">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                text="Donate"
                textColor="text-green-70"
                textSize="buttonText"
                width="w-full"
                disabled={pending}
              />
            </div>
            <div className="mt-5 valueText">
              Share
              <div className="mt-2.5 flex gap-2.5">
                <button>
                  <img src={ShareBtnImgOne} alt="firstbtn" />
                </button>
                <button>
                  <img src={ShareBtnImgTwo} alt="secondbtn" />
                </button>
                <button>
                  <img src={ShareBtnImgThree} alt="threebtn" />
                </button>
                <button>
                  <img src={ShareBtnImgFour} alt="fourbtn" />
                </button>
                <button>
                  <img src={ShareBtnImgFive} alt="fivebtn" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-30 valueText ">
            Select amount
            <div className="mt-2.5 grid grid-cols-3 gap-2.5">
              <Button
                backgroundColor="bg-green-70"
                height="h-[50px]"
                otherStyle="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-10"
                text="£ 20"
                textColor="text-white"
                value={20}
                handleClick={handleSelectValue}
              />
              <Button
                backgroundColor="bg-green-70"
                height="h-[50px]"
                otherStyle="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-10"
                text="£ 40"
                textColor="text-white"
                value={40}
                handleClick={handleSelectValue}
              />
              <Button
                backgroundColor="bg-green-70"
                height="h-[50px]"
                otherStyle="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-10"
                text="£ 60"
                textColor="text-white"
                value={60}
                handleClick={handleSelectValue}
              />
            </div>
            <div className="mt-15 grid grid-cols-3 gap-2.5">
              <div className="col-span-2 relative">
                <input
                  type="text"
                  value={crowdFundAmount}
                  onChange={handleOnChange}
                  className={classNames(
                    "pl-10 pr-15 py-15 bg-white border border-1 rounded-10 h-[50px]",
                    "appearance-none focus:outline-none w-full generalText text-green-70",
                    pending && "border-opacity-50 text-opacity-50"
                  )}
                  disabled={pending}
                />
                <div className="absolute top-0 h-full flex items-center left-4 generalText text-green-10">
                  <BiPound />
                </div>
              </div>
              <div>
                <Button
                  backgroundColor="bg-green-10"
                  height="h-[50px]"
                  width="w-full"
                  text="Donate"
                  textColor="text-green-70"
                  disabled={pending}
                />
              </div>
            </div>
          </div>
          <div className="mt-30 valueText ">
            About the fundraiser
            <div className="mt-2.5 introText">
              The subheader for running a crowdfunding campaign for my football
              club goes here and there’s three lines of copy available to
              describe it.
              <br />
              <br /> Sed aliquam, turpis ut varius accumsan, purus felis
              convallis nibh, eu imperdiet est quam at nisi. Pellentesque erat
              leo, varius ut tristique quis, viverra vel lacus. Nulla placerat a
              erat in pharetra. Nunc aliquet ornare viverra.
              <br />
              <br /> Nulla pellentesque commodo suscipit. Ut sem ante, viverra
              vitae diam at, malesuada suscipit ipsum. Morbi hendrerit, nunc at
              pharetra interdum, tellus diam feugiat elit, non sagittis mi nisl
              ac ex. Ut nec leo sit amet urna fermentum lacinia ac in lacus. Sed
              quam odio, pretium in tellus a, tincidunt volutpat ante.
              <br />
              <br /> Vivamus venenatis nulla volutpat, ornare velit id, semper
              purus. Integer porta iaculis cursus. Maecenas eu porta tortor.
            </div>
          </div>
          <div className="mt-30 valueText ">
            Rewards
            <div className="mt-2.5 bg-gray-20 rounded-10 p-2.5">
              <div className="valueText">
                Rangers 2020/21 Small Batch Single Malt
              </div>
              <div className="mt-15 generalSmallText text-green-70 flex gap-2.5">
                <div>Donate £30 or more</div>
                <div className="text-gray-500">|</div>
                <div>10 available</div>
              </div>
              <div className="mt-15 text-[12px] leading-[16px] font-medium text-gray-500 ">
                A small batch single malt, selected by Rangers Football Club for
                the 2020/21 Season. Bottled by Douglas Laing & Co. Ltd. Dispatch
                expected by 31st May 2023
              </div>
            </div>
            <div className="mt-2.5">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                text="Select reward"
                textColor="text-green-70"
                textSize="buttonText"
                width="w-full"
                disabled={pending}
              />
            </div>
          </div>
          <div className="md:mt-12 mt-30 valueText">
            Top 5 Supporters
            <div className="mt-2.5 flex flex-col gap-2.5">
              {UserFundListData.map((data, index) => {
                return (
                  <UserList
                    key={index}
                    fund={data.fund}
                    name={data.name}
                    startDay={data.startDay}
                  />
                );
              })}
            </div>
            <div className="mt-5 linkTextButton">View all supporters</div>
          </div>
          <div className="mt-30 valueText">
            Comments
            <div className="mt-2.5 flex flex-col gap-2.5">
              {UserCommentListData.map((data, index) => {
                return (
                  <UserCommentList
                    key={index}
                    Icon={data.Icon}
                    chat={data.chat}
                    commentNum={data.commentNum}
                    name={data.name}
                    startDay={data.startDay}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-2.5 valueText">
            Leave a comment
            <div className="mt-4">
              <CommentList />
            </div>
          </div>
          <div className="mt-30">
            <div className="flex justify-between items-center">
              <div className="generalTitle">Related</div>
              <div className="buttonText text-green-70">View all</div>
            </div>
            <div className="mt-5">
              <SlideBar
                data={CrowdFundListData}
                carouselContent={CarouselCard}
              />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
