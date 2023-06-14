import React from "react";
import { AddDetailsPage } from "UI";

export const OrganisationSponsorshipStepFiveth: React.FC = () => {
  return (
    <div>
      <AddDetailsPage
        stepNumber="Step 5"
        pageTitle="Create your listing"
        addPerk={true}
        isShowAdvertNum={false}
        descriptionTitle="Description of advert"
        titleImage="Title image"
        pitchImage="Listing pitch image/video "
        isShowDesciptionPanel={false}
      />
    </div>
  );
};
