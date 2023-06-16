import React from "react";
import classNames from "classnames";
import { RadioButtonType } from "types";
import { BsCheckLg } from "react-icons/bs";

export const RadioButton: React.FC<RadioButtonType> = ({
  checkboxStyle,
  checked,
  name,
  onSelect,
  value,
  classes,
  textStyle,
  disabled,
}) => {
  return (
    <div className={classNames("flex items-center", classes)}>
      <label
        id="label1"
        className={classNames("font-normal text-green-70", textStyle)}
        onClick={onSelect}
      >
        {name}
      </label>
      <div className="bg-white rounded-full w-5 h-5 flex justify-center items-center relative">
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={onSelect}
          className={classNames(
            "appearance-none focus:opacity-100 ",
            "border border-gray-300 absolute cursor-pointer w-full h-full checked:border-none",
            checkboxStyle ? "rounded-md" : "rounded-full"
          )}
        />
        {!checkboxStyle ? (
          <div
            className={classNames(
              " border-[5px] border-green-10 rounded-full w-full h-full",
              checked ? "flex" : "hidden"
            )}
          ></div>
        ) : (
          <div
            className={classNames(
              " bg-green-10 rounded-md w-full h-full z-1 justify-center items-center text-semibold",
              checked ? "flex" : "hidden"
            )}
          >
            <BsCheckLg />
          </div>
        )}
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
