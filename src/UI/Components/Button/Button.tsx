import React from "react";
import classNames from "classnames";
import { ButtonDataType } from "types/ComponentsTypes/buttonType";

export const Button: React.FC<ButtonDataType> = (props) => {
  return (
    <button
      className={classNames(
        "rounded-10 flex items-center justify-center",
        props.backgroundColor,
        props.padding,
        props.height,
        props.width,
        props.textColor,
        props.textSize,
        props.border
      )}
      onClick={props.handleClick}
      disabled={props.disabled}
    >
      {props.icon && <props.icon />}
      {props.image && <img src={props.image} alt=" button content" />}
      {props.text && props.text}
    </button>
  );
};
