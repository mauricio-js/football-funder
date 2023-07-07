import React from "react";
import { AddRewardsFirstPage } from "UI";
import { StepperActionPropsType } from "types";

export const OrganisationFundraiserStepFourth: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <AddRewardsFirstPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        pageTitle="Create your fundraiser"
        stepNumber="Step 4"
      />
    </div>
  );
};
