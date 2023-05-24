import React from "react";
import classname from "classnames";
import { CardDataType } from "types/homeType";

interface Props {
  value: CardDataType[];
  title: string;
  textColor: string;
}

export const DropdownMenuCard: React.FC<Props> = ({
  value,
  title,
  textColor,
}) => {
  return (
    <div className="font-semibold text-3xl lg:w-[1000px] w-full mx-auto z-30">
      <div
        className={classname(
          "max-bl:w-[490px]",
          "w-[390px]",
          "max-lg:mx-auto",
          {
            [textColor]: textColor,
          }
        )}
      >
        {title}
      </div>
      <div className="mt-[20px] flex gap-5 max-lg:flex-col">
        {value.map((item, index) => {
          return (
            <div
              key={index}
              className="relative max-bl:mx-auto rounded-20 overflow-hidden z-30"
            >
              <img
                src={item.backgroundImage}
                className="h-[224px] object-cover"
                alt=""
              />
              <div className="absolute top-0 w-full h-full px-[25px] py-[20px] max-xs:px-[20px]">
                <div className="text-white font-semibold text-[21px]  leading-[28px]">
                  {item.title}
                </div>
                <div className="mt-[10px] w-[240px] text-green-10 font-medium text-[16px] leading-[22px]">
                  {item.description}
                </div>
                <div className="mt-9 max-xs:mt-5">
                  <button
                    className="rounded-10 bg-white text-black 
                    font-semibold text-base xs:w-[138px] max-xs:w-[130px] h-[42px]"
                  >
                    {item.buttonName}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
