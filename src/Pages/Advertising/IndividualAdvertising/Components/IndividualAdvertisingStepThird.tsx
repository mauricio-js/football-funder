import React from "react";
import { ListingDetailsPage } from "UI";
import { StepperActionPropsType } from "types";

export const IndividualAdvertisingStepThird: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <ListingDetailsPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        stepNumber="Step 3"
        description={false}
        listingTitle="Advertising listing title"
        pageTitle="Create your listing"
      />
    </div>
  );
};
