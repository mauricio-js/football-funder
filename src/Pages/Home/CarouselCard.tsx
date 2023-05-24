import React from "react";
import ShareIcon from "Assets/images/share-button.png";
import FavouriteIcon from "Assets/images/favourite-button.png";
import { CarouselCardType } from "types";

export interface CarouselProps {
  Item: CarouselCardType;
}

export const CarouselCard: React.FC<CarouselProps> = ({ Item }) => {
  return (
    <div className="relative w-[320px] h-[435px] bg-white rounded-[25px] overflow-hidden mx-auto">
      <img src={Item.img} alt="first-carousel-card.png" />
      <div className="absolute top-0 p-5 w-full h-full">
        <div className="grid h-full content-between">
          <div className="flex justify-between">
            <button
              className="bg-green-10 text-[14px] leading-[20px] 
              font-medium rounded-10 px-[12px] py-[5px]"
            >
              {Item.label}
            </button>
            <div className="flex gap-[10px]">
              <button>
                <img src={FavouriteIcon} alt="favourite-icon.png" />
              </button>
              <button>
                <img src={ShareIcon} alt="share-btton.png" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-[15px]">
            <div className="text-green-40 font-semibold leading-[24px] text-[18px]">
              {Item.title}
            </div>
            <div className="font-medium text-gray-400 text-[14px] leading-[20px]">
              {Item.description}
            </div>
            <div className="relative h-[10px] w-full rounded-10 bg-gray-200">
              <div className="absolute top-0 h-[10px] w-[calc(50%)] bg-green-50 rounded-10"></div>
            </div>
            <div
              className="flex justify-between font-semibold 
              text-[14px] leading-[20px] text-green-70"
            >
              <div>{Item.success}</div>
              <div>{Item.cost}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
