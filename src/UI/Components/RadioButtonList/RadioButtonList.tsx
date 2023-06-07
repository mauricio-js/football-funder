import React, { useCallback } from "react";
import classNames from "classnames";
import { RadioButton } from "UI";
import { RadioButtonDataType } from "types";

interface RadioButtonListProps {
  options: RadioButtonDataType[];
  currentValue: string;
  onSelect: (value: string) => void;
  classes?: string;
}

export const RadioButtonList: React.FC<RadioButtonListProps> = ({
  options,
  currentValue,
  onSelect,
  classes,
}) => {
  const handleSelect = useCallback(
    (value: string) => {
      // console.log("selected value", value);
      onSelect(value);
    },
    [onSelect]
  );

  // console.log("current value:", currentValue);
  return (
    <div className={classNames(classes)}>
      {options.map((option, index) => (
        <div className="" key={index}>
          <RadioButton
            value={option.value}
            name={option.label}
            checked={currentValue === option.value}
            onSelect={() => handleSelect(option.value)}
            classes={option.classes}
          />
        </div>
      ))}
    </div>
  );
};
