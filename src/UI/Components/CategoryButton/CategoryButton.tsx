import React, { useContext } from "react";
import classNames from "classnames";
import { FormStepperContext } from "App/FormStepperProvider";

interface CategoryButtonPropsType {
  label: string;
  value: number;
  name: string;
}

export const CategoryButton: React.FC<CategoryButtonPropsType> = ({
  name,
  label,
  value,
}) => {
  const { selectValue, handleSelectInput } = useContext(FormStepperContext)!;
  const handleSelect = () => {
    handleSelectInput(name, value);
  };
  return (
    <div className="flex justify-center peer" onClick={handleSelect}>
      <input
        type="radio"
        value={value}
        checked={selectValue.name === value}
        onChange={handleSelect}
        className="appearance-none"
      />
      <label
        className={classNames(
          "cursor-pointer select-none rounded-xl px-[50px] max-md:px-8 py-[15px]",
          "text-green-70 text-[14x] leading-[20px] font-semibold",
          "border-[1px] border-gray-300",
          selectValue[name] === value && "bg-green-10"
        )}
      >
        {label}
      </label>
    </div>
  );
};
