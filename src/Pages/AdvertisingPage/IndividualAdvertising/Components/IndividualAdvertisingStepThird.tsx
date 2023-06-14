import React from "react";
import { ListingDetailsPage } from "UI";

export const IndividualAdvertisingStepThird: React.FC = () => {
  return (
    <div>
      <ListingDetailsPage
        stepNumber="Step 3"
        description={false}
        listingTitle="Advertising listing title"
        pageTitle="Create your listing"
      />
    </div>
  );
};
