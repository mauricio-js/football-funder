import React from "react";
import { AddDetailsPage } from "UI";

export const IndividualListingStepFourth: React.FC = () => {
  return (
    <div>
      <AddDetailsPage
        stepNumber="Step 4"
        addPerk={true}
        advertNumber={true}
        descriptionTitle="Description of advert"
        titleImage="Title image"
        pitchImage="Listing pitch image/video "
      />
    </div>
  );
};
