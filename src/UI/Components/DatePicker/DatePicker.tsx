import React, { useRef } from "react";
import classNames from "classnames";
import { InputType } from "types";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  data: InputType;
  setValue: (value: Date | null) => void;
  value: Date | null | undefined;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  data,
  setValue,
  value,
}: DatePickerProps) => {
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleDateChange = (date: Date): void => {
    // const selectedMonth = date.getMonth() + 1;
    // console.log("Selected month:", selectedMonth);
    setValue(date);
  };

  const handleInputClick = (): void => {
    if (labelRef.current) {
      labelRef.current.classList.add(
        "scale-75",
        "translate-x-[0.15rem]",
        "-translate-y-1.5"
      );
    }
  };

  const handleBlur = (): void => {
    if (!value && labelRef.current) {
      labelRef.current.classList.remove(
        "scale-75",
        "translate-x-[0.15rem]",
        "-translate-y-1.5"
      );
    }
  };
  return (
    <div className="relative customDatePickerWidth">
      <ReactDatePicker
        selected={value}
        onChange={handleDateChange}
        dateFormat="dd MMMM, yyyy"
        onInputClick={handleInputClick}
        onBlur={handleBlur}
        className={classNames(
          "peer w-full rounded-10 appearance-none focus:appearance-none focus-visible:outline-0 border-2 border-gray-200",
          "ease-linear focus:pb-[0.625rem] focus:pt-[1.625rem] transition duration-200",
          "[&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",
          data.height,
          data.padding,
          data.textSize,
          data.border
        )}
        required
      />
      <label
        htmlFor="date-picker"
        ref={labelRef}
        className={classNames(
          "pointer-events-none absolute left-0 top-0 origin-[0_0] border text-[14px]",
          "border-solid border-transparent px-3 py-4 text-gray-500 transition-[opacity,_transform] duration-200 ease-linear",
          value ? "scale-75 translate-x-[0.15rem] -translate-y-1.5" : "",
          data.content
        )}
      >
        {data.label}
      </label>
      <style>
        {`
          .customDatePickerWidth, 
          .customDatePickerWidth > div.react-datepicker-wrapper, 
          .customDatePickerWidth > div > div.react-datepicker__input-container
          .customDatePickerWidth > div > div.react-datepicker__input-container input {
            width: 100%;
          },
          .customDatePickerWidth > div > div.react-datepicker-popper {
            z-index:100;
          }
          .react-datepicker-popper .react-datepicker__triangle {
            display: none;
          }
          .react-datepicker-popper{
            z-index:20;
          }
        `}
      </style>
    </div>
  );
};
