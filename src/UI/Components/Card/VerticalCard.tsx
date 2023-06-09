import React from "react";
import { CardLabel } from "UI";
import FavouriteIcon from "Assets/images/svg/button/favourite-button.svg";
import ShareIcon from "Assets/images/svg/button/share-button.svg";
import { CardType } from "types";

interface CardProps {
  cardData: CardType;
}

export const VerticalCard: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div>
      <div className="w-full flex max-2xs:flex-col h-full">
        <div className="relative max-2xs:h-[192px] rounded-l-20 max-2xs:rounded-t-20 max-2xs:rounded-bl-[0] overflow-hidden">
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
        <div className="w-[calc(100%-209px)] max-2xs:w-full rounded-r-20 max-2xs:rounded-b-20 max-2xs:rounded-tr-[0] max-2xs:border-t-0 border-[1px] shadow-lg px-5 pt-15 pb-5 flex flex-col gap-15">
          <div className="flex gap-2.5">
            <CardLabel cardLabelData={cardData.club} />
            <CardLabel
              cardLabelData={cardData.location}
              className="max-ns:hidden"
            />
          </div>
          <div className="text-[18px] leading-[24px] text-green-80 font-semibold max-2xs:line-clamp-2">
            {cardData.title}
          </div>
          <div className="text-[14px] leading-[20px] font-medium text-gray-600 max-2xs:line-clamp-2">
            {cardData.description}
          </div>
          <div>
            {cardData.progress && (
              <div className="relative h-[10px] w-full rounded-10 bg-gray-200">
                <div className="absolute top-0 h-[10px] w-[calc(50%)] bg-green-50 rounded-10"></div>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-y-2 justify-between  items-center text-[16px] leading-[20px] font-semibold text-green-70 w-full">
            <div className="flex justify-between gap-4 w-full">
              <div className="whitespace-nowrap">{cardData.fund}</div>
              <div className="whitespace-nowrap">{`￡${cardData.curFund} of ￡${cardData.oriFund}`}</div>
            </div>
            <div className="flex justify-between max-ns:justify-start    gap-4 w-full">
              <CardLabel cardLabelData={cardData.date} />
              {cardData.collection && (
                <CardLabel cardLabelData={cardData.collection} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
