import React from "react";
import { BasicInformationPage } from "UI";

export const OrganisationFundraiserStepFirst = () => {
  return (
    <div>
      <BasicInformationPage
        isAuth={true}
        contactText="Please provide the details of the legal contact for the fundraiser."
        organisation={false}
        stepTitle="Your basic information"
        stepNumber="Step 1"
      />
    </div>
  );
};
