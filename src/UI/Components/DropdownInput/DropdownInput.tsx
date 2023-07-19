import React, { useState, useContext } from "react";
import { FormStepperContext } from "App/FormStepperProvider";
import classNames from "classnames";
import { ContactPhoneNumberType } from "types";
import Arrow from "Assets/images/svg/button/black-arrow";

interface DropdownInputProps {
  data: ContactPhoneNumberType[];
  name: string;
  required: boolean;
}

export const DropdownInput: React.FC<DropdownInputProps> = ({
  data,
  name,
  required,
}) => {
  const {
    formValues,
    handleInputChange,
    countryPhoneNumber,
    setCountryPhoneNumber,
  } = useContext(FormStepperContext)!;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleInputChange(name, value);
  };
  const [floating, setFloating] = useState<boolean>(false);

  const handleFocus = () => {
    setFloating(true);
  };

  const handleBlur = () => {
    setFloating(false);
  };

  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          name={name}
          type="text"
          value={formValues[name] || ""}
          className={classNames(
            "peer bg-white w-full  text-green-70",
            "transition duration-200 ease-linear h-[54px] pl-16 pt-3",
            "border-2 border-gray-200 rounded-10",
            "appearance-none focus:outline-none "
          )}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="on"
          required={required}
        />
        <div className="absolute top-0 h-full px-4 flex items-center">
          <div className="relative h-full">
            <button
              className="h-full generalText text-gray-500"
              onClick={(e) => {
                e.preventDefault();
                setIsShowMenu(!isShowMenu);
              }}
            >
              <div className="flex">
                {countryPhoneNumber}
                <Arrow />
              </div>
            </button>
            {isShowMenu && (
              <div className="absolute w-20 -left-4 top-16 rounded-md bg-white shadow-lg border-[1px] overflow-hidden z-50">
                <div className="text-[14px] leading-[20px] font-semibold  divide-y divide-gray-100">
                  {data.map((item, index) => {
                    return (
                      <button
                        key={index}
                        className="py-2 px-3 w-full hover:bg-gray-100 flex justify-start"
                        onClick={() => {
                          setCountryPhoneNumber(item.country);
                          setIsShowMenu(false);
                        }}
                      >
                        <div className="generalSmallText">{item.country}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <label
          htmlFor="floatingInput"
          className={classNames(
            "pointer-events-none absolute top-[calc(50%-10px)] left-16 text-sm text-gray-10",
            "origin-[0_0] duration-200 ease-linear",
            floating || formValues[name] ? "scale-75 -translate-y-2.5" : " ",
            "after:content-['*'] after:ml-1 after:text-green-10"
          )}
        >
          Phone
        </label>
      </div>
    </div>
  );
};
