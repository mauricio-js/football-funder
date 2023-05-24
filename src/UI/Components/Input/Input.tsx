import React from "react";

interface Props {
  label: string;
  type: string;
}

const InputForm: React.FC<Props> = ({ label, type }) => {
  return (
    <div className="flex flex-col">
      <div className="relative mb-3">
        <input
          type={type}
          className="peer m-0 block bg-white h-[58px] w-full rounded-10 border 
            border-solid bg-transparent bg-clip-padding px-3 py-4 text-[14px]
            font-medium leading-tight text-neutral-700 transition duration-200 
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
          className="pointer-events-none absolute left-0 top-0 origin-[0_0] border text-[12px]
            border-solid border-transparent px-3 py-4 text-gray-500 transition-[opacity,_transform] 
            duration-200 ease-linear peer-focus:-translate-y-1.5 peer-focus:translate-x-[0.15rem] 
            peer-focus:scale-[0.75] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-1.5 
            peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.75] 
            motion-reduce:transition-none dark:text-gray-500 dark:peer-focus:text-primary"
        >
          {label}
          <span className="text-green-10 ml-1">*</span>
        </label>
      </div>
    </div>
  );
};

export default InputForm;
