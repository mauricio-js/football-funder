import React from "react";
import { useNavigate } from "react-router";
import { ButtonItemType } from "types";

interface HeaderButtonProps {
  List: ButtonItemType;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({ List }) => {
  const navigate = useNavigate();
  const redirectUrl = () => {
    navigate(List.href);
  };
  return (
    <button
      id="HeaderButton"
      className="bg-green-10 p-[10px] hover:bg-black hover:bg-opacity-5 
          rounded-lg text-[14px] font-semibold leading-5 text-center inline-flex items-center"
      onClick={redirectUrl}
    >
      {List.title}
    </button>
  );
};
