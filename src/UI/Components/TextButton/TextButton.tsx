import React from "react";
import classNames from "classnames";
import { textButtonType } from "types/ComponentsTypes/textButtonType";

export const TextButton: React.FC<textButtonType> = (props) => {
  return <div className={classNames("textButton")}>{props.text}</div>;
};
