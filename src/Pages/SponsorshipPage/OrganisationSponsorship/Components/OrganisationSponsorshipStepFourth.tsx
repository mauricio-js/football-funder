import React from "react";
import { ListingDetailsPage } from "UI";

export const OrganisationSponsorshipStepFourth: React.FC = () => {
  return (
    <div>
      <ListingDetailsPage
        stepNumber="Step 4"
        pageTitle="Create your listing"
        description={true}
        listingTitle="Sponsorship listing title"
      />
    </div>
  );
};
