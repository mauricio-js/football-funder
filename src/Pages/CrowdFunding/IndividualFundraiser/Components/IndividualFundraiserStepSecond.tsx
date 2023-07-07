import React from "react";
import { AddDetailsPage } from "UI";
import { StepperActionPropsType } from "types";

export const IndividualFundraiserStepSecond: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <AddDetailsPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        stepNumber="Step 2"
        addPerk={false}
        isShowAdvertNum={false}
        descriptionTitle="About the fundraiser"
        pitchImage="Fundraiser pitch image/video "
        pageTitle="Create your fundraiser"
        titleImage="Fundraiser title image"
        isShowDesciptionPanel={true}
      />
    </div>
  );
};
