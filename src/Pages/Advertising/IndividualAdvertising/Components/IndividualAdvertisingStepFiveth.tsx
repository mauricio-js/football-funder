import React from "react";
import { FinalTouchesPage } from "UI";
import { StepperActionPropsType } from "types";

export const IndividualAdvertisingStepFiveth: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <FinalTouchesPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        stepNumber="Step 5"
        isCrowdFundingPage={false}
      />
    </div>
  );
};
