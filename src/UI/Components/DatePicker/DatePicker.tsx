import React, { useState } from "react";
import classNames from "classnames";
import { InputType } from "types";
import { TbCalendar } from "react-icons/tb";

interface DatePickerProps {
  data: InputType;
  setValue: (value: string) => void;
  defaultValue: string;
}
export const DatePicker: React.FC<DatePickerProps> = ({
  data,
  setValue,
  defaultValue,
}) => {
  const [inputType, setInputType] = useState<string>(data.type);
  const [inputValue, setInputValue] = useState<string>("");
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    setInputValue(inputValue);
  };
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputType("date");
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (inputType === "date" && inputValue !== "") {
      setInputType("date");
    } else {
      setInputType("text");
    }
  };

  console.log("input value", inputType, inputValue);

  return (
    <div className="flex flex-col">
      <div className="relative group">
        <input
          type={inputType}
          value={inputValue}
          className={classNames(
            "peer bg-white w-full rounded-10 text-green-70 appearance-none",
            "transition duration-200 border-2 border-gray-200 ",
            "ease-linear placeholder:text-transparent focus:pb-[0.625rem] focus:pt-[1.625rem] ",
            "focus:outline-none [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",
            data.height,
            data.padding,
            data.textSize,
            data.border
          )}
          onChange={onChangeHandler}
          onInput={onChangeHandler}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="1"
        />
        <div
          className="absolute h-full flex items-center top-0 right-5 text-[20px] z-10"
          onFocus={handleFocus}
        >
          <TbCalendar />
        </div>
        <label
          htmlFor="floatingInput"
          className={classNames(
            "pointer-events-none absolute left-1 top-1 origin-[0_0] border text-[14px] peer-focus:!bg-transparent",
            "border-solid border-transparent pl-3 pr-5 py-3 text-gray-500 transition-[opacity,_transform]",
            "duration-200 ease-linear peer-focus:-translate-y-1.5 peer-focus:translate-x-[0.15rem]",
            "peer-focus:scale-[0.75]",
            "motion-reduce:transition-none dark:text-gray-500 dark:peer-focus:text-primary peer-focus:bg-transparent",
            (inputType === "date" || inputValue !== "") &&
              "-translate-y-1.5 translate-x-[0.15rem] scale-[0.75]  bg-transparent",
            // defaultValue && defaultValue !== ""
            //   ? "-translate-y-1.5 translate-x-[0.15rem] scale-[0.75]  bg-transparent"
            //   : "bg-white",
            data.content
          )}
        >
          {data.label}
        </label>
      </div>
      <style>
        {`
        input::-webkit-calendar-picker-indicator {
          cursor: pointer;
          position:absolute;
          right:20px;
          top:15px;
          opacity:0;
          z-index:100;
        }
      `}
      </style>
    </div>
  );
};
