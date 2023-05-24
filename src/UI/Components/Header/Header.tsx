import React, { useState } from "react";
import { SignInButton } from "./SignInButton";
import { Dropdown } from "UI/Components";
import MenuIcon from "Assets/images/menu-icon.png";
import BlackCloseIcon from "Assets/images/close-icon-black.png";
import { SearchIcon } from "Assets/images/svg/icon-search";

import HeaderLogoImage from "Assets/images/header-logo.png";
import classname from "classnames";
import { menuList } from "./headerConfig";

type HeaderProps = {
  isShowMobielMenu: () => void;
};

export function Header({ isShowMobielMenu }: HeaderProps) {
  const [isShowSearchForm, setIsShowSearchForm] = useState<boolean>(false);

  const ShowSearchForm = () => {
    setIsShowSearchForm(!isShowSearchForm);
  };

  return (
    <div className="relative">
      <div className="bg-green-10">
        <div
          className="px-40 max-2xl:px-28 max-xl:px-20 max-lg:px-10 
          max-xs:px-10 max-ns:px-5 max-vs:px-4 py-4 flex flex-row"
        >
          {/* Part - Header Logo */}
          <img src={HeaderLogoImage} alt="footer-logo" />
          {/* Part - Header Menu */}
          <div
            className={classname(
              "w-full flex flex-row justify-between max-lg:justify-end pl-28 max-xl:pl-10 max-vs:pl-3",
              isShowSearchForm && "!justify-end"
            )}
          >
            {!isShowSearchForm && (
              <div className="flex items-center max-lg:hidden">
                <div className="flex flex-row items-center text-[14px] font-semibold leading-5">
                  {menuList.map((list, index) => {
                    return (
                      <div key={index} className="flex flex-row">
                        <Dropdown List={list} />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {/* Part - Header Search Icon && Search Form */}
            <div className="flex flex-row items-center">
              {!isShowSearchForm && (
                <button
                  className="mr-5 max-lg:hidden max-xl:mr-3"
                  onClick={ShowSearchForm}
                >
                  <SearchIcon />
                </button>
              )}
              {isShowSearchForm && (
                <div className="mr-5">
                  <form className="relative flex items-center">
                    <label htmlFor="simple-search" className="sr-only">
                      Search
                    </label>
                    <div className="w-full">
                      <input
                        type="text"
                        id="simple-search"
                        className="block w-full rounded-lg bg-white py-2 pl-5 
                          pr-[30px] font-medium text-base focus:outline-0"
                        placeholder="Search"
                        autoComplete="off"
                        required
                      />
                    </div>
                    {/* <button
                      type="submit"
                      className="absolute right-0 ml-2 rounded-lg px-3 py-2 text-sm font-medium text-white"
                    >
                      <img src={BlackCloseIcon} alt="close-button" />
                      <div className="sr-only">Search</div>
                    </button> */}
                    <button
                      className="absolute right-0 ml-2 rounded-lg px-2 py-2 text-sm font-medium text-white"
                      onClick={ShowSearchForm}
                    >
                      <img src={BlackCloseIcon} alt="close-button" />
                    </button>
                  </form>
                </div>
              )}
              <SignInButton />
              <div className="flex items-center">
                <button
                  className="lg:hidden ml-5 max-vs:ml-1"
                  onClick={isShowMobielMenu}
                >
                  <img src={MenuIcon} alt="menu-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
