import React from "react";
import classNames from "classnames";
import { FormDataType } from "types";

interface InputProps {
  data: FormDataType;
}

export const Input: React.FC<InputProps> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="relative mb-3">
        <input
          type={data.type}
          className={classNames(
            "peer m-0 block bg-white w-full rounded-10 border",
            "border-solid bg-transparent bg-clip-padding",
            "font-medium leading-tight text-neutral-700 transition duration-200",
            "ease-linear placeholder:text-transparent focus:border-primary",
            "focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700",
            "focus:outline-none peer-focus:text-primary dark:border-neutral-600",
            "dark:text-neutral-700 dark:focus:border-primary dark:peer-focus:text-primary",
            "[&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",
            data.height,
            data.padding,
            data.textSize
          )}
          id="floatingInput"
          placeholder="1"
        />
        <label
          htmlFor="floatingInput"
          className={classNames(
            "pointer-events-none absolute left-0 top-0 origin-[0_0] border text-[14px]",
            "border-solid border-transparent px-3 py-4 text-gray-500 transition-[opacity,_transform]",
            "duration-200 ease-linear peer-focus:-translate-y-1.5 peer-focus:translate-x-[0.15rem]",
            "peer-focus:scale-[0.75] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-1.5",
            "peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.75]",
            "motion-reduce:transition-none dark:text-gray-500 dark:peer-focus:text-primary",
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
