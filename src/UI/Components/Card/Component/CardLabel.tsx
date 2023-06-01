import React from "react";
import classNames from "classnames";
import { CardLabelType } from "types";

interface CardLabelProps {
  cardLabelData: CardLabelType;
}

export const CardLabel: React.FC<CardLabelProps> = ({ cardLabelData }) => {
  return (
    <div>
      <div className="flex">
        <div
          className={classNames(
            "rounded-10 px-[10px] py-[5px] flex gap-[5px]",
            cardLabelData.backgroundColor
          )}
        >
          <div
            className={classNames("flex items-center", cardLabelData.textColor)}
          >
            <cardLabelData.icon />
          </div>
          <div
            className={classNames(
              "text-[14px] leading-[20px] font-medium ns:text-[14px] max-ns:text-[10px]",
              cardLabelData.textColor
            )}
          >
            {cardLabelData.text}
          </div>
        </div>
      </div>
    </div>
  );
};
