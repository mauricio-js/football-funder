import React from "react";
import { CategoryTagType } from "types";
export const CategoryTag: React.FC<CategoryTagType> = (props) => {
  return (
    <div className="mt-[30px] flex flex-col gap-[10px]">
      <div className="text-[16px] leading-[20px] font-semibold">
        {props.title}
      </div>
      <div className="introText">{props.intro}</div>
    </div>
  );
};
