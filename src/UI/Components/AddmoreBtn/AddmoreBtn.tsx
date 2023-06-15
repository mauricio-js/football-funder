import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
export const AddmoreBtn: React.FC = () => {
  return (
    <div className="flex items-center generalSmallGrayText gap-2">
      <MdOutlineAddCircleOutline />
      Add more
    </div>
  );
};
