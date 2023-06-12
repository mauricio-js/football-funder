import React from "react";
import { BasicInformationPage } from "UI";

export const OrganisationFundraiserStepFirst = () => {
  return (
    <div>
      <BasicInformationPage
        isAuth={true}
        showAccountDetails={false}
        showOrganisation={false}
        showConfirmation={false}
        showModifyAlert={true}
        showProfileURL={false}
        contactText="Please provide the details of the legal contact for the fundraiser."
        stepTitle="Your basic information"
        stepNumber="Step 1"
      />
    </div>
  );
};
