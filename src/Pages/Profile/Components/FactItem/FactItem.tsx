import React, { useContext } from "react";

import { ColorContext } from "Lib";

interface FactItemPropsType {
  title: string;
  value: string;
}

export const FactItem: React.FC<FactItemPropsType> = ({ title, value }) => {
  const { primaryColor } = useContext(ColorContext)!;

  return (
    <div className="flex flex-col">
      <div className="generalSmallText text-white">{title}</div>
      <div
        className="text-[32px] font-semibold"
        style={{ color: primaryColor }}
      >
        {value}
      </div>
    </div>
  );
};
