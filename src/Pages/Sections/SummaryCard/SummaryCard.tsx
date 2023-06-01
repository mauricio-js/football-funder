import React from "react";
import classname from "classnames";
import { CardDataType } from "types/homePageType";

interface Props {
  value: CardDataType[];
  title: string;
  textColor: string;
  descritpion?: string;
}

export const SummaryCard: React.FC<Props> = ({
  value,
  title,
  textColor,
  descritpion,
}) => {
  return (
    <div className="font-semibold text-[32px] leading-[26px] lg:w-[1000px] max-lg:max-w-[490px] w-full mx-auto z-30">
      <div
        className={classname("w-full text-left", {
          [textColor]: textColor,
        })}
      >
        {title}
      </div>
      {descritpion && (
        <div className="mt-[15px] text-[16px] leading-[22px] font-medium text-green-10">
          {descritpion}
        </div>
      )}
      <div className="mt-[20px] flex gap-5 max-lg:flex-col">
        {value.map((item, index) => {
          return (
            <div key={index} className="relative z-30 ">
              <img
                src={item.backgroundImage}
                className="h-[224px] object-fit"
                alt=""
              />
              <div className="absolute top-0 w-full h-full px-[25px] py-[20px] max-xs:px-[20px]">
                <div className="text-white font-semibold text-[21px]  leading-[28px]">
                  {item.title}
                </div>
                <div className="mt-[10px] w-[240px] text-green-10 font-medium text-[16px] leading-[22px]">
                  {item.description}
                </div>
                <div className="mt-9">
                  <button
                    className="rounded-10 bg-white text-black 
                    font-semibold text-[16px] leading-[22px] px-[25px] h-[42px]"
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
