import React from "react";
import classNames from "classnames";
import { VerticalCardLabel } from "UI";
import FavouriteIcon from "Assets/images/svg/button/favourite-button.svg";
import ShareIcon from "Assets/images/svg/button/share-button.svg";
import { CardType } from "types";

interface CardProps {
  cardData: CardType;
}

export const VerticalCard: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div>
      <div className="w-full flex max-2xs:flex-col h-fit">
        <div className="relative max-2xs:h-[192px] rounded-l-20 max-2xs:rounded-t-20 max-2xs:rounded-bl-[0] overflow-hidden">
          <img
            src={cardData.image}
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
        </div>
        <div
          className="relative  w-[calc(100%-209px)] max-2xs:w-full rounded-r-20 max-2xs:rounded-b-20 max-2xs:rounded-tr-[0]
         max-2xs:border-t-0 border-[1px] shadow-lg px-5 pt-5 max-2xs:pt-[30px] max-vs:pt-5 pb-5 flex flex-col gap-15 h-fit"
        >
          {cardData.vat && (
            <div className="max-2xs:absolute max-2xs:top-[-15px] ">
              <div className="flex">
                <div className="text-[14px] leading-[20px] font-semibold bg-green-10 rounded-10 py-[5px] px-[10px]">
                  ￡ {cardData.vat.toLocaleString("en-US")} inc. VAT
                </div>
              </div>
            </div>
          )}
          <div className="flex gap-2.5">
            <VerticalCardLabel cardLabelData={cardData.club} />
            <VerticalCardLabel
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
          {cardData.progress && (
            <div className="relative h-[10px] w-full rounded-10 bg-gray-200">
              <div className="absolute top-0 h-[10px] w-[calc(50%)] bg-green-50 rounded-10"></div>
            </div>
          )}
          <div className="flex xm:flex-row flex-col  gap-y-2 justify-between  items-center text-[16px] leading-[20px] font-semibold text-green-70 w-full">
            <div
              className={classNames(
                "w-full",
                cardData.progress ? "block" : "hidden"
              )}
            >
              <div className="flex gap-8 max-xm:justify-between max-vs:hidden">
                <div className="whitespace-nowrap">{cardData.fund}</div>
                <div className="whitespace-nowrap">{`￡${cardData.curFund} of ￡${cardData.oriFund}`}</div>
              </div>
              <div className="justify-between text-[16px] leading-[20px] font-semibold text-green-70 flex w-full vs:hidden">
                <div>{`￡${cardData.curFund?.toLocaleString("en-US")}`}</div>
                <div>{cardData.fund}</div>
              </div>
            </div>
            <div
              className={classNames(
                "flex  max-xm:justify-between max-2xs:justify-start flex-row max-vs:hidden gap-2.5 w-full",
                cardData.progress ? "justify-end" : "justify-start"
              )}
            >
              <VerticalCardLabel cardLabelData={cardData.date} />
              {cardData.collection && (
                <VerticalCardLabel cardLabelData={cardData.collection} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};