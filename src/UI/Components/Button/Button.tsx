import React from "react";
import classNames from "classnames";
import { ButtonDataType } from "types/ComponentsTypes/buttonDataType";

// interface ButtonPropertyProps {
//   property: ButtonDataType;
// }

export const Button: React.FC<ButtonDataType> = (props) => {
  return (
    <button
      className={classNames(
        "rounded-10",
        props.backgroundColor,
        props.height,
        props.width,
        props.textColor,
        props.textSize
      )}
    >
      {props.icon && <props.icon />}
      {props.image && <img src={props.image} alt=" button contect" />}
      {props.text && props.text}
    </button>
  );
};
