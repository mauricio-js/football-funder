import React from "react";
import { AddRewardsFirstPage } from "UI";
import { StepperActionPropsType } from "types";

export const IndividualFundraiserStepThird: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <AddRewardsFirstPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        pageTitle="Create your listing"
        stepNumber="Step 3"
      />
    </div>
  );
};
