import React from "react";
import classNames from "classnames";
import { CategoryButtonType } from "types";

export const CategoryButton: React.FC<CategoryButtonType> = ({
  checked,
  label,
  onSelect,
  value,
}) => {
  return (
    <div className="flex justify-center peer" onClick={onSelect}>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onSelect}
        className="appearance-none"
      />
      <label
        className={classNames(
          "cursor-pointer select-none rounded-xl px-[50px] max-md:px-8 py-[15px]",
          "text-green-70 text-[14x] leading-[20px] font-semibold",
          "border-[1px] border-gray-300",
          checked && "bg-green-10"
        )}
      >
        {label}
      </label>
    </div>
  );
};
