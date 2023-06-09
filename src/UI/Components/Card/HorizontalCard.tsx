import React from "react";
import { CardLabel } from "UI";
import FavouriteIcon from "Assets/images/svg/button/favourite-button.svg";
import ShareIcon from "Assets/images/svg/button/share-button.svg";
import { CardType } from "types";

interface CardProps {
  cardData: CardType;
}

export const HorizontalCard: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div className="">
      <div className="max-w-[320px] h-full mx-auto">
        <div className="relative rounded-t-10">
          <img
            src={cardData.desktopimage}
            alt="card a"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 w-full p-5 flex justify-between">
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
            <div className="absolute bottom-[-12px] px-5">
              <div className="text-[14px] leading-[20px] font-semibold bg-green-10 rounded-10 py-[5px] px-[10px]">
                {cardData.vat}
              </div>
            </div>
          )}
        </div>
        <div className="rounded-b-10 boder-2 shadow-md px-5 max-md:px-2.5 pt-[20px] pb-5 flex flex-col gap-15">
          <div className="flex flex-col gap-[10px] max-sm:flex-row">
            <CardLabel
              cardLabelData={cardData.club}
              className="max-md:w-full"
            />
            <CardLabel
              cardLabelData={cardData.location}
              className="max-md:hidden max-md:w-full"
            />
          </div>
          <div className="text-[18px] leading-[24px] text-green-80 font-semibold max-2xs:line-clamp-2">
            {cardData.title}
          </div>
          <div className="text-[14px] leading-[20px] font-medium text-gray-600 max-xs:hidden">
            {cardData.description}
          </div>
          {cardData.progress && (
            <div className="relative h-[10px] w-full rounded-10 bg-gray-200">
              <div className="absolute top-0 h-[10px] w-[calc(50%)] bg-green-50 rounded-10"></div>
            </div>
          )}
          <div className="flex justify-between text-[16px] leading-[20px] font-semibold text-green-70 max-md:hidden">
            <div>{cardData.fund}</div>
            <div>{`￡${cardData.curFund?.toLocaleString(
              "en-US"
            )} of ￡${cardData.oriFund?.toLocaleString("en-US")}`}</div>
          </div>
          <div className="justify-between text-[16px] leading-[20px] font-semibold text-green-70 hidden max-md:flex">
            <div>{`￡${cardData.curFund?.toLocaleString("en-US")}`}</div>
            <div>{cardData.fund}</div>
          </div>
          <div className="flex justify-between">
            <CardLabel
              cardLabelData={cardData.date}
              className="max-md:hidden"
            />
            {cardData.collection && (
              <CardLabel
                cardLabelData={cardData.collection}
                className="max-md:hidden"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
