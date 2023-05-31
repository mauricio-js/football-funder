import React, { useState } from "react";
import classNames from "classnames";
import { IoIosArrowDown } from "react-icons/io";
import { OrganisationFilterData } from "./exploreConfig";
import { Checkbox } from "./Checkbox";

export const OrganisationForm: React.FC = () => {
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
          Organisation
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
          {OrganisationFilterData.map((item, index) => {
            return (
              <div key={index}>
                <Checkbox List={item} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
