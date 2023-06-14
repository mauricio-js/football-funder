import React from "react";
import { BasicInformationPage } from "UI";

export const OrganisationSponsorshipStepSecond = () => {
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
        pageTitle="Create your listing"
        stepTitle="Organisation information"
        stepNumber="Step 2"
      />
    </div>
  );
};
