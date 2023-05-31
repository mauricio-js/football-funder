import React from "react";
import { useNavigate } from "react-router";
import { MenuItemType } from "types";

export interface ListItemProps {
  List: MenuItemType;
}

export const HamburgerListItem: React.FC<ListItemProps> = ({ List }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-[10px] py-[20px]">
        <button className="text-white leading-[24px] font-medium text-[18px]">
          {List.title}
        </button>
        <div className="mt-[20px] flex flex-col gap-[20px]">
          {List.children.map((element, index) => (
            <div key={index}>
              <button
                className="text-green-10 font-medium text-[16px] leading-[22px]"
                onClick={() => navigate(element.href)}
              >
                {element.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
