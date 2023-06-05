import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ExploreDropdownData } from "Config";
import classNames from "classnames";

export const ExploreDropdown: React.FC = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [buttonName, setButtonName] = useState<string>(
    ExploreDropdownData[0].name
  );

  return (
    <div className="relative">
      <button
        className="
                    flex items-center gal-[5px] text-[32px] ledaing-[40px] font-semibold text-green-10"
        onClick={() => setIsShowMenu(!isShowMenu)}
      >
        {buttonName}
        <div>
          <MdKeyboardArrowDown />
        </div>
      </button>
      {isShowMenu && (
        <div className="absolute top-[45px] w-[171px] rounded-10 bg-white shadow-lg border-2 overflow-hidden z-50">
          <div className="text-[14px] leading-[20px] font-semibold  divide-y divide-gray-100">
            {ExploreDropdownData.map((item, index) => {
              return (
                <div key={index}>
                  <button
                    className={classNames(
                      "p-[15px] w-full hover:bg-gray-100 flex justify-start",
                      { "text-green-10": item.name === buttonName },
                      { "text-black": item.name !== buttonName }
                    )}
                    onClick={(e) => {
                      setButtonName(item.name);
                      setIsShowMenu(false);
                    }}
                  >
                    {item.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
