import React, { useState } from "react";
import { Header, HamburgerMenu, Footer } from "UI/Components";

export const Explore: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  return (
    <>
      {!openMobileMenu && (
        <div>
          <Header
            isShowMobielMenu={() => {
              setOpenMobileMenu(true);
            }}
          />
          <Footer />
        </div>
      )}
      {openMobileMenu && (
        <HamburgerMenu
          isShowMobielMenu={() => {
            setOpenMobileMenu(false);
          }}
        />
      )}
    </>
  );
};
