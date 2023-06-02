import React from "react";
import classNames from "classnames";
import { ButtonDataType } from "types/buttonDataType";

interface ButtonPropertyProps {
  property: ButtonDataType;
}

export const Button: React.FC<ButtonPropertyProps> = ({ property }) => {
  return (
    <button
      className={classNames(
        "rounded-10",
        property.backgroundColor,
        property.height,
        property.textColor,
        property.textSize,
        property.width
      )}
    >
      {property.icon && <property.icon />}
      {property.image && <img src={property.image} alt=" button contect" />}
      {property.text && property.text}
    </button>
  );
};
