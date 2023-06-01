import React, { useState } from "react";
import classNames from "classnames";
import { SelectDataType } from "types";
import { BsCheckLg } from "react-icons/bs";

interface FilterDataProps {
  List: SelectDataType;
}

export const Checkbox: React.FC<FilterDataProps> = ({ List }) => {
  const [selectStatus, setSelectStatus] = useState<boolean>(false);
  return (
    <div
      className="flex justify-between items-center"
      onClick={() => setSelectStatus(!selectStatus)}
    >
      <label id="label1" className="text-base font-normal text-green-70">
        {List.title}
      </label>
      <div
        className="bg-white rounded-full w-5 h-5 flex 
        flex-shrink-0 justify-center items-center relative"
      >
        <input
          aria-labelledby="label1"
          type="checkbox"
          name="checkbox"
          value={List.value}
          className="checkbox appearance-none focus:opacity-100 border rounded-md 
           border-gray-300 absolute cursor-pointer w-full h-full checked:border-none"
        />
        <div
          className={classNames(
            "check-icon bg-green-10 rounded-md w-full h-full z-1 justify-center items-center text-semibold",
            selectStatus ? "flex" : "hidden"
          )}
        >
          <BsCheckLg />
        </div>
      </div>
    </div>
  );
};
