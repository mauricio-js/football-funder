import React from "react";
import { FinalTouchesPage } from "UI";
import { StepperActionPropsType } from "types";

export const IndividualFundraiserStepSixth: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <FinalTouchesPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        stepNumber="Step 6"
        isCrowdFundingPage={true}
      />
    </div>
  );
};
