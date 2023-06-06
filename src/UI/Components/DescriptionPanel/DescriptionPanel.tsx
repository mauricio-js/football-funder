import React from "react";
import classNames from "classnames";
import { DescriptionPanelType } from "types";
export const DescriptionPanel: React.FC<DescriptionPanelType> = ({
  classes,
  introText1,
  introText2,
}) => {
  return (
    <div
      className={classNames(
        "rounded-10 border-2 border-gray-300 px-[15px] pb-[15px] pt-[10px]",
        classes
      )}
    >
      <span className="text-[10px] leading-[14px] font-medium">
        Description
      </span>
      <span className="text-green-10">*</span>
      <div className="text-[16px] leading-[22px] text-green-70">
        {introText1}
      </div>
      <div className="text-[16px] leading-[22px] text-green-70 mt-[20px]">
        {introText2}
      </div>
    </div>
  );
};
