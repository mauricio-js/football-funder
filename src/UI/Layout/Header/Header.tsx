import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  // ADSISTING_URL,
  HOME_URL,
  SIGNIN_URL,
  // EXPLORE_URL,
  // CROWDFUNDINGLIST_URL,
  // HOWITWORKS_URL,
  // ORGANISATIONFUNDRAISER_URL,
  // ORGANISATIONINDIVIDUAL_URL,
  // ORGANISATIONLISTING_URL,
} from "Lib";
import { MdClose, MdMenu } from "react-icons/md";
import { Dropdown, HeaderButton, HamburgerMenu } from "UI";
import { SearchIcon } from "Assets/images/svg/button/icon-search";
import HeaderLogoImage from "Assets/images/svg/logo/header-log.svg";
import classname from "classnames";
import {
  // AccounMenuData,
  homeButtonData,
  exploreButtonData,
  advertisingButtonData,
  sponsorshipButtonData,
  fundraisingButtonData,
  moreButtonData,
  feeButtonData,
} from "Config";
// import DivideLine from "Assets/images/svg/button/accout-menu-divide.svg";
// import { MdArrowDropDown } from "react-icons/md";
import { AppState } from "App/reducers";
import { setShowMobileMenu } from "Data/LayoutState";

type HeaderProps = {
  isShowMobileMenu?: () => void;
};

export const Header: React.FC<HeaderProps> = ({ isShowMobileMenu }) => {
  const [isShowSearchForm, setIsShowSearchForm] = useState<boolean>(false);
  const isMobileMenu = useSelector(
    (state: AppState) => state.layoutState.isMobileMenu
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ShowSearchForm = () => {
    setIsShowSearchForm(!isShowSearchForm);
  };

  // const [isAuth, setIsAuth] = useState<boolean>(false);
  // const [isShowAccountMenu, setIsShowAccountMenu] = useState<boolean>(false);

  // const AccountShow = () => {
  //   setIsAuth(!isAuth);
  // };

  // const AccountMenuShow = () => {
  //   setIsShowAccountMenu(!isShowAccountMenu);
  // };

  return (
    <div className="sticky top-0 z-40">
      {!isMobileMenu && (
        <div className="relative z-20">
          <div className="bg-green-10">
            <div
              className="px-40 max-2xl:px-28 max-xl:px-20 max-bl:px-
          max-xs:px-10 max-ns:px-5 max-vs:px-4 py-4 flex flex-row"
            >
              <img
                src={HeaderLogoImage}
                alt="footer-logo"
                onClick={() => navigate(HOME_URL)}
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
                  <div>
                    {/* {!isAuth && ( */}
                    <button
                      className="
                            w-[80px] h-[40px] bg-green-70 my-[1px] py-1
                          text-white font-semibold leading-[22px] text-[16px]
                            flex justify-center items-center rounded-10"
                      onClick={() => navigate(SIGNIN_URL)}
                    >
                      Sign in
                    </button>
                    {/* )} */}
                    {/* {isAuth && (
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
                            className="absolute top-[45px] right-0 bg-green-70 rounded-10 w-[120px] overflow-hidden z-50"
                          >
                            <div
                              className="text-sm text-gray-700
                                        dark:text-gray-200 divide-y  divide-gray-700"
                            >
                              {AccounMenuData.map((item, key) => {
                                return (
                                  <div
                                    key={key}
                                    className="block text-[14px] font-semibold leading-5 px-[10px] py-[10px] 
                                               hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={AccountMenuShow}
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
                    )} */}
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bl:hidden ml-5 max-vs:ml-1"
                      onClick={() => {
                        dispatch(setShowMobileMenu(true));
                        window.scrollTo(0, 0);
                      }}
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
      {isMobileMenu && (
        <HamburgerMenu
          isShowMobileMenu={() => {
            dispatch(setShowMobileMenu(false));
          }}
        />
      )}
    </div>
  );
};
