import React, { useState } from "react";
import { useNavigate } from "react-router";
import { MdClose, MdMenu } from "react-icons/md";
import { Dropdown, HeaderButton, SignInButton, HamburgerMenu } from "UI";
import { SearchIcon } from "Assets/images/svg/button/icon-search";
import HeaderLogoImage from "Assets/images/svg/logo/header-log.svg";
import classname from "classnames";
import {
  homeButtonData,
  exploreButtonData,
  advertisingButtonData,
  sponsorshipButtonData,
  fundraisingButtonData,
  moreButtonData,
  feeButtonData,
} from "Config";

// type HeaderProps = {
//   isShowMobileMenu: () => void;
// };

export function Header() {
  // { isShowMobileMenu }: HeaderProps
  const [isShowSearchForm, setIsShowSearchForm] = useState<boolean>(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  const ShowSearchForm = () => {
    setIsShowSearchForm(!isShowSearchForm);
  };

  return (
    <div>
      {!openMobileMenu && (
        <div className="relative z-20">
          <div className="bg-green-10">
            <div
              className="px-40 max-2xl:px-28 max-xl:px-20 max-bl:px-
          max-xs:px-10 max-ns:px-5 max-vs:px-4 py-4 flex flex-row"
            >
              <img
                src={HeaderLogoImage}
                alt="footer-logo"
                onClick={() => navigate("/home")}
              />
              <div
                className={classname(
                  "w-full flex flex-row justify-between max-bl:justify-end pl-[106px] max-xl:pl-[50px] max-vs:pl-3"
                )}
              >
                <div className="flex items-center max-bl:hidden">
                  <div className="flex flex-row items-center text-[14px] font-semibold leading-5">
                    <div className="flex flex-row">
                      <HeaderButton List={homeButtonData} />
                      <HeaderButton List={exploreButtonData} />
                      <Dropdown List={fundraisingButtonData} />
                      <Dropdown List={advertisingButtonData} />
                      <Dropdown List={sponsorshipButtonData} />
                      <HeaderButton List={feeButtonData} />
                      <Dropdown List={moreButtonData} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  {!isShowSearchForm && (
                    <button
                      className="mr-5 max-bl:hidden max-xl:mr-3"
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
                            className="block w-full rounded-lg bg-white py-2 pl-3 
                          pr-[30px] font-medium text-base focus:outline-0 
                          placeholder:text-[12px] placeholder:leading-[20px] placeholder:font-medium"
                            placeholder="Search..."
                            autoComplete="off"
                            required
                          />
                        </div>
                        <button
                          className="absolute right-0 ml-2 rounded-lg px-2 py-2 text-sm font-medium text-white"
                          onClick={ShowSearchForm}
                        >
                          <div className="text-[16px] text-black">
                            <MdClose />
                          </div>
                        </button>
                      </form>
                    </div>
                  )}
                  <SignInButton />
                  <div className="flex items-center">
                    <button
                      className="bl:hidden ml-5 max-vs:ml-1"
                      onClick={() => setOpenMobileMenu(true)}
                    >
                      <div className="text-2xl">
                        <MdMenu />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {openMobileMenu && (
        <HamburgerMenu isShowMobileMenu={() => setOpenMobileMenu(false)} />
      )}
    </div>
  );
}
