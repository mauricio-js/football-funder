import React, { useCallback } from "react";
import classNames from "classnames";
import { RadioButton } from "UI";
import { RadioButtonDataType } from "types";

interface RadioButtonListProps {
  options: RadioButtonDataType[];
  currentValue: number | undefined;
  onSelect: (value: number) => void;
  classes?: string;
  textStyle: string;
  checkboxStyle: boolean;
}

export const RadioButtonList: React.FC<RadioButtonListProps> = ({
  options,
  currentValue,
  onSelect,
  classes,
  textStyle,
  checkboxStyle,
}) => {
  const handleSelect = useCallback(
    (value: number) => {
      // console.log("selected value", value);
      onSelect(value);
    },
    [onSelect]
  );

  // console.log("current value:", currentValue);
  return (
    <div className={classNames(classes)}>
      {options.map((option, index) => (
        <div key={index}>
          <RadioButton
            value={option.value}
            name={option.label}
            checked={currentValue === option.value}
            onSelect={() => handleSelect(option.value)}
            classes={option.classes}
            textStyle={textStyle}
            checkboxStyle={checkboxStyle}
          />
        </div>
      ))}
    </div>
  );
};
