import React from "react";
import { BasicInformationPage } from "UI";

export const OrganisationFundraiserSignInStepSecond = () => {
  return (
    <div>
      <BasicInformationPage
        isAuth={false}
        contactText="Please provide the details of the organisation that you are listing advertising opportunities for."
        organisation={true}
        stepTitle="Organisation information"
        stepNumber="Step 2"
      />
    </div>
  );
};
