import React from "react";
import { AddDetailsPage } from "UI";

export const IndividualFundraiserStepSecond: React.FC = () => {
  return (
    <div>
      <AddDetailsPage
        stepNumber="Step 2"
        addPerk={false}
        isShowAdvertNum={false}
        descriptionTitle="About the fundraiser"
        pitchImage="Fundraiser pitch image/video "
        pageTitle="Create your fundraiser"
        titleImage="Fundraiser title image"
        isShowDesciptionPanel={true}
      />
    </div>
  );
};
