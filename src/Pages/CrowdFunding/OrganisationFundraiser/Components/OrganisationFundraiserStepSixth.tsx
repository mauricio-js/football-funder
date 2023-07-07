import React from "react";
import { AddRewardsThirdPage } from "UI";
import { StepperActionPropsType } from "types";

export const OrganisationFundraiserStepSixth: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <AddRewardsThirdPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        pageTitle="Create your fundraiser"
        stepNumber="Step 6"
      />
    </div>
  );
};
