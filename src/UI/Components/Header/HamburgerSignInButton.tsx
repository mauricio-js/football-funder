import React, { useState } from "react";

export const HamburgerSignInButton: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const AccountShow = () => {
    setIsAuth(!isAuth);
  };

  return (
    <div>
      {!isAuth && (
        <button
          className="
            w-full py-[10px] rounded-10
            bg-white text-base font-semibold"
          onClick={AccountShow}
        >
          Sign in / Sign up
        </button>
      )}
      {isAuth && (
        <div className="flex flex-row">
          <div className="w-[100px] h-[100px] mx-[4px] rounded-full bg-white"></div>
          <div className="ml-[15px] flex flex-col justify-between">
            <div className="font-semibold text-lg text-white">
              Sheldon Cooper
            </div>
            <div className="font-medium text-base text-green-10">
              My Account
            </div>
            <div className="font-medium text-base text-green-10">Profile</div>
          </div>
        </div>
      )}
    </div>
  );
};
