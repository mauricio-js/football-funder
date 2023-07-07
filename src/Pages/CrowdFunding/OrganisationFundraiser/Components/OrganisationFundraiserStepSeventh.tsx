import React from "react";
import { FinalTouchesPage } from "UI";
import { StepperActionPropsType } from "types";

export const OrganisationFundraiserStepSeventh: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <FinalTouchesPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        stepNumber="Step 7"
        isCrowdFundingPage={true}
      />
    </div>
  );
};
