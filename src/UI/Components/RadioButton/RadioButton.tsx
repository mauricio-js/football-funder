import React from "react";
import classNames from "classnames";
import { RadioButtonType } from "types";

export const RadioButton: React.FC<RadioButtonType> = (props) => {
  return (
    <div className={classNames("flex items-center", props.classes)}>
      <label
        id="label1"
        className="text-base font-normal text-green-70"
        onClick={props.onSelect}
      >
        {props.name}
      </label>
      <div className="bg-white rounded-full w-5 h-5 flex justify-center items-center relative">
        <input
          type="radio"
          value={props.value}
          checked={props.checked}
          onChange={props.onSelect}
          className="
            checkbox appearance-none focus:opacity-100 rounded-full 
            border  border-gray-300 absolute cursor-pointer w-full h-full checked:border-none"
        />
        <div
          className={classNames(
            "check-icon hidden border-[5px] border-green-10 rounded-full w-full h-full"
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
