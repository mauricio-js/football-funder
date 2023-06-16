import React from "react";
import { ListingDetailsPage } from "UI";

export const OrganisationAdvertisingStepFourth: React.FC = () => {
  return (
    <div>
      <ListingDetailsPage
        stepNumber="Step 4"
        description={false}
        pageTitle="Create your listing"
        listingTitle="Advertising listing title"
      />
    </div>
  );
};
