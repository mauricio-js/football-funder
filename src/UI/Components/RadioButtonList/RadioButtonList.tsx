import React, { useCallback } from "react";
import { RadioButton } from "../RadioButton/RadioButton";
import { FilterDataType } from "types";

interface RadioButtonListProps {
  options: FilterDataType[];
  currentValue: string;
  onSelect: (value: string) => void;
}

export const RadioButtonList: React.FC<RadioButtonListProps> = ({
  options,
  currentValue,
  onSelect,
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
    <div>
      {options.map((option, index) => (
        <div className="mt-[20px]" key={index}>
          <RadioButton
            value={option.value}
            name={option.label}
            checked={currentValue === option.value}
            onSelect={() => handleSelect(option.value)}
          />
        </div>
      ))}
    </div>
  );
};
