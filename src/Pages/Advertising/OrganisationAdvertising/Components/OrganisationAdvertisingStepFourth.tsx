import React from "react";
import { ListingDetailsPage } from "UI";
import { StepperActionPropsType } from "types";

export const OrganisationAdvertisingStepFourth: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <ListingDetailsPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        stepNumber="Step 4"
        description={false}
        pageTitle="Create your listing"
        listingTitle="Advertising listing title"
      />
    </div>
  );
};
