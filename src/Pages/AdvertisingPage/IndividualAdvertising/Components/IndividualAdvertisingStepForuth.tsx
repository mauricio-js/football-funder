import React from "react";
import { AddDetailsPage } from "UI";

export const IndividualAdvertisingStepFourth: React.FC = () => {
  return (
    <div>
      <AddDetailsPage
        addPerk={true}
        isShowAdvertNum={true}
        isShowDesciptionPanel={false}
        descriptionTitle="Description of advert"
        pageTitle="Create your listing"
        pitchImage="Listing pitch image/video "
        stepNumber="Step 4"
        titleImage="Title image"
      />
    </div>
  );
};
