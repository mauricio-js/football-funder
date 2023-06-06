import React, { useCallback } from "react";
import { CategoryButton } from "UI";
import { CategoryDataType } from "types";

interface CategoryButtonListProps {
  options: CategoryDataType[];
  currentValue: string;
  onSelect: (value: string) => void;
}

export const CategoryButtonList: React.FC<CategoryButtonListProps> = ({
  options,
  currentValue,
  onSelect,
}) => {
  const handleSelect = useCallback(
    (value: string) => {
      onSelect(value);
    },
    [onSelect]
  );
  return (
    <div className="flex flex-wrap gap-[10px]">
      {options.map((option, index) => {
        return (
          <div key={index}>
            <CategoryButton
              checked={currentValue === option.value}
              value={option.value}
              label={option.label}
              onSelect={() => handleSelect(option.value)}
            />
          </div>
        );
      })}
    </div>
  );
};
