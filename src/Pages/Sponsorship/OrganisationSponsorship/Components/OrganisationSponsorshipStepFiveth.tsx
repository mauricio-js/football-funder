import React from "react";
import { AddDetailsPage } from "UI";
import { StepperActionPropsType } from "types";

export const OrganisationSponsorshipStepFiveth: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <AddDetailsPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        stepNumber="Step 5"
        pageTitle="Create your listing"
        addPerk={true}
        isShowAdvertNum={false}
        descriptionTitle="Description of advert"
        titleImage="Title image"
        pitchImage="Listing pitch image/video "
        isShowDesciptionPanel={false}
      />
    </div>
  );
};
