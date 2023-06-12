import React from "react";
import classNames from "classnames";
import { InputType } from "types";

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
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };
  // const [inputType, setInputType] = useState<string>(data.type);

  return (
    <div className="flex flex-col">
      <div className="relative group">
        <input
          type={data.type}
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
          placeholder="1"
        />
        <label
          htmlFor="floatingInput"
          className={classNames(
            "pointer-events-none absolute left-1 top-1 origin-[0_0] border text-[14px] peer-focus:!bg-transparent",
            "border-solid border-transparent pl-3 pr-5 py-3 text-gray-500 transition-[opacity,_transform]",
            "duration-200 ease-linear peer-focus:-translate-y-1.5 peer-focus:translate-x-[0.15rem]",
            "peer-focus:scale-[0.75]",
            "motion-reduce:transition-none dark:text-gray-500 dark:peer-focus:text-primary peer-focus:bg-transparent",
            defaultValue && defaultValue !== ""
              ? "-translate-y-1.5 translate-x-[0.15rem] scale-[0.75]  bg-transparent"
              : "bg-white",
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
