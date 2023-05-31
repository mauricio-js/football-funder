import React, { useState } from "react";
import classNames from "classnames";
import { IoIosArrowDown } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";

export const TypeForm: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="py-5">
      <div className="flex justify-between items-center">
        <div
          className="text-[18px] leading-6 font-semibold text-green-70 cursor-pointer"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          Type
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
          <div className="flex justify-between items-center">
            <label id="label1" className="text-base font-normal text-green-70">
              All
            </label>
            <div className="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label1"
                type="checkbox"
                name="checkbox"
                className="checkbox appearance-none focus:opacity-100 border rounded-md border-gray-300 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden bg-green-10 rounded-md w-full h-full z-1 justify-center items-center text-semibold">
                <BsCheckLg />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label id="label1" className="text-base font-normal text-green-70">
              Fundraiser
            </label>
            <div className="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label1"
                type="checkbox"
                name="checkbox"
                className="checkbox appearance-none focus:opacity-100 border rounded-md border-gray-300 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden bg-green-10 rounded-md w-full h-full z-1 justify-center items-center text-semibold">
                <BsCheckLg />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label id="label1" className="text-base font-normal text-green-70">
              Advertising
            </label>
            <div className="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label1"
                type="checkbox"
                name="checkbox"
                className="checkbox appearance-none focus:opacity-100 border rounded-md border-gray-300 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden bg-green-10 rounded-md w-full h-full z-1 justify-center items-center text-semibold">
                <BsCheckLg />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label id="label1" className="text-base font-normal text-green-70">
              Sponsorship
            </label>
            <div className="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label1"
                type="checkbox"
                name="checkbox"
                className="checkbox appearance-none focus:opacity-100 border rounded-md border-gray-300 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden bg-green-10 rounded-md w-full h-full z-1 justify-center items-center text-semibold">
                <BsCheckLg />
              </div>
            </div>
          </div>
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
