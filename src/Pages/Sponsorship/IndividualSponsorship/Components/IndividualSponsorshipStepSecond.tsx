import React from "react";
import { BasicInformationPage } from "UI";

export const IndividualSponsorshipStepSecond = () => {
  return (
    <div>
      <BasicInformationPage
        isAuth={false}
        showAccountDetails={true}
        showOrganisation={false}
        showConfirmation={true}
        showModifyAlert={true}
        showProfileURL={false}
        contactText="Please provide the details of the organisation that you are listing advertising opportunities for."
        pageTitle="Create your listing"
        stepTitle="Organisation information"
        stepNumber="Step 2"
      />
    </div>
  );
};
