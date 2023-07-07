import React from "react";
import { AddDetailsPage } from "UI";
import { StepperActionPropsType } from "types";

export const OrganisationFundraiserStepThird: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <AddDetailsPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        stepNumber="Step 3"
        addPerk={false}
        isShowAdvertNum={false}
        descriptionTitle="About the fundraiser"
        pageTitle="Create your fundraiser"
        titleImage="Fundraiser title image"
        pitchImage="Fundraiser pitch image/video "
        isShowDesciptionPanel={true}
      />
    </div>
  );
};
