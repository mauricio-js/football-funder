import React from "react";
import { AddRewardsSecondPage } from "UI";
import { StepperActionPropsType } from "types";

export const IndividualFundraiserStepFourth: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <AddRewardsSecondPage
        pageTitle="Create your fundraiser"
        stepNumber="Step 4"
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
};
