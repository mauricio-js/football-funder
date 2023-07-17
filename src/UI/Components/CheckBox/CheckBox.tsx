import React, { useContext } from "react";
import { FormStepperContext } from "App/FormStepperProvider";
import classNames from "classnames";
import { BsCheckLg } from "react-icons/bs";

interface CheckBoxProps {
  align?: string;
  label: string;
  name: string;
  textClass?: string;
  value: number;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  align,
  label,
  name,
  textClass,
  value,
}) => {
  const { selectedCheckbox, handleSelectedCheckbox } =
    useContext(FormStepperContext);
  return (
    <div className={classNames("flex justify-between items-center", align)}>
      <label
        id="label1"
        className={classNames("flex-1", textClass)}
        onClick={() => handleSelectedCheckbox(name, value)}
      >
        {label}
      </label>
      <div
        className="bg-white rounded-full w-5 h-5 flex 
         justify-center items-center relative"
      >
        <input
          aria-labelledby="label1"
          type="checkbox"
          name="checkbox"
          onChange={() => handleSelectedCheckbox(name, value)}
          className=" appearance-none focus:opacity-100 border rounded-md 
           border-gray-300 absolute cursor-pointer w-full h-full"
        />
        <div
          className={classNames(
            " bg-green-10 rounded-md w-full h-full z-1 justify-center items-center text-semibold",
            selectedCheckbox[name] && selectedCheckbox[name]?.includes(value)
              ? "flex"
              : "hidden"
          )}
        >
          <BsCheckLg />
        </div>
      </div>
    </div>
  );
};
