import React from "react";
import classNames from "classnames";
import { PageSectionTitleType } from "types";
export const PageSectionTitle: React.FC<PageSectionTitleType> = ({
  title,
  intro,
}) => {
  return (
    <div className={classNames("flex flex-col", intro && "gap-[10px]")}>
      <div className="text-[16px] leading-[20px] font-semibold">{title}</div>
      <div className="introText">{intro}</div>
    </div>
  );
};
