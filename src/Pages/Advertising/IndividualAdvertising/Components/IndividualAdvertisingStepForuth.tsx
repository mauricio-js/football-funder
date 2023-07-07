import React from "react";
import { AddDetailsPage } from "UI";
import { StepperActionPropsType } from "types";

export const IndividualAdvertisingStepFourth: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <AddDetailsPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        addPerk={true}
        isShowAdvertNum={true}
        isShowDesciptionPanel={false}
        descriptionTitle="Description of advert"
        pageTitle="Create your listing"
        pitchImage="Listing pitch image/video "
        stepNumber="Step 4"
        titleImage="Title image"
      />
    </div>
  );
};
