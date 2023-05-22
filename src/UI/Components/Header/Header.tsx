import React, { useState } from "react";
import { SignInButton } from "./SignInButton";
import { HamburgerList } from "./HamburgerList";
import { HamburgerSignInButton } from "./HamburgerSignInButton";
import { Dropdown, Search } from "UI/Components";
import MenuIcon from "Assets/images/menu-icon.png";
import HeaderMenuLogo from "Assets/images/hamburger-menu-logo.png";
import WhiteCloseIcon from "Assets/images/close-icon-white.png";
import BlackCloseIcon from "Assets/images/close-icon-black.png";
import { SearchIcon } from "Assets/images/svg/icon-search";

import HeaderLogoImage from "Assets/images/header-logo.png";

export function Header() {
  interface MenuItem {
    id: number;
    item: string;
  }

  const [isShowHeaderMenu, setIsShowHeaderMenu] = useState<boolean>(false);
  const [isShowSearchForm, setIsShowSearchForm] = useState<boolean>(false);

  const handleClick = () => {
    setIsShowHeaderMenu(!isShowHeaderMenu);
  };

  const ShowSearchForm = () => {
    setIsShowSearchForm(!isShowSearchForm);
  };

  const fundraisingMenu: MenuItem[] = [
    {
      id: 1,
      item: "Fundraise",
    },
    {
      id: 2,
      item: "Contribute",
    },
  ];

  const AdvertisingMenu: MenuItem[] = [
    {
      id: 1,
      item: "Buy",
    },
    {
      id: 2,
      item: "Sell",
    },
  ];

  const SuponsorshipMenu: MenuItem[] = [
    {
      id: 1,
      item: "Buy",
    },
    {
      id: 2,
      item: "Sell",
    },
  ];

  const MoreMenu: MenuItem[] = [
    {
      id: 1,
      item: "FAQ",
    },
    {
      id: 2,
      item: "About",
    },
    {
      id: 3,
      item: "Support",
    },
  ];
  return (
    <div className="relative">
      <div className="bg-green-10">
        <div className="px-40 max-2xl:px-28 max-xl:px-20 max-lg:px-10 max-xs:px-10 max-ns:px-5 max-vs:px-4 py-4 flex flex-row">
          {/* Part - Header Logo */}
          <img src={HeaderLogoImage} alt="footer-logo" />
          {/* Part - Header Menu */}
          <div className="w-full flex flex-row justify-between max-lg:justify-end pl-28 max-xl:pl-10 max-vs:pl-3">
            <div className="flex items-center max-lg:hidden">
              <div className="flex flex-row items-center text-[14px] font-semibold leading-5">
                <button className="p-[10px] hover:bg-black hover:bg-opacity-5 rounded-lg">
                  Home
                </button>
                <button className="p-[10px] hover:bg-black hover:bg-opacity-5 rounded-lg">
                  Explore
                </button>
                <div className="flex flex-row">
                  <Dropdown List={fundraisingMenu} Name="Funraising" />
                </div>
                <div className="flex flex-row">
                  <Dropdown List={AdvertisingMenu} Name="Advertising" />
                </div>
                <div className="flex flex-row">
                  <Dropdown List={SuponsorshipMenu} Name="Suponsorship" />
                </div>
                <button className="p-[10px] hover:bg-black hover:bg-opacity-5 rounded-lg">
                  Fees
                </button>
                <div className="flex flex-row">
                  <Dropdown List={MoreMenu} Name="More" />
                </div>
              </div>
            </div>
            {/* Part - Header Search Icon && Search Form */}
            <div className="flex flex-row items-center">
              {!isShowSearchForm && (
                <button className="mr-5" onClick={ShowSearchForm}>
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
                        className="block w-full rounded-lg bg-white py-2 pl-5 pr-[30px] font-medium text-base focus:outline-0"
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
                  onClick={handleClick}
                >
                  <img src={MenuIcon} alt="menu-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Part - Hamburger Menu Logo */}
      {isShowHeaderMenu && (
        <div className="absolute top-0 w-full bg-green-70">
          <div className="ns:w-[430px] mx-auto p-5">
            <div className="flex flex-row justify-between">
              <img src={HeaderMenuLogo} alt="Hamburger-logo" />
              <button onClick={handleClick}>
                <img src={WhiteCloseIcon} alt="close-button" />
              </button>
            </div>
            <div className="mt-[30px]">
              <Search />
            </div>
            {/* Part - Sign in / Sign Up Button */}
            <div className="mt-[15px]">
              <HamburgerSignInButton />
            </div>
            {/* Part -  Hamburger List */}
            <div className="mt-[30px]">
              <HamburgerList />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
