import React from "react";
import { BasicInformationPage } from "UI";

export const OrganisationFundraiserSignInStepSecond = () => {
  return (
    <div>
      <BasicInformationPage
        isAuth={false}
        showAccountDetails={true}
        showOrganisation={true}
        showConfirmation={true}
        showModifyAlert={false}
        showProfileURL={false}
        contactText="Please provide the details of the organisation that you are listing advertising opportunities for."
        pageTitle="Create your listing"
        stepTitle="Organisation information"
        stepNumber="Step 2"
      />
    </div>
  );
};
