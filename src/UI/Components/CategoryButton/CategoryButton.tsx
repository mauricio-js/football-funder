import React from "react";
import { CategoryButtonType } from "types/ComponentsTypes/categoryButtonType";

export const CategoryButton: React.FC<CategoryButtonType> = () => {
  return (
    <div>
      <button className="bg-green-10 border px-[60px] py-[15px] rounded-10 text-[14px] leading-[20px] font-semibold">
        category button
      </button>
    </div>
  );
};
