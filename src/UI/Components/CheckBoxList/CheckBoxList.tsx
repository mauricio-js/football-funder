import React from "react";
import { CheckBox } from "UI";
import { RadioButtonDataType } from "types";

interface FilterDataProps {
  options: RadioButtonDataType[];
  selectedValues: string[];
  setValues: (values: string[]) => void;
}

export const CheckBoxList: React.FC<FilterDataProps> = ({
  options,
  selectedValues,
  setValues,
}) => {
  const onHandleSelectedCheckbox = (value: string) => {
    if (value === "all") {
      setValues(["all"]);
    } else {
      const index = selectedValues.findIndex((val) => val === value);
      if (index < 0) {
        const filteredData = selectedValues.filter((val) => val !== "all");
        setValues([...filteredData, value]);
      } else {
        const filteredData = selectedValues.filter(
          (val) => val !== value && val !== "all"
        );
        setValues(filteredData);
      }
    }
  };
  // console.log(selectedValues);

  return (
    <div className="mt-5 flex flex-col gap-5">
      {options.map((item, index) => {
        return (
          <div key={index}>
            <CheckBox
              value={item.value}
              label={item.label}
              checked={selectedValues.includes(item.value)}
              onSelect={onHandleSelectedCheckbox}
              textClass="text-green-70 generalText"
            />
          </div>
        );
      })}
    </div>
  );
};
