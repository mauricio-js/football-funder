import React, { useState } from "react";
import classNames from "classnames";

export const SortForm: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<boolean>(false);

  return (
    <div>
      <button
        className="w-full flex justify-between items-center"
        onClick={() => setSelectedStatus(!selectedStatus)}
      >
        <div className="text-[16px] leading-[22px] font-medium">Promoted</div>
        <div
          className={classNames(
            "rounded-20",
            selectedStatus
              ? "w-[10px] h-[10px] outline outline-[5px] mr-[5px] outline-green-10"
              : "w-[20px] h-[20px] border-1 border-gray-400 border"
          )}
        ></div>
      </button>
      <input type="radio" id="male" value="male" name="gender" checked />
      <label
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 cursor-pointer rounded-l"
        htmlFor="male"
      >
        Male
      </label>
    </div>
  );
};
