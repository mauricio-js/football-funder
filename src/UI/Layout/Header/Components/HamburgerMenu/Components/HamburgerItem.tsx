import React from "react";
import { useNavigate } from "react-router";
import { ButtonItemType } from "types";
import { useDispatch, useSelector } from "react-redux";
import { setShowMobileMenu } from "Data/LayoutState";

export interface HeaderButtonProps {
  Item: ButtonItemType;
}

export const HamburgerItem: React.FC<HeaderButtonProps> = ({ Item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onGoNavigate = (href: string) => {
    navigate(href);
    dispatch(setShowMobileMenu(false));
  };

  return (
    <div className="px-[10px] py-[20px]">
      <button
        className="text-white leading-[24px] font-medium text-[18px]"
        onClick={() => onGoNavigate(Item.href)}
      >
        {Item.title}
      </button>
    </div>
  );
};
