import React from "react";
import { AddDetailsPage } from "UI";

export const OrganisationFundraiserStepThird: React.FC = () => {
  return (
    <div>
      <AddDetailsPage
        stepNumber="Step 3"
        addPerk={false}
        isShowAdvertNum={false}
        descriptionTitle="About the fundraiser"
        pageTitle="Create your fundraiser"
        titleImage="Fundraiser title image"
        pitchImage="Fundraiser pitch image/video "
        isShowDesciptionPanel={true}
      />
    </div>
  );
};
