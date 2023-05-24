import React, { useState } from "react";
import Arrow from "Assets/images/svg/black-arrow";
import { MenuItem } from "types";

interface DropDownList {
  title: string;
  href: string;
  children?: MenuItem[];
}
export interface DropdownProps {
  List: DropDownList;
}

export const Dropdown: React.FC<DropdownProps> = ({ List }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };
  window.onclick = function () {
    setIsShow(isShow);
  };
  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        className="bg-green-10 p-[10px] hover:bg-black hover:bg-opacity-5 
          rounded-lg text-[14px] font-semibold leading-5 text-center inline-flex items-center"
        onClick={handleClick}
      >
        {List.title}
        {List.children && <Arrow />}
      </button>
      {List.children && (
        <div>
          {/* <Arrow /> */}
          {isShow && (
            <div
              id="dropdown"
              className="absolute bg-green-70 rounded-10 w-[120px] z-50"
            >
              <div className="py-2 text-sm text-gray-700 dark:text-gray-200 divide-y  divide-gray-700">
                {List.children.map((key, index) => (
                  <div key={index}>
                    <button
                      className="block w-full text-[14px] font-semibold leading-5 px-[10px] py-[10px] 
                      hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <div className="flex justify-start">{key.title}</div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
