import React from "react";
import classNames from "classnames";
import { BsCheckLg } from "react-icons/bs";

interface CheckBoxProps {
  align?: string;
  checked: boolean;
  label: string;
  onSelect: (value: string) => void;
  textClass?: string;
  value: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  align,
  checked,
  label,
  onSelect,
  textClass,
  value,
}) => {
  return (
    <div className={classNames("flex justify-between items-center", align)}>
      <label
        id="label1"
        className={classNames("flex-1", textClass)}
        onClick={() => onSelect(value)}
      >
        {label}
      </label>
      <div
        className="bg-white rounded-full w-5 h-5 flex 
         justify-center items-center relative"
      >
        <input
          aria-labelledby="label1"
          type="checkbox"
          name="checkbox"
          checked={checked}
          onChange={() => onSelect(value)}
          className="checkbox appearance-none focus:opacity-100 border rounded-md 
           border-gray-300 absolute cursor-pointer w-full h-full checked:border-none"
        />
        <div
          className={classNames(
            "check-icon bg-green-10 rounded-md w-full h-full z-1 justify-center items-center text-semibold",
            checked ? "flex" : "hidden"
          )}
        >
          <BsCheckLg />
        </div>
      </div>
    </div>
  );
};
