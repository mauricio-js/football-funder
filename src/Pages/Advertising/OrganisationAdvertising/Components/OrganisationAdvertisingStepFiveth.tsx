import React from "react";
import { AddDetailsPage } from "UI";
import { StepperActionPropsType } from "types";

export const OrganisationAdvertisingStepFiveth: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <AddDetailsPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        stepNumber="Step 5"
        addPerk={true}
        isShowAdvertNum={true}
        isShowDesciptionPanel={true}
        descriptionTitle="Description of advert"
        pageTitle="Create your listing"
        pitchImage="Listing pitch image/video "
        titleImage="Title image"
      />
    </div>
  );
};
