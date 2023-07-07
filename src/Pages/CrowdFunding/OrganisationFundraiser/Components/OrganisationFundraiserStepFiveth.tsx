import React from "react";
import { AddRewardsSecondPage } from "UI";
import { StepperActionPropsType } from "types";
export const OrganisationFundraiserStepFiveth: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <AddRewardsSecondPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        pageTitle="Create your fundraiser"
        stepNumber="Step 5"
      />
    </div>
  );
};
