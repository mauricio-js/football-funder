import React from "react";
import { ListingDetailsPage } from "UI";
import { StepperActionPropsType } from "types";

export const OrganisationSponsorshipStepFourth: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <ListingDetailsPage
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        stepNumber="Step 4"
        pageTitle="Create your listing"
        description={true}
        listingTitle="Sponsorship listing title"
      />
    </div>
  );
};
