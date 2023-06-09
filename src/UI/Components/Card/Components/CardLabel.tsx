import React from "react";
import classNames from "classnames";
import cn from "classnames";
import { CardLabelType } from "types";

interface CardLabelProps {
  cardLabelData: CardLabelType;
  className?: string;
}

export const CardLabel: React.FC<CardLabelProps> = ({
  cardLabelData,
  className,
}) => {
  return (
    <div className={cn("flex", className)}>
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
            "text-[14px] leading-[20px] font-medium ns:text-[14px] max-vs:text-[10px] whitespace-nowrap",
            cardLabelData.textColor
          )}
        >
          {cardLabelData.text}
        </div>
      </div>
    </div>
  );
};
