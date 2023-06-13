import React from "react";
import { AddDetailsPage } from "UI";

export const IndividualFundraiserStepSecond: React.FC = () => {
  return (
    <div>
      <AddDetailsPage
        stepNumber="Step 2"
        addPerk={false}
        advertNumber={false}
        descriptionTitle="About the fundraiser"
        titleImage="Fundraiser title image"
        pitchImage="Fundraiser pitch image/video "
      />
    </div>
  );
};
