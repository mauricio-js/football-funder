import React from "react";
import { ListingDetailsPage } from "UI";

export const IndividualSponsorshipStepThird: React.FC = () => {
  return (
    <div>
      <ListingDetailsPage
        stepNumber="Step 3"
        pageTitle="Create your listing"
        description={true}
        listingTitle="Sponsorship listing title"
      />
    </div>
  );
};
