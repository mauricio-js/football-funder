import React from "react";
import { AddDetailsPage } from "UI";

export const OrganisationListingStepFiveth: React.FC = () => {
  return (
    <div>
      <AddDetailsPage
        stepNumber="Step 5"
        addPerk={true}
        advertNumber={true}
        descriptionTitle="Description of advert"
        titleImage="Title image"
        pitchImage="Listing pitch image/video "
      />
    </div>
  );
};
