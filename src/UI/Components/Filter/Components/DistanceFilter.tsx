import React, { useState } from "react";
import classNames from "classnames";
import { IoIosArrowDown } from "react-icons/io";
import { DistanceInputFormData } from "Config";
import { Input } from "UI";

export const DistanceFilter: React.FC = () => {
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
          {DistanceInputFormData.map((index, key) => {
            return (
              <div key={key} className="w-[180px] h-[54px]">
                <Input data={index} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
