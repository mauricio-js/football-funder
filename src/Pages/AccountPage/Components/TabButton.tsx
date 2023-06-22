import React from "react";
import classNames from "classnames";
import { AccountPageTabButtonType } from "types";

export const TabButton: React.FC<AccountPageTabButtonType> = ({
  handleClick,
  name,
  selectedBtnName,
  value,
}) => {
  return (
    <button
      className={classNames(
        "generalText cursor-pointer transition-colors duration-200 py-[5px]",
        value === selectedBtnName
          ? "text-black border-b-2 border-green-10 font-semibold"
          : "text-gray-10 hover:text-gray-800"
      )}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};
