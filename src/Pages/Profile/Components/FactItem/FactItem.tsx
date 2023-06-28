import React from "react";

interface FactItemPropsType {
  title: string;
  value: string;
}

export const FactItem: React.FC<FactItemPropsType> = ({ title, value }) => {
  return (
    <div className="flex flex-col">
      <div className="generalSmallText text-white">{title}</div>
      <div className="text-[32px] text-green-10 font-semibold">{value}</div>
    </div>
  );
};
