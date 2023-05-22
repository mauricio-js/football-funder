import React, { useState } from "react";
import Arrow from "Assets/images/svg/black-arrow";

interface DropDownList {
  id?: number;
  item?: string;
}
interface Props {
  List: DropDownList[];
  Name: string;
}

export const Dropdown: React.FC<Props> = ({ List, Name }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        className="bg-green-10 p-[10px] hover:bg-black hover:bg-opacity-5 rounded-lg text-[14px] font-semibold leading-5 text-center inline-flex items-center"
        type="button"
        onClick={handleClick}
      >
        {Name}
        <Arrow />
      </button>
      {/* Dropdown menu */}
      {isShow && (
        <div
          id="dropdown"
          className="absolute bg-green-70 rounded-10 w-[120px] z-50"
        >
          <div className="py-2 text-sm text-gray-700 dark:text-gray-200 divide-y  divide-gray-700">
            {List.map((item, index) => {
              return (
                <div className="block text-[14px] font-semibold leading-5 px-[10px] py-[10px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {item.item}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
