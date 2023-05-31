import React from "react";
import { Search } from "UI/Components";

import { HamburgerSignInButton } from "UI/Components/Header/HamburgerSignInButton";
import { HamburgerList } from "UI/Components/Header/HamburgerList";
import HeaderMenuLogo from "Assets/images/svg/logo/hamburger-menu-logo.svg";
import { MdClose } from "react-icons/md";

type hamburgerMenuProps = {
  isShowMobileMenu: () => void;
};

export const HamburgerMenu: React.FC<hamburgerMenuProps> = ({
  isShowMobileMenu,
}) => {
  return (
    <div>
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
    </div>
  );
};
