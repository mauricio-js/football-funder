import React, { useState } from "react";
import classNames from "classnames";
import { ContactPhoneNumber } from "Config";
import Arrow from "Assets/images/svg/button/black-arrow";

export const DropdownInput: React.FC = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [country, setCountry] = useState<string>(ContactPhoneNumber[0].country);

  const [phoneNumber, setPhoneNumber] = useState<string>(
    ContactPhoneNumber[0].randomNumber
  );
  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          type="text"
          className={classNames(
            "relative peer m-0 block bg-white w-full rounded-10",
            "generalText pl-16 pt-4 h-[58px]",
            "border-[1px] border-gray-300 focus:outline-none"
          )}
          id="floatingInput"
          placeholder={phoneNumber}
        />
        <div className="absolute top-0 h-full px-4 flex items-center">
          <div className="relative h-full">
            <button
              className="h-full generalText text-gray-500"
              onClick={() => {
                setIsShowMenu(!isShowMenu);
              }}
            >
              <div className="flex">
                {country}
                <Arrow />
              </div>
            </button>
            {isShowMenu && (
              <div className="absolute w-20 -left-4 top-16 rounded-md bg-white shadow-lg border-[1px] overflow-hidden z-50">
                <div className="text-[14px] leading-[20px] font-semibold  divide-y divide-gray-100">
                  {ContactPhoneNumber.map((item, index) => {
                    return (
                      <button
                        key={index}
                        className="py-2 px-3 w-full hover:bg-gray-100 flex justify-start"
                        onClick={() => {
                          setCountry(item.country);
                          setIsShowMenu(false);
                          setPhoneNumber(item.randomNumber);
                        }}
                      >
                        <div className="generalSmallText">{item.country}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <label
          htmlFor="floatingInput"
          className={classNames(
            "pointer-events-none absolute ml-16 top-2 origin-[0_0] text-xs",
            "after:content-['*'] after:ml-1 after:text-green-10"
          )}
        >
          Phone
        </label>
      </div>
    </div>
  );
};
