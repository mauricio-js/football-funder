import React, { useContext } from "react";
import classNames from "classnames";
import { FormStepperContext } from "App/FormStepperProvider";
import { BsCheckLg } from "react-icons/bs";

interface RadioButtonPropsType {
  checkboxStyle: boolean;
  label: string;
  name: string;
  value: number;
  classes: string | undefined;
  textStyle: string;
}

export const RadioButton: React.FC<RadioButtonPropsType> = ({
  checkboxStyle,
  label,
  value,
  classes,
  textStyle,
  name,
}) => {
  const { selectValue, handleSelectInput } = useContext(FormStepperContext);
  return (
    <div className={classNames("flex items-center", classes)}>
      <label
        id="label1"
        className={classNames("font-normal text-green-70", textStyle)}
        onClick={() => handleSelectInput(name, value)}
      >
        {label}
      </label>
      <div className="bg-white rounded-full w-5 h-5 flex justify-center items-center relative">
        <input
          type="radio"
          value={value}
          checked={selectValue[name] === value}
          onChange={() => handleSelectInput(name, value)}
          className={classNames(
            "appearance-none focus:opacity-100 ",
            "border border-gray-300 absolute cursor-pointer w-full h-full checked:border-none",
            checkboxStyle ? "rounded-md" : "rounded-full"
          )}
        />
        {!checkboxStyle ? (
          <div
            className={classNames(
              " border-[5px] border-green-10 rounded-full w-full h-full",
              selectValue[name] === value ? "flex" : "hidden"
            )}
          ></div>
        ) : (
          <div
            className={classNames(
              " bg-green-10 rounded-md w-full h-full z-1 justify-center items-center text-semibold",
              selectValue[name] === value ? "flex" : "hidden"
            )}
          >
            <BsCheckLg />
          </div>
        )}
      </div>
    </div>
  );
};
