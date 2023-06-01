import React from "react";
import { DistanceDataType } from "types";

interface DistanceInputType {
  List: DistanceDataType;
}

export const DistanceInput: React.FC<DistanceInputType> = ({ List }) => {
  return (
    <div className="flex flex-col">
      <div className="relative mb-3">
        <input
          type={List.type}
          className="peer m-0 block bg-white h-[58px] w-full rounded-10 border 
            border-solid bg-transparent bg-clip-padding pl-3 pr-4 py-4 text-[16px]
            font-medium leading-tight text-green-70 transition duration-200 
            ease-linear placeholder:text-transparent focus:border-primary 
            focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 
            focus:outline-none peer-focus:text-primary dark:border-neutral-600 
            dark:text-neutral-700 dark:focus:border-primary dark:peer-focus:text-primary 
            [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
          id="floatingInput"
          placeholder="1"
        />
        <label
          htmlFor="floatingInput"
          className="pointer-events-none absolute left-0 top-0 origin-[0_0] border text-[14px]
            border-solid border-transparent px-3 py-4 text-gray-500 transition-[opacity,_transform] 
            duration-200 ease-linear peer-focus:-translate-y-1.5 peer-focus:translate-x-[0.15rem] 
            peer-focus:scale-[0.75] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-1.5 
            peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.75] 
            motion-reduce:transition-none dark:text-gray-500 dark:peer-focus:text-primary 
            "
        >
          {List.label}
        </label>
      </div>
    </div>
  );
};
