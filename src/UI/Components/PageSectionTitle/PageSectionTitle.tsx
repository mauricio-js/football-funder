import React from "react";
import { PageSectionTitleType } from "types";
export const PageSectionTitle: React.FC<PageSectionTitleType> = ({
  title,
  intro,
}) => {
  return (
    <div className="mt-30 flex flex-col gap-[10px]">
      <div className="text-[16px] leading-[20px] font-semibold">{title}</div>
      <div className="introText">{intro}</div>
    </div>
  );
};
