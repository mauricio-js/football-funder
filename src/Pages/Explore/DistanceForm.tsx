import React, { useState } from "react";
import classNames from "classnames";
import { IoIosArrowDown } from "react-icons/io";
import { DistanceData } from "./exploreConfig";
import { DistanceInput } from "./DistanceInput";

export const DistanceForm: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="py-5">
      <div
        className="flex justify-between items-center"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <div className="text-[18px] leading-6 font-semibold text-green-70 cursor-pointer">
          Distance
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
        <div className="mt-5 flex gap-[10px]">
          {DistanceData.map((index, key) => {
            return (
              <div key={key} className="w-[180px] h-[54px]">
                <DistanceInput List={index} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
