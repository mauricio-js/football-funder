import React from "react";
import { useNavigate } from "react-router";
import { ButtonItemType } from "types";

export interface HeaderButtonProps {
  Item: ButtonItemType;
}

export const HamburgerItem: React.FC<HeaderButtonProps> = ({ Item }) => {
  const navigate = useNavigate();
  return (
    <div className="px-[10px] py-[20px]">
      <button
        className="text-white leading-[24px] font-medium text-[18px]"
        onClick={() => navigate(Item.href)}
      >
        {Item.title}
      </button>
    </div>
  );
};
