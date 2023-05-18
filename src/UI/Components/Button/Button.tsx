import React from 'react';

interface Button {
  width: string;
  height: string;
  bgColor: string;
  rounded: string;
  title: string;
  textColor: string;
}

interface Props {
  button: Button;
}

export const Button: React.FC<Props> = ({ button }) => {
  const { width, height, bgColor, rounded, title, textColor } = button;
  return (
    <div
      className={`w-${width} h-${height} bg-${bgColor} rounded-${rounded} text-${textColor} flex justify-center items-center font-semibold text-[16px]`}
    >
      <div>{title}</div>
    </div>
  );
};
