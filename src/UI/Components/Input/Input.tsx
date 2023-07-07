import React, { useState } from "react";
import classNames from "classnames";
import { InputType } from "types";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { TbCalendar } from "react-icons/tb";

interface InputProps {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  data: InputType;
  disabled?: boolean;
}
export const Input: React.FC<InputProps> = ({
  data,
  name,
  value,
  onChange,
  disabled,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, event.target.value);
  };

  const [inputType, setInputType] = useState<string>(data.type);

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  // const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = event.target.value;
  //   setValue(inputValue);
  // };

  // const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
  //   if (event.target.value === "") {
  //     setValue(value);
  //   }
  // };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          name={name}
          type={inputType}
          value={value}
          className={classNames(
            "peer bg-white w-full rounded-10  appearance-none",
            "transition duration-200 border-2 border-gray-200 ",
            "ease-linear placeholder:text-transparent focus:pb-[0.625rem] focus:pt-[1.625rem] ",
            "focus:outline-none [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",
            disabled ? "text-green-70 text-opacity-50" : "text-green-70",
            data.height,
            data.padding,
            data.textSize,
            data.border
          )}
          disabled={disabled}
          onChange={handleInputChange}
          // onFocus={handleFocus}
          placeholder="1"
          autoComplete="on"
          required
        />
        {data.type === "password" && (
          <div className="absolute h-full right-6 top-0 flex items-center">
            <div
              onClick={() => {
                setIsShowPassword(!isShowPassword);
              }}
            >
              {disabled ? (
                <AiOutlineEye className="opacity-100" />
              ) : !isShowPassword ? (
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
            "border-solid border-transparent px-3 py-4 transition-[opacity,_transform]",
            "duration-200 ease-linear peer-focus:-translate-y-1.5 peer-focus:translate-x-[0.15rem]",
            "peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem]",
            " peer-[:not(:placeholder-shown)]:scale-[0.75] peer-focus:scale-[0.75] ",
            "motion-reduce:transition-none dark:peer-focus:text-primary",
            disabled ? "text-opacity-50 text-gray-10" : "text-gray-10",
            data.content
          )}
        >
          {data.label}
          {/* <span className="text-green-10 ml-1">*</span> */}
        </label>
      </div>
    </div>
  );
};
