import React from "react";
import classNames from "classnames";
import classname from "classnames";
import { SelectDataType } from "types";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  SelectFormData: SelectDataType[];
  selectedOption: string;
  onOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  backgroundColor: string;
  textColor: string;
  textSize: string;
  border?: string;
  placeholder?: string;
  placeholderText: string;
}

export const Select: React.FC<Props> = ({
  backgroundColor,
  border,
  onOptionChange,
  placeholder,
  placeholderText,
  selectedOption,
  SelectFormData,
  textColor,
  textSize,
}) => {
  return (
    <div className="relative w-full">
      <select
        onChange={onOptionChange}
        value={selectedOption}
        placeholder=""
        className={classNames(
          "items-center h-[54px] px-5 pt-5 appearance-none w-full rounded-10  block",
          " focus:outline-none focus:ring-0 peer",
          backgroundColor,
          textColor,
          textSize,
          border
        )}
      >
        <option className="hidden"></option>
        {SelectFormData.map((formData, index) => {
          return (
            <option
              key={index}
              value={formData.value}
              className={classNames("w-full", textColor)}
            >
              {formData.option}
            </option>
          );
        })}
      </select>
      <div
        className={classNames(
          "pointer-events-none absolute inset-y-0 right-3 flex items-center px-2",
          textColor
        )}
      >
        <MdKeyboardArrowDown />
      </div>
      <label
        htmlFor="floating_filled"
        className={classname(
          "absolute text-[14px] leading-[20px] font-medium duration-300",
          "top-4 z-10 origin-[0] left-4 ",
          selectedOption !== "" &&
            "-translate-y-3 peer-focus:scale-[0.75] peer-[:not(:placeholder-shown)]:scale-[0.75]",
          placeholder
        )}
      >
        {placeholderText}
        <span className="text-green-10 ml-1">*</span>
      </label>
    </div>
  );
};
