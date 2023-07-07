import React from "react";
import { FundraiserDetailsPage } from "UI";
import { StepperActionPropsType } from "types";

export const IndividualFundraiserStepFirst: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <FundraiserDetailsPage
        stepNumber="Step 1"
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
};
