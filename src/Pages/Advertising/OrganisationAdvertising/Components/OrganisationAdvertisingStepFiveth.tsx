import React from "react";
import { AddDetailsPage } from "UI";

export const OrganisationAdvertisingStepFiveth: React.FC = () => {
  return (
    <div>
      <AddDetailsPage
        stepNumber="Step 5"
        addPerk={true}
        isShowAdvertNum={true}
        isShowDesciptionPanel={true}
        descriptionTitle="Description of advert"
        pageTitle="Create your listing"
        pitchImage="Listing pitch image/video "
        titleImage="Title image"
      />
    </div>
  );
};
