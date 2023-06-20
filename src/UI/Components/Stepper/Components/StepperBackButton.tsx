import React from "react";
import { RxCaretLeft } from "react-icons/rx";

export const StepperBackButton: React.FC = () => {
  return (
    <div className="flex gap-2.5 items-center">
      <RxCaretLeft />
      <div className="generalText text-gray-10">Back</div>
    </div>
  );
};
