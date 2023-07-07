import React from "react";
import { FundraiserDetailsPage } from "UI";
import { StepperActionPropsType } from "types";

export const OrganisationFundraiserStepSecond: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <FundraiserDetailsPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        stepNumber="Step 2"
      />
    </div>
  );
};
