import React from "react";
import { CheckBox } from "UI";
import { RadioButtonDataType } from "types";
import classNames from "classnames";

interface CheckboxListDataProps {
  name: string;
  classes?: string;
  options: RadioButtonDataType[];
  // selectedValues: string[];
  // setValues: (values: string[]) => void;
  textStyle: string;
}

export const GeneralCheckBoxList: React.FC<CheckboxListDataProps> = ({
  classes,
  options,
  textStyle,
  name,
}) => {
  return (
    <div className={classNames(classes || "mt-5 flex flex-col gap-5")}>
      {options.map((item, index) => {
        return (
          <div key={index}>
            <CheckBox
              align="flex-row-reverse gap-[10px]"
              name={name}
              value={item.value}
              label={item.label}
              textClass={textStyle}
            />
          </div>
        );
      })}
    </div>
  );
};
