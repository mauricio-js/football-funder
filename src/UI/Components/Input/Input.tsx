import React, { useState } from "react";
import classNames from "classnames";
import { InputType } from "types";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { TbCalendar } from "react-icons/tb";

interface InputProps {
  data: InputType;
  setValue: (value: string) => void;
  defaultValue: string;
}
export const Input: React.FC<InputProps> = ({
  data,
  setValue,
  defaultValue,
}) => {
  const [inputType, setInputType] = useState<string>(data.type);
  const [inputValue, setInputValue] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    setInputValue(inputValue);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setInputValue(defaultValue);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isDeleteKey = event.key === "Delete" || event.key === "Backspace";
    if (isDeleteKey && event.currentTarget.value === defaultValue) {
      event.preventDefault();
    }
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
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
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder="1"
          required
        />
        {data.type === "password" && (
          <div className="absolute h-full right-6 top-0 flex items-center">
            <div
              onClick={() => {
                setIsShowPassword(!isShowPassword);
              }}
            >
              {!isShowPassword ? (
                <div
                  onClick={() => {
                    setInputType("text");
                  }}
                >
                  <AiOutlineEye />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setInputType("password");
                  }}
                >
                  <AiOutlineEyeInvisible />
                </div>
              )}
            </div>
          </div>
        )}
        <label
          htmlFor="floatingInput"
          className={classNames(
            "pointer-events-none absolute left-0 top-0 origin-[0_0] border text-[14px]",
            "border-solid border-transparent px-3 py-4 text-gray-500 transition-[opacity,_transform]",
            "duration-200 ease-linear peer-focus:-translate-y-1.5 peer-focus:translate-x-[0.15rem]",
            "peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem]",
            " peer-[:not(:placeholder-shown)]:scale-[0.75] peer-focus:scale-[0.75] ",
            "motion-reduce:transition-none dark:text-gray-500 dark:peer-focus:text-primary",
            data.content
          )}
        >
          {data.label}
          {/* <span className="text-green-10 ml-1">*</span> */}
        </label>
      </div>
      <style>
        {`
        input::-webkit-calendar-picker-indicator {
          cursor: pointer;
          position:absolute;
          right:20px;
          top:15px
        }
      `}
      </style>
    </div>
  );
};
