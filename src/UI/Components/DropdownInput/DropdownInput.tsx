import React, { useState } from "react";
import classNames from "classnames";
import { ContactPhoneNumberType } from "types";
import Arrow from "Assets/images/svg/button/black-arrow";

interface DropdownInputProps {
  data: ContactPhoneNumberType[];
  country: string;
  selectCountry: (value: string) => void;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

export const DropdownInput: React.FC<DropdownInputProps> = ({
  country,
  data,
  selectCountry,
  name,
  onChange,
  value,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, event.target.value);
  };

  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          name={name}
          type="text"
          value={value}
          className={classNames(
            "peer bg-white w-full rounded-10 text-green-70 appearance-none",
            "transition duration-200 border-2 border-gray-200 h-[54px] pl-16 py-4",
            "ease-linear placeholder:text-transparent focus:pb-[0.625rem] focus:pt-[1.625rem] ",
            "focus:outline-none [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
          )}
          onChange={handleInputChange}
          placeholder="1"
          autoComplete="on"
          required
        />
        <div className="absolute top-0 h-full px-4 flex items-center">
          <div className="relative h-full">
            <button
              className="h-full generalText text-gray-500"
              onClick={() => {
                setIsShowMenu(!isShowMenu);
              }}
            >
              <div className="flex">
                {country}
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
                          selectCountry(item.country);
                          setIsShowMenu(false);
                          // setPlaceholder(item.randomNumber);
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
            "pointer-events-none absolute left-[50px] top-0 origin-[0_0] border text-[14px]",
            "border-solid border-transparent px-3 py-4 text-gray-500 transition-[opacity,_transform]",
            "duration-200 ease-linear",
            " peer-focus:-translate-y-1.5",
            "peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-1.5 ",
            " peer-[:not(:placeholder-shown)]:scale-[0.75] peer-focus:scale-[0.75] ",
            "after:content-['*'] after:ml-1 after:text-green-10"
          )}
        >
          Phone
          {/* <span className="text-green-10 ml-1">*</span> */}
        </label>
      </div>
    </div>
  );
};
