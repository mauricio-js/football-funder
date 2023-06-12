import React from "react";
import { BasicInformationPage } from "UI";

export const OrganisationListingStepSecond = () => {
  return (
    <div>
      <BasicInformationPage
        isAuth={false}
        showAccountDetails={true}
        showOrganisation={true}
        showConfirmation={false}
        showModifyAlert={false}
        showProfileURL={true}
        contactText="Please provide the details of the organisation that you are listing advertising opportunities for."
        stepTitle="Organisation information"
        stepNumber="Step 2"
      />
    </div>
  );
};
