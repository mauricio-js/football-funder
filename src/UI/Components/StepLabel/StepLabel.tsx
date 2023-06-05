import React from "react";
import { StepLabelType } from "types";

export const StepLabel: React.FC<StepLabelType> = (props) => {
  return (
    <div className="rounded-10 bg-gray-100 px-[14px] py-[10px]">
      <div className="introText">{props.step}</div>
      <div className="stepLabelTitle">{props.title}</div>
    </div>
  );
};
