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
  // selectedValues,
  // setValues,
  textStyle,
  name,
}) => {
  // const { selectedCheckbox, handleSelectedCheckbox } =
  //   useContext(FormStepperContext);
  // const onHandleSelectedCheckbox = (value: string) => {
  //   const index = selectedValues.findIndex((val) => val === value);
  //   if (index < 0) {
  //     setValues([...selectedValues, value]);
  //   } else {
  //     const filteredData = selectedValues.filter((val) => val !== value);
  //     setValues(filteredData);
  //   }
  // };
  //console.log(selectedValues);

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
              // checked={selectedCheckbox[name].includes(item.value)}
              // onSelect={onHandleSelectedCheckbox}
              textClass={textStyle}
            />
          </div>
        );
      })}
    </div>
  );
};
