import React, { useState } from "react";
import { SortByData } from "./exploreConfig";
import { RadioButton } from "./RadioButton";
import classNames from "classnames";
import { IoIosArrowDown } from "react-icons/io";

export const SortForm: React.FC = () => {
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
          {/* <div className="flex justify-between items-center">
            <label id="label1" className="text-base font-normal text-green-70">
              Promoted
            </label>
            <div className="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label1"
                type="radio"
                name="radio"
                className="checkbox appearance-none focus:opacity-100 border rounded-full border-gray-300 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-[5px] border-green-10 rounded-full w-full h-full z-1"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label id="label1" className="text-base font-normal text-green-70">
              Newest (£)
            </label>
            <div className="bg-white  rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label1"
                type="radio"
                name="radio"
                className="checkbox appearance-none focus:opacity-100 border rounded-full border-gray-300 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-[5px] border-green-10 rounded-full w-full h-full z-1"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label id="label1" className="text-base font-normal text-green-70">
              Oldest (£)
            </label>
            <div className="bg-white  rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label1"
                type="radio"
                name="radio"
                className="checkbox appearance-none focus:opacity-100 border rounded-full border-gray-300 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-[5px] border-green-10 rounded-full w-full h-full z-1"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label id="label1" className="text-base font-normal text-green-70">
              High to Low
            </label>
            <div className="bg-white  rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label1"
                type="radio"
                name="radio"
                className="checkbox appearance-none focus:opacity-100 border rounded-full border-gray-300 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-[5px] border-green-10 rounded-full w-full h-full z-1"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label id="label1" className="text-base font-normal text-green-70">
              Low to High
            </label>
            <div className="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label1"
                type="radio"
                name="radio"
                className="checkbox appearance-none focus:opacity-100 border rounded-full border-gray-300 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-[5px] border-green-10 rounded-full w-full h-full z-1"></div>
            </div>
          </div> */}
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
