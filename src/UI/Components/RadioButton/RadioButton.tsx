import React, { useState } from "react";
import classNames from "classnames";
import { SelectDataType } from "types";

interface RadioButtonProps {
  List: SelectDataType;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ List }) => {
  const [selectStatus, setSelectStatus] = useState<Boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(List.value);
  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div
      className="flex justify-between items-center"
      onClick={() => setSelectStatus(!selectStatus)}
    >
      <label id="label1" className="text-base font-normal text-green-70">
        {List.title}
      </label>
      <div className="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
        <input
          aria-labelledby="label1"
          type="radio"
          name="radio"
          value={List.value}
          checked={selectedOption === List.value}
          onChange={(e) => handleOptionChange(e)}
          className="
            checkbox appearance-none focus:opacity-100 rounded-full 
            border  border-gray-300 absolute cursor-pointer w-full h-full checked:border-none"
        />
        <div
          className={classNames(
            "check-icon hidden border-[5px] border-green-10 rounded-full w-full h-full z-1"
          )}
        ></div>
      </div>
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
