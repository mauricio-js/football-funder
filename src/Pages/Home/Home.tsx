import React from 'react';
import { Header } from 'UI/Components/Header/Header';

import TopImg from 'Assets/images/desktop-logo-back-image.png';

export const Home: React.FC = () => {
  return (
    <div className="max-w-100 mx-auto">
      <img src={TopImg} alt="TopIamge" />
      <Header />
    </div>
  );
};
