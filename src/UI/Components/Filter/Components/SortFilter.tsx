import React, { useState } from "react";
import { SortByData } from "Config/exploreConfig";
import { RadioButton } from "UI";
import classNames from "classnames";
import { IoIosArrowDown } from "react-icons/io";

export const SortFilter: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="py-5">
      <div
        className="flex justify-between items-center"
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className="text-[18px] leading-6 font-semibold text-green-70 cursor-pointer">
          Sort by
        </div>
        <div
          className={classNames(
            "text-[24px]",
            showMenu ? "rotate-0" : "rotate-90"
          )}
        >
          <IoIosArrowDown />
        </div>
      </div>
      {showMenu && (
        <div className="mt-5 flex flex-col gap-5">
          {SortByData.map((index, key) => {
            return (
              <div key={key}>
                <RadioButton List={index} />
              </div>
            );
          })}
        </div>
      )}
      {/* Move the following styles to your CSS file */}
      <style>
        {`
        .checkbox:checked + .check-icon {
          display: flex;
        }
      `}
      </style>
    </div>
  );
};
