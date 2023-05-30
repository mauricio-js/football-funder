import React, { useState } from "react";
import DivideLine from "Assets/images/svg/button/accout-menu-divide.svg";
import { AccounMenuData } from "./headerConfig";
import { MdArrowDropDown } from "react-icons/md";

export const SignInButton: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isShowAccountMenu, setIsShowAccountMenu] = useState<boolean>(false);

  const AccountShow = () => {
    setIsAuth(!isAuth);
  };

  const AccountMenuShow = () => {
    setIsShowAccountMenu(!isShowAccountMenu);
  };

  return (
    <div>
      {!isAuth && (
        <button
          className="
            w-[80px] h-[40px] bg-green-70 my-[1px] py-1
          text-white font-semibold leading-[22px] text-[16px]
            flex justify-center items-center rounded-10"
          onClick={AccountShow}
        >
          Sign in
        </button>
      )}
      {isAuth && (
        <div className="relative flex flex-row">
          <button
            className="
            w-[40px] h-[40px] bg-white my-[1px]
            font-semibold leading-[22px] text-lg
            flex justify-center items-center rounded-20"
            onClick={AccountMenuShow}
          ></button>
          {isShowAccountMenu && (
            <div
              id="dropdown"
              className="absolute top-[45px] right-0 bg-green-70 rounded-10 w-[120px] z-50"
            >
              <div
                className="py-2 text-sm text-gray-700 
                dark:text-gray-200 divide-y  divide-gray-700"
              >
                {AccounMenuData.map((item, key) => {
                  return (
                    <div
                      className="block text-[14px] font-semibold leading-5 px-[10px] py-[10px] 
                  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {item.title}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className="flex items-center justify-center">
            <div className="">
              <MdArrowDropDown />
            </div>
          </div>
          <img
            src={DivideLine}
            alt="footer-logo"
            className="ml-5 max-vs:ml-3 bl:hidden"
          />
        </div>
      )}
    </div>
  );
};
