import React from 'react';
import { Button } from '../Button/Button';

import HeaderLogo from 'Assets/images/header-logo.png';
import MenuIcon from 'Assets/images/menu-icon.png';

export const Header: React.FC = () => {
  return (
    <div className="absolute max-w-100 top-0 z-50 bg-green-10 w-full h-16 px-5 py-3">
      <div className="flex items-center gap-3">
        <div className="w-2/3">
          <img src={HeaderLogo} alt="header-logo" />
        </div>
        <div className="w-7/10">
          <Button
            button={{
              width: '[90px]',
              height: '[40px]',
              title: 'Sign in',
              bgColor: 'green-70',
              rounded: '10',
              textColor: 'white',
            }}
          />
        </div>
        <div className="w-1/12">
          <img src={MenuIcon} alt="menu-icon" />
        </div>
      </div>
    </div>
  );
};
