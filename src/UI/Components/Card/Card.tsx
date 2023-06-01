import React from "react";
import { CardLabel } from "UI";
import FavouriteIcon from "Assets/images/svg/button/favourite-button.svg";
import ShareIcon from "Assets/images/svg/button/share-button.svg";
import { CardType } from "types";

interface CardProps {
  cardData: CardType;
}

export const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div className="">
      <div className="w-[320px] h-full max-md:hidden">
        <div className="relative h-[194px] rounded-t-10">
          <img
            src={cardData.desktopimage}
            alt="card a"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 w-full p-[20px] flex justify-between">
            <div className="px-[10px] py-[5px] bg-green-10 rounded-10 text-[14px] font-medium">
              {cardData.broadcastingType}
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
          {cardData.vat && (
            <div className="absolute bottom-[-12px] px-[20px]">
              <div className="text-[14px] leading-[20px] font-semibold bg-green-10 rounded-10 py-[5px] px-[10px]">
                {cardData.vat}
              </div>
            </div>
          )}
        </div>
        <div className="h-[calc(100%-194px)] rounded-b-10 boder-2 shadow-md px-[20px] pt-[20px] pb-[20px] flex flex-col gap-[15px]">
          <div className="flex flex-col gap-[10px] max-sm:flex-row">
            <CardLabel cardLabelData={cardData.club} />
            <CardLabel cardLabelData={cardData.location} />
          </div>
          <div className="text-[18px] leading-[24px] text-green-80 font-semibold">
            {cardData.title}
          </div>
          <div className="text-[14px] leading-[20px] font-medium text-gray-600">
            {cardData.description}
          </div>
          {cardData.progress && (
            <div className="relative h-[10px] w-full rounded-10 bg-gray-200">
              <div className="absolute top-0 h-[10px] w-[calc(50%)] bg-green-50 rounded-10"></div>
            </div>
          )}
          <div className="flex justify-between text-[16px] leading-[20px] font-semibold text-green-70">
            <div>{cardData.fund}</div>
            <div>{cardData.status}</div>
          </div>
          <div className="flex justify-between">
            <CardLabel cardLabelData={cardData.date} />
            {cardData.collection && (
              <CardLabel cardLabelData={cardData.collection} />
            )}
          </div>
        </div>
      </div>
      <div className="relative w-[390px]  max-ns:w-full md:hidden">
        <div className="relative rounded-t-20">
          <div className="h-[194px] rounded-t-20 overflow-hidden">
            <img
              src={cardData.mobileimage}
              alt="card a"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute top-0 w-full p-[20px] flex justify-between">
            <div className="px-[10px] py-[5px] bg-green-10 rounded-10 text-[14px] font-medium">
              {cardData.broadcastingType}
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
          <div className="absolute bottom-[-14px]">
            {cardData.vat && (
              <div className="px-[20px]">
                <div className="relative text-[14px] leading-[20px] font-semibold bg-green-10 rounded-10 py-[5px] px-[10px]">
                  {cardData.vat}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="rounded-b-10 boder-2 shadow-md px-[20px] pt-[20px] pb-[20px] flex flex-col gap-[15px]">
          <div className="flex gap-[10px]">
            <CardLabel cardLabelData={cardData.club} />
            <CardLabel cardLabelData={cardData.location} />
          </div>
          <div className="text-[18px] leading-[24px] text-green-80 font-semibold">
            {cardData.title}
          </div>
          <div className="text-[14px] leading-[20px] font-medium text-gray-600">
            {cardData.description}
          </div>
          {cardData.progress && (
            <div className="relative h-[10px] w-full rounded-10 bg-gray-200">
              <div className="absolute top-0 h-[10px] w-[calc(50%)] bg-green-50 rounded-10"></div>
            </div>
          )}
          <div className="flex justify-between text-[16px] leading-[20px] font-semibold max-vs:text-[14px] text-green-70">
            <div>{cardData.fund}</div>
            <div>{cardData.status}</div>
          </div>
          <div className="flex gap-[10px]">
            <CardLabel cardLabelData={cardData.date} />
            {cardData.collection && (
              <CardLabel cardLabelData={cardData.collection} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
