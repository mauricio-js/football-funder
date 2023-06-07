import React from "react";
import { HamburgerSignInButton, HamburgerItemList, Search } from "UI";
import { HamburgerSearchData } from "Config";
import HeaderMenuLogo from "Assets/images/svg/logo/hamburger-menu-logo.svg";
import { MdClose } from "react-icons/md";

type hamburgerMenuProps = {
  isShowMobileMenu: () => void;
};

export const HamburgerMenu: React.FC<hamburgerMenuProps> = ({
  isShowMobileMenu,
}) => {
  return (
    <div className="z-50">
      <div className="w-full bg-green-70">
        <div className="ns:w-[430px] mx-auto p-5">
          <div className="flex flex-row justify-between">
            <img src={HeaderMenuLogo} alt="Hamburger-logo" />
            <button onClick={isShowMobileMenu}>
              <div className="text-[24px] text-white">
                <MdClose />
              </div>
            </button>
          </div>
          <div className="mt-30">
            <Search data={HamburgerSearchData} />
          </div>
          {/* Part - Sign in / Sign Up Button */}
          <div className="mt-[15px]">
            <HamburgerSignInButton />
          </div>
          {/* Part -  Hamburger List */}
          <div className="mt-30">
            <HamburgerItemList />
          </div>
        </div>
      </div>
    </div>
  );
};
