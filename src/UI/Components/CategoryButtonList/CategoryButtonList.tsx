import React, { useContext } from "react";
import { FormStepperContext } from "App/FormStepperProvider";
import { CategoryButton } from "UI";
import { CategoryDataType } from "types";

interface CategoryButtonListProps {
  options: CategoryDataType[];
  name: string;
}

export const CategoryButtonList: React.FC<CategoryButtonListProps> = ({
  options,
  name,
}) => {
  const { selectValue } = useContext(FormStepperContext)!;
  return (
    <div className="flex flex-wrap gap-[10px]">
      {options.map((option, index) => {
        return (
          <div key={index}>
            <CategoryButton
              name={name}
              checked={selectValue[name] === option.value}
              value={option.value}
              label={option.label}
            />
          </div>
        );
      })}
    </div>
  );
};
